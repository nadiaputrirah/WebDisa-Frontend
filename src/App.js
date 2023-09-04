import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home/index";
import Login from "./pages/Auth/login";
import Info from "./pages/Information/info";
import Populer from "./components/Populer/populer";
import Register from "./pages/Auth/register";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/home/*" element={<Home />} />
      <Route path="/info/*" element={<Info />} />
      <Route path="/populer/*" element={<Populer />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
    </Routes>
  );
}

export default App;
