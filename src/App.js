import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Info from "./pages/Information/info";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
