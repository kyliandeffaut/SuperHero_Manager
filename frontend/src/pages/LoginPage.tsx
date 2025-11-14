import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { loginApi } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginApi(username, password);
      login(data.username, data.token);
      navigate("/");
    } catch {
      setError("Identifiants incorrects");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper sx={{ p: 4, width: 400, textAlign: "center" }}>
        <Typography variant="h5" mb={2}>Connexion</Typography>
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
        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          Se connecter
        </Button>
        <Typography variant="body2" mt={2}>
          Pas encore de compte ? <Link to="/register">S'inscrire</Link>
        </Typography>
      </Paper>
    </Box>
  );
}
