import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import QrReader from "react-qr-scanner";
import { useState } from "react";
import axios from "axios";
import imgVisit from "../../assets/visit.svg";

export default function Visit() {
  const navigate = useNavigate();
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      console.log("QR Code data:", data);
      setResult(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const handleClickScan = async () => {
    await axios.post(
      `${process.env.REACT_APP_API}/destinasi/visit`,
      { status: "out", code: result },
      { headers: { Authorization: localStorage.getItem("token") } }
    );
    navigate("/out");
  };
  const previewStyle = {
    height: 400,
    width: 600,
  };
  return (
    <div>
      <Navbars />
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-32">
        <div class="w-full mb-10 lg:mb-24 text-center">
          <h2 class="text-[#014539] text-4xl font-bold mx-auto lg:w-1/2 mb-6">
            Selamat Datang di Curug Jenggala!
          </h2>
          <img src={imgVisit} alt="" class="mx-auto w-96 h-96" />
        </div>

        <div class="w-full mb-8 lg:mb-16 text-center">
          <h2 class="mb-4 text-xl font-medium text-[#439A97] ">
            Tanggal dan Waktu Kunjungan
          </h2>
          <h2 class="mb-10 text-[#014539] text-3xl font-bold mx-auto lg:w-1/2">
            21 Agustus 2023, 10.45 WIB
          </h2>
          <div class=" w-full mx-auto max-w-screen-xl flex justify-center items-center">
            {/* <Scanner /> */}
            <QrReader
              delay={delay}
              style={previewStyle}
              onError={handleError}
              onScan={handleScan}
            />
          </div>
          <p className="text-center text-[#439A97] mt-10 text-lg">
            Hasil Scan : {result}
          </p>

          <button
            disabled={result == "No result"}
            onClick={handleClickScan}
            className="mx-auto mt-10 inline-flex justify-center px-10 py-4 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Scan Untuk Keluar
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
