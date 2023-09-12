import React from "react";

import Scan from "../../components/scan";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";
import Scanner from "../../components/scanner";
import { useNavigate, useParams } from "react-router-dom";
import QrReader from "react-qr";
import { useState } from "react";
import axios from "axios";

export default function PageScan() {
  const param = useParams();
  const navigate = useNavigate();
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState("No result");

  const [selected, setSelected] = useState("environment");

  const handleScan = (data) => {
    // console.log(data);
    if (data) {
      console.log("QR Code data:", data.text);
      setResult(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleClickScan = async () => {
    const scan = await axios.post(
      `${process.env.REACT_APP_API}/destinasi/visit`,
      { status: "in", code: result },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    await axios.post(
      `${process.env.REACT_APP_API}/history`,
      { user: localStorage.getItem("id"), destinasi: scan.data.data.id },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    navigate(`/scan-out/${scan.data.data.id}`);
  };
  const previewStyle = {
    height: 400,
    width: 400,
  };
  return (
    <div>
      <Navbars />
      <Scan />
      <div class=" w-full mx-auto max-w-screen-xl flex justify-center items-center">
      <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>

          </select>
        <QrReader
          delay={500}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          // facingMode={selected}
          constraints={{ video: { facingMode: selected } }}
        />
        
      </div>
      <p className="text-center text-[#439A97] mt-10 text-lg">
        Hasil Scan : {result}
      </p>
      <div class="py-2 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <button
          disabled={result == "No result" || !localStorage.getItem("token")}
          className="mx-auto w-full inline-flex justify-center px-4 py-4 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          onClick={handleClickScan}
        >
          Scan Sekarang
        </button>
      </div>

      <Footer />
    </div>
  );
}
