import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailWisata from "./pages/Populer/detailWisata";
// import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<DetailWisata />} />
          {/* <Route path="/info" element={<Info />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
