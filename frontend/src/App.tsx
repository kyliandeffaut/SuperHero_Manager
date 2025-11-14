import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import HeroDetails from "./pages/HeroDetails";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HeroListePage from "./pages/HeroListePage";

function AppRoutes() {
  const { user } = useAuth();

  return (
    <>
      {user && <Navbar />}
      <Routes>
        {user ? (
          <>
            {/* PAGE PRINCIPALE = liste des héros */}
            <Route path="/" element={<HeroListePage />} />
            <Route path="/heroes" element={<HeroListePage />} />

            {/* Détails d’un héro */}
            <Route path="/hero/:name" element={<HeroDetails />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}
