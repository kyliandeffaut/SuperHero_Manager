import "dotenv/config";
import { connectDB } from "../config/db.js";
import Hero from "../models/Hero.js";
import fs from "fs";
import path from "path";

async function main() {
  const file = path.join(process.cwd(), "backend", "src", "SuperHerosComplet.json");
  const raw = fs.readFileSync(file, "utf-8");
  const data = JSON.parse(raw);
  await connectDB(process.env.MONGO_URI || "mongodb://localhost:27017/superheroes");
  await Hero.deleteMany({});
  await Hero.insertMany(data);
  console.log("✅ Import terminé");
  process.exit(0);
}
main().catch((e) => { console.error(e); process.exit(1); });
