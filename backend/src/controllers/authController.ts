import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export async function register(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: "Champs manquants" });

    const exists = await User.findOne({ username });
    if (exists) return res.status(400).json({ message: "Utilisateur existant" });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, passwordHash });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({ username: user.username, token });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Erreur serveur" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Utilisateur inconnu" });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(400).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({ username: user.username, token });
  } catch {
    res.status(500).json({ message: "Erreur serveur" });
  }
}
