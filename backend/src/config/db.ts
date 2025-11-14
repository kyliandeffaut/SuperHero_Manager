import mongoose from "mongoose";

export async function connectDB(uri: string) {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connecté !");
  } catch (err) {
    console.error("❌ Erreur de connexion MongoDB :", err);
    process.exit(1);
  }
}
