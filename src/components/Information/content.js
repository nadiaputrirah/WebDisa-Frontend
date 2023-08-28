import React from "react";
import imgfestival from "../../assets/imgfestival.png";

export default function ContentInfo() {
  return (
    <div class="w-full space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mb-20">
      <div class="max-w-sm mx-auto p-8 bg-white border border-white-200 rounded-lg shadow">
        <a href="/">
          <img class="rounded-t-lg" src={imgfestival} alt="" />
        </a>
        <div class="p-5">
          <a href="/">
            <h4 class="mb-6 text-2xl font-bold tracking-tight text-[#014539]">
              DIENG CULTURE FESTIVAL
            </h4>
          </a>
          <h5 class="mb-6 text-xl font-medium text-[#014539]">
            25-27 Agustus 2023
          </h5>
          <p class="mb-6 font-normal text-gray-500">
            Kompleks Candi Arjuna, Kabupaten Banjarnegara
          </p>
          <a
            href="/"
            className="w-full inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Lihat Detail
          </a>
        </div>
      </div>

      <div class="max-w-sm mx-auto p-8 bg-white border border-white-200 rounded-lg shadow ">
        <a href="/">
          <img class="rounded-t-lg" src={imgfestival} alt="" />
        </a>
        <div class="p-5">
          <a href="/">
            <h4 class="mb-6 text-2xl font-bold tracking-tight text-[#014539]">
              FESTIVAL GUNUNG SLAMET
            </h4>
          </a>
          <h5 class="mb-6 text-xl font-medium text-[#014539]">Agustus 2023</h5>
          <p class="mb-6 font-normal text-gray-500 ">
            Desa Wisata Lembah Asri Serang, Kabupaten Purbalingga
          </p>
          <a
            href="/"
            className="w-full inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Lihat Detail
          </a>
        </div>
      </div>

      <div class="max-w-sm mx-auto p-8 bg-white border border-white-200 rounded-lg shadow">
        <a href="/">
          <img class="rounded-t-lg" src={imgfestival} alt="" />
        </a>
        <div class="p-5">
          <h4 class="mb-6 text-2xl font-bold tracking-tight text-[#014539]">
            ACARA FESTIVAL KENTHONGAN
          </h4>
          <h5 class="mb-6 text-xl font-medium text-[#014539]">
            25 Februari 2023
          </h5>
          <p class="mb-6 font-normal text-gray-500">
            Jalan Jenderal Sudirman Purwokerto Kabupaten Banyumas.
          </p>
          <a
            href="/"
            className="w-full inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Lihat Detail
          </a>
        </div>
      </div>
    </div>
  );
}
