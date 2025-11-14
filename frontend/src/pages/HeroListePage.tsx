import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import heroesData from "../data/SuperHerosComplet.json";

interface SuperHero {
  id: number;
  name: string;
  slug: string;
  biography: { publisher: string };
  images: { xs: string; sm: string; md: string; lg: string };
}

export default function HeroListePage() {
  const [heroes, setHeroes] = useState<SuperHero[]>([]);

  useEffect(() => {
    setHeroes((heroesData as any).superheros);
  }, []);

  const getImagePath = (hero: SuperHero) => {
    // hero.images.md = "md/1-a-bomb.jpg"
    return `/images/${hero.images.md}`;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" mb={3}>
        Liste des Héros
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {heroes.map((hero) => (
          <Card key={hero.id} sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="250"
              image={getImagePath(hero)}
              alt={hero.name}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/default.jpg";
              }}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" textAlign="center">
                {hero.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
              >
                {hero.biography.publisher}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
