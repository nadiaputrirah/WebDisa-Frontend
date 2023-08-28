import React from "react";
import ContentInfo from "./content";

export default function Informasi() {
  return (
    <section class="bg-[#439A97]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="w-full mb-8 lg:mb-16 space-y-10 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
          <h2 class="mb-10 text-4xl font-bold text-white text-left">
            Informasi Terkini
          </h2>
          <h2 class="mb-20 text-white text-2xl font-normal text-right">
            Dapatkan event terbaru dari pariwisata jarak jauh dengan mudah
          </h2>
        </div>
        <ContentInfo />
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
