import React from "react";
import Footer from "../../components/footer";

import Navbar from "../../components/Navigasi/navbarScrolled";
import indikator from "../../assets/indikatorPadat.png";
import BannerDestinasi from "../../components/Populer/banner";
import MapComponent from "../../components/Populer/map";

import gallery1 from "../../assets/galleryJenggala/img1.svg";
import gallery2 from "../../assets/galleryJenggala/img2.svg";
import gallery3 from "../../assets/galleryJenggala/img3.svg";
import gallery4 from "../../assets/galleryJenggala/img4.svg";
import gallery5 from "../../assets/galleryJenggala/img5.svg";
import gallery6 from "../../assets/galleryJenggala/img6.svg";
import gallery7 from "../../assets/galleryJenggala/img7.svg";
import gallery8 from "../../assets/galleryJenggala/img8.svg";
import gallery9 from "../../assets/galleryJenggala/img9.svg";
import gallery10 from "../../assets/galleryJenggala/img10.svg";

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

      <section class="bg-white">
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

      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="w-full mb-8 lg:mb-10 text-center">
            <h2 class="mb-10 text-4xl font-medium text-[#439A97] ">
              Informasi Pariwisata
            </h2>
          </div>
          <div class="w-full mt-10">
            <h3 class="mb-10 text-[#014539] text-2xl font-bold">Deskripsi</h3>
            <p class="w-full mb-5">
              Curug Jenggala adalah air terjun yang berlokasi di Ketenger,
              Baturaden, Banyumas. Air terjun ini memiliki ketinggian 30 meter
              dari permukaan tanah. Curug ini mempunyai tiga air terjun yang
              tingginya sejajar, dengan air terjun yang di tengah memiliki arus
              yang paling deras.
            </p>
            <p class="w-full mb-5">
              Selain keindahan alamnya, Curug Jenggala juga menawarkan
              lingkungan yang sejuk dan hijau. Dikelilingi oleh pepohonan rimbun
              dan vegetasi yang subur, tempat ini cocok untuk bersantai sambil
              menikmati udara segar alam.
            </p>
            <p class="w-full mb-5">
              Tak hanya menjadi destinasi wisata alam, Curug Jenggala juga
              menawarkan berbagai kegiatan menarik seperti trekking dan hiking.
              Pengunjung dapat mengeksplorasi area sekitar, menikmati
              pemandangan alam yang menakjubkan, dan mengambil foto-foto yang
              memukau.
            </p>
            <p class="w-full mb-5">
              Jadi, jika Anda mencari pengalaman alam yang tak terlupakan,
              jangan lewatkan kesempatan untuk mengunjungi Curug Jenggala.
              Temukan keindahan alam yang memukau dan rasakan kedamaian yang
              disuguhkan oleh air terjun ini.
            </p>
            <h3 class="mb-10 text-[#014539] text-2xl font-bold">
              Galeri Jenggala
            </h3>

            <div class=" mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery1}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery2}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery3}
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery4}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery5}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery6}
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery7}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery8}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery9}
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery10}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery9}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src={gallery10}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <h3 class="mb-10 text-[#014539] text-2xl font-bold">
              Jam Operasional dan Harga Tiket
            </h3>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-white uppercase bg-[#439A97]">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Hari
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Jam
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Harga Tiket
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:border-gray-700 text-[#014539]">
                    <th
                      scope="row"
                      class="px-4 py-4 font-medium whitespace-nowrap"
                    >
                      Setiap Hari
                    </th>
                    <td class="px-4 py-4">08.00 - 16.00</td>
                    <td class="px-4 py-4">Rp 10.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
