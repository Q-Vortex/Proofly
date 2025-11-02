import admin, { ServiceAccount } from "firebase-admin";

// Инициализация Admin SDK
const serviceAccount: ServiceAccount = require("./data/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Функция для очистки пользователей
export async function cleanUsers() {
  try {
    const now = Date.now();

    const usersSnap = await db
      .collection("users")
      .where("tokenExpiresAt", "<", now)
      .get();

    if (usersSnap.empty) return;

    for (const docSnap of usersSnap.docs) {
      const uid: string = docSnap.id;

      const userRecord = await admin.auth().getUser(uid);
      if (!userRecord.emailVerified) {
        // Удаляем пользователя из Auth
        await admin.auth().deleteUser(uid);
        // Удаляем из Firestore
        await db.collection("users").doc(uid).delete();
        console.log(`Deleted unverified user ${uid}`);
      } else {
        // Пользователь подтвердил почту — удаляем токен
        await db.collection("users").doc(uid).update({
          verificationToken: admin.firestore.FieldValue.delete(),
          tokenExpiresAt: admin.firestore.FieldValue.delete(),
        });
        console.log(`Verified user ${uid}, token removed`);
      }
    }
  } catch (err: any) {
    console.error("Error cleaning users:", err);
  }
}

export { admin, db };
