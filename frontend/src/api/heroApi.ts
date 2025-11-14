import heroesData from "../data/SuperHerosComplet.json";

export interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface SuperHero {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  biography: { fullName: string; publisher: string; alignment: string };
  images: { xs: string; sm: string; md: string; lg: string };
}

// ⭐⭐⭐ Correction principale : on force le typage ⭐⭐⭐
const heroes: SuperHero[] = (heroesData as any).superheros;

// ========= FONCTIONS =========

export const getAllHeroes = async (): Promise<SuperHero[]> => {
  return heroes;
};

export const getHeroById = async (id: number): Promise<SuperHero | undefined> => {
  return heroes.find((h) => h.id === id);
};
