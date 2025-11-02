import express, { Request, Response } from "express";
import { cleanUsers } from "./services/firebaseService";

const app = express();
const PORT = 3000;

app.use(express.json());

// Тестовый API
app.post("/api/ping", async (req: Request, res: Response) => {
  try {
    res.json({ ok: true, message: "Server running" });
  } catch (error: any) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

setInterval(cleanUsers, 1000);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
