import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db";
import heroRoutes from "./routes/heroRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/heroes", heroRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB(process.env.MONGO_URI!);
  
  app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
  });
}

startServer();