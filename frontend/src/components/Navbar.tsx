import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
        >
          SuperHero Manager
        </Typography>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {user && (
            <Typography variant="body1">Connecté en tant que {user}</Typography>
          )}
          <Button
            color="inherit"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Déconnexion
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
