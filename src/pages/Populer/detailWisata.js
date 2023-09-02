import React from "react";
import Footer from "../../components/footer";

import Navbar from "../../components/Navigasi/navbarScrolled";
import indikator from "../../assets/indikatorPadat.png";
import BannerDestinasi from "../../components/Populer/banner";
import MapComponent from "../../components/Populer/map";

export default function DetailWisata() {
  return (
    <div>
      <Navbar />
      <BannerDestinasi />
      <section class="bg-white mt-32">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-6 text-xl font-medium text-[#439A97]">
              Indikator Kepadatan Pariwisata
            </h2>
            <h2 className="mb-6 text-4xl font-bold text-[#014539]">
              Saat ini Curug Jenggala sedang <span>Ramai</span>
            </h2>
            <p className="mb-6 text-xl font-medium text-[#439A97]">
              <span>50</span> orang sedang berkunjung di curug jenggala
            </p>
            <a
              href="/"
              className=" inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
            >
              Kunjungi Wisata
            </a>
          </div>

          <img
            src={indikator}
            class="w-full items-center mb-4"
            alt="Info Logo"
          />
        </div>
      </section>

      <section class="bg-white mt-32">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <MapComponent />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-6 text-3xl font-medium text-[#439A97]">
              Lokasi Pariwisata Curug Jenggala
            </h2>
            <h2 className="mb-6 text-md font-normal text-[#014539]">
              Jl. Pangeran Limboro, Dusun III Kalipagu, Ketenger, Kec.
              Baturaden, Kabupaten Banyumas, Jawa Tengah 53152
            </h2>
            <a
              href="/"
              className=" inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
            >
              Lihat Rute
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
