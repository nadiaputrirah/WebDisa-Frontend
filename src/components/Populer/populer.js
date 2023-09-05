import React, { useEffect, useState } from "react";
import ContentPopuler from "./content";
import axios from "axios";
import imgpopuler from "../../assets/imgpopuler.png";

export default function Populer() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const cuy = await axios.get(`${process.env.REACT_APP_API}/destinasi`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    setData(cuy.data.data.docs);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log({ data });
  return (
    <section class="bg-[#439A97] mb-20">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="w-full mb-8 lg:mb-16 space-y-10 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
          <h2 class="mb-20 text-white text-4xl font-bold text-left">
            Populer Destinasi
          </h2>
          <h2 class="mb-10 text-xl font-normal text-white text-right">
            Temukan tujuan yang menakjubkan di situs web pariwisata kami yang
            memberdayakan, menginspirasi perjalanan Anda yang tak terlupakan.
          </h2>
        </div>
        {/* <ContentPopuler /> */}
        <div class="w-full mb-20 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {data?.map((val) => {
            return (
              <div class="max-w-sm mx-auto p-8 bg-white border border-white-200 rounded-lg shadow">
                <a href="/">
                  <img class="rounded-t-lg" src={imgpopuler} alt="" />
                </a>
                <div class="p-5">
                  <h4 class="mb-6 text-3xl font-bold tracking-tight text-[#014539]">
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
                      Baturaden, Purwokerto, Indonesia
                    </span>
                  </div>
                  <a
                    href={`/populer/${val.code}`}
                    className="w-full inline-flex justify-center px-4 py-2 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div class="w-full lg:mb-4 text-center">
          <a
            href="/"
            class=" text-xl text-white text-center hover:text-[#2b928e]"
          >
            Lihat Detail
          </a>
        </div>
      </div>
    </section>
  );
}
