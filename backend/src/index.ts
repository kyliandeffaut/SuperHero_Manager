import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// 👉 import dynamique compatible ESM
const { connectDB } = await import(pathToFileURL("./src/config/db.ts").href);
const heroRoutes = (await import(pathToFileURL("./src/routes/heroRoutes.ts").href)).default;
const authRoutes = (await import(pathToFileURL("./src/routes/authRoutes.ts").href)).default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

// fichiers statiques
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.use("/api/heroes", heroRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

await connectDB(process.env.MONGO_URI || "mongodb://localhost:27017/superheroes");

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
