import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

export default function HeroDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h5">Héros introuvable ❌</Typography>
        <Button sx={{ mt: 2 }} variant="outlined" onClick={() => navigate("/")}>
          Retour à la liste
        </Button>
      </Box>
    );
  }

  const { name, img, desc, univers } = state;

  return (
    <Box p={4} display="flex" justifyContent="center">
      <Card sx={{ maxWidth: 600, boxShadow: 5 }}>
        <CardMedia
          component="img"
          image={img}
          alt={name}
          sx={{ height: 400, objectFit: "cover" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/600x400?text=Image+indisponible";
          }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {desc}
          </Typography>
          <Typography variant="body2" color="primary">
            Univers : {univers}
          </Typography>
          <Button sx={{ mt: 3 }} variant="contained" onClick={() => navigate("/")}>
            Retour
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
