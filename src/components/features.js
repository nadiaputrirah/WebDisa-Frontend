import React from "react";
import imginfo from "../assets/fiturinfo.svg";
import imgilokasi from "../assets/fiturlokasi.svg";
import imgrute from "../assets/fiturrute.svg";

export default function FeatureSection() {
  return (
    <div>
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="w-full mb-8 lg:mb-10 text-center">
            <h2 class="mb-10 text-3xl font-medium text-[#439A97] ">
              Fitur teratas
            </h2>
            <h2 class="mb-20 text-[#014539] text-4xl font-bold mx-auto lg:w-1/2">
              Nikmati petualangan pariwisata terpencil epik ini!
            </h2>
          </div>
          <div class="w-full space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div class="mb-10">
              <div class="flex justify-center items-center mb-8 h-20">
                <img src={imginfo} class=" items-center mb-4" alt="Info Logo" />
              </div>
              <h3 class="mb-2 text-xl text-center font-bold text-[#014539]">
                Dapatkan informasi kawasan wisata
              </h3>
            </div>
            <div class="mb-10">
              <div class="flex justify-center items-center mb-8 h-20">
                <img src={imgilokasi} class="" alt="Info Logo" />
              </div>
              <h3 class="mb-2 text-xl text-center font-bold text-[#014539]">
                Cari lokasi wisata di daerah terpencil
              </h3>
            </div>
            <div class="mb-10">
              <div class="flex justify-center items-center mb-8 h-20">
                <img src={imgrute} class=" items-center mb-4" alt="Rute Logo" />
              </div>
              <h3 class="mb-2 text-xl text-center font-bold text-[#014539] col-span-2">
                Cari lokasi wisata di daerah terpencil
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
