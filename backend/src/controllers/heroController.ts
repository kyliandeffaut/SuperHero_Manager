import type { Request, Response } from "express";
import Hero from "../models/Hero";

export async function listHeroes(req: Request, res: Response) {
  const heroes = await Hero.find();
  res.json(heroes);
}

export async function getHero(req: Request, res: Response) {
  const hero = await Hero.findById(req.params.id);
  if (!hero) return res.status(404).json({ message: "Héros introuvable" });
  res.json(hero);
}

export async function createHero(req: Request, res: Response) {
  const data: any = req.body;
  if (req.file) data.image = `/uploads/${req.file.filename}`;
  const hero = await Hero.create(data);
  res.status(201).json(hero);
}

export async function updateHero(req: Request, res: Response) {
  const data: any = req.body;
  if (req.file) data.image = `/uploads/${req.file.filename}`;
  const hero = await Hero.findByIdAndUpdate(req.params.id, data, { new: true });
  if (!hero) return res.status(404).json({ message: "Héros introuvable" });
  res.json(hero);
}

export async function deleteHero(req: Request, res: Response) {
  const hero = await Hero.findByIdAndDelete(req.params.id);
  if (!hero) return res.status(404).json({ message: "Héros introuvable" });
  res.json({ ok: true });
}
