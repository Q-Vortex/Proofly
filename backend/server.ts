import express, { Request, Response } from "express";
import { cleanUsers } from "./services/firebaseService";

const app = express();
const PORT = 3000;

app.use(express.json());

// Тестовый API
app.post("/api/ping", async (req: Request, res: Response) => {
  try {
    res.json({ ok: true, message: "Server running" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ ok: false, error: error.message });
    } else {
      res.status(500).json({ ok: false, error: "Unknown error" });
    }
  }
});

// Интервал для очистки пользователей
setInterval(async () => {
  try {
    await cleanUsers();
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Error in cleanUsers interval:", err.message);
    } else {
      console.error("Unknown error in cleanUsers interval:", err);
    }
  }
}, 1000);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
