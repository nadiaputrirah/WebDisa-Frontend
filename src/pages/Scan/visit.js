import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import imgVisit from "../../assets/visit.svg";

export default function Visit() {
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
          <a
            href="/"
            className="mx-auto inline-flex justify-center px-10 py-4 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Scan Untuk Keluar
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
