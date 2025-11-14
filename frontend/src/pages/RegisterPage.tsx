import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { registerApi } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const data = await registerApi(username, password);
      login(data.username, data.token);
      navigate("/");
    } catch {
      setError("Erreur lors de l'inscription");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper sx={{ p: 4, width: 400, textAlign: "center" }}>
        <Typography variant="h5" mb={2}>Créer un compte</Typography>
        <TextField
          label="Nom d'utilisateur"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleRegister}>
          S'inscrire
        </Button>
        <Typography variant="body2" mt={2}>
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </Typography>
      </Paper>
    </Box>
  );
}
