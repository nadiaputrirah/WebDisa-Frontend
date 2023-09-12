import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";

import Navbar from "../../components/Navigasi/navbarScrolled";
import indikator from "../../assets/indikatorPadat.png";
import BannerDestinasi from "../../components/Populer/banner";
import Map from "../../assets/maps.png";
import MapComponent from "../../components/Populer/map";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  const [data, setData] = useState();
  const { id } = useParams();

  const getData = async () => {
    const cuy = await axios.get(
      `${process.env.REACT_APP_API}/destinasi/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    setData(cuy.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log({ data });
  return (
    <div>
      <Navbar />
      <BannerDestinasi
        name={data?.name}
        image_url={`${process.env.REACT_APP_IMAGE_URL}/${data?.image_url}`}
      />
      <section class="bg-white mt-32">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-6 text-xl font-medium text-[#439A97]">
              Indikator Kepadatan Pariwisata
            </h2>
            <h2 className="mb-6 text-4xl font-bold text-[#014539]">
              Saat ini {data?.name} sedang <span>Ramai</span>
            </h2>
            <p className="mb-6 text-xl font-medium text-[#439A97]">
              <span>{data?.visitor || 0}</span> orang sedang berkunjung di{" "}
              {data?.name}
            </p>
            <a
              href="/scan"
              className=" inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
            >
              Kunjungi Wisata
            </a>
          </div>

          <img
            src={indikator}
            class="rounded-t-lg"
            alt="Info Logo"
          />
        </div>
      </section>

      <section class="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={Map}
            alt=""
          />
        </div>

          <div className="mt-4 md:mt-0">
            <h2 className="mb-6 text-3xl font-medium text-[#439A97]">
              Lokasi Pariwisata {data?.name}
            </h2>
            <h2 className="mb-6 text-md font-normal text-[#014539]">
              {data?.address}
            </h2>
            <a
              href={`https://www.google.com/maps?q=${data?.geolocation?.[0]},${data?.geolocation?.[1]}`}
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
            <p class="w-full mb-5">{data?.description}</p>

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
