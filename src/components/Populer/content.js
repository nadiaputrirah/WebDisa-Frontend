import React from "react";
import imgpopuler from "../../assets/imgpopuler.png";
import merdada from "../../assets/merdada.png";
import guaMaria from "../../assets/guaMaria.png";

export default function ContentPopuler() {
  return (
    <div class="w-full mb-20 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
      <div class="max-w-sm mx-auto p-8 bg-white border border-white-200 rounded-lg shadow">
        <a href="/">
          <img class="rounded-t-lg" src={imgpopuler} alt="" />
        </a>
        <div class="p-5">
          <h4 class="mb-4 text-3xl font-bold tracking-tight text-[#014539]">
            Curug Jenggala
          </h4>
          <div className="flex items-center mb-6">
            <svg
              class="w-[25px] h-[25px] text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 21"
            >
              <g
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
              </g>
            </svg>
            <span class="mb-6 ml-2 pt-6 font-normal text-gray-500">
              Baturaden, Banyumas, Jawa tengah
            </span>
          </div>
          <a
            href="/DetailWisata"
            className="w-full inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Lihat Detail
          </a>
        </div>
      </div>

      <div class="max-w-sm mx-auto p-8 bg-white border border-white-200 rounded-lg shadow">
        <a href="/">
          <img class="rounded-t-lg" src={merdada} alt="" />
        </a>
        <div class="p-5">
          <h4 class="mb-4 text-3xl font-bold tracking-tight text-[#014539]">
            Telaga Merdada
          </h4>
          <div className="flex items-center mb-6">
            <svg
              class="w-[25px] h-[25px] text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 21"
            >
              <g
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
              </g>
            </svg>
            <span class="mb-8 ml-2 pt-6 font-normal text-gray-500">
              Batur, Banjarnegara, Jawa Tengah
            </span>
          </div>
          <a
            href="/DetailWisata"
            className="w-full inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Lihat Detail
          </a>
        </div>
      </div>

      <div class="max-w-sm mx-auto p-8 bg-white border border-white-200 rounded-lg shadow">
        <a href="/">
          <img class="rounded-t-lg" src={guaMaria} alt="" />
        </a>
        <div class="p-5">
          <h4 class="mb-4 text-3xl font-bold tracking-tight text-[#014539]">
            Gua Maria Kaliori
          </h4>
          <div className="flex items-center mb-6">
            <svg
              class="w-[25px] h-[25px] text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 21"
            >
              <g
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
              </g>
            </svg>
            <span class="mb-6 ml-2 pt-6 font-normal text-gray-500">
              kaliori, Banyuman, Jawa Tengah
            </span>
          </div>
          <a
            href="/DetailWisata"
            className="w-full inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
          >
            Lihat Detail
          </a>
        </div>
      </div>
    </div>
  );
}
