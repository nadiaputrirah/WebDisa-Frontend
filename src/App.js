import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Home from "./pages/Home/index";
import Login from "./pages/Auth/login";
import Info from "./pages/Information/info";
import Populer from "./components/Populer/populer";
import Register from "./pages/Auth/register";
import DetailWisata from "./pages/Populer/detailWisata";
import Scan from "./components/scan";
import PageScan from "./pages/Scan/scan";
import Visit from "./pages/Scan/visit";
import OutVisit from "./pages/Scan/out";

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
      <Route path="/populer/:id" element={<DetailWisata />} />
      <Route path="/scan" element={<PageScan />} />
      <Route path="/scan-out/:id" element={<Visit />} />
      <Route path="/out" element={<OutVisit />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
    </Routes>
  );
}

export default App;
