import React from "react";
import ContentPopuler from "./content";

export default function Populer() {
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
        <ContentPopuler />
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
