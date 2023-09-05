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
import Register from "./pages/Auth/register";
import DetailWisata from "./pages/Populer/detailWisata";
import Scan from "./components/scan";
import PageScan from "./pages/Scan/scan";
import Visit from "./pages/Scan/visit";
import OutVisit from "./pages/Scan/out";
import PageBerbagi from "./pages/Berbagi/berbagi";
import DetailInfo from "./pages/Information/infoDetail";
import Populers from "./pages/Populer/populer";

// Dashboard User
import KunjunganWisata from "./pages/DashboardUser/kunjungan";
import ProfileUser from "./pages/DashboardUser/profile";
import Reward from "./pages/DashboardUser/reward";
import WisataUser from "./pages/DashboardUser/wisata";
import WisataAdmin from "./pages/DashboardAdmin/wisata";
import Admin from "./pages/DashboardAdmin/user";
import ProcessUpload from "./pages/Berbagi/proscesUpload";
import FinishUpload from "./pages/Berbagi/finish";
import UlasanUser from "./pages/DashboardAdmin/ulasanUser";

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
      {/* <Route path="/populer/*" element={<Populer />} /> */}

      <Route path="/populer/:id" element={<DetailWisata />} />
      <Route path="/scan-out/:id" element={<Visit />} />

      <Route path="/scan" element={<PageScan />} />
      <Route path="/out" element={<OutVisit />} />
      <Route path="/populer/*" element={<Populers />} />
      <Route path="/berbagi/*" element={<PageBerbagi />} />
      <Route path="/scan/*" element={<PageScan />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/detailInfo/*" element={<DetailInfo />} />
      <Route path="/detailWisata/*" element={<DetailWisata />} />
      <Route path="/processUpload/*" element={<ProcessUpload />} />
      <Route path="/finishUpload/*" element={<FinishUpload />} />

      {/* Dashboard User */}
      <Route path="/kunjunganWisata/*" element={<KunjunganWisata />} />
      <Route path="/profileUser/*" element={<ProfileUser />} />
      <Route path="/reward/*" element={<Reward />} />
      <Route path="/wisataUser/*" element={<WisataUser />} />

      {/* Dashboard Admin */}
      <Route path="/wisataAdmin/*" element={<WisataAdmin />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/ulasanUser/*" element={<UlasanUser />} />
    </Routes>
  );
}

export default App;
