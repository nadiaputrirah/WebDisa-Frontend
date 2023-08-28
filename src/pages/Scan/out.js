import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import imgVisit from "../../assets/visit.svg";

export default function OutVisit() {
  return (
    <div>
      <Navbars />
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-32">
        <div class="w-full mb-8 lg:mb-16 text-center">
          <h2 class="mb-6 text-[#014539] text-4xl font-bold mx-auto">
            Anda Telah Keluar dari Curug Jenggala!
          </h2>
          <p class="mb-6 text-[#439A97] text-lg lg:w-1/2 mx-auto">
            Terimakasih telah menyelesaikan perjalanan wisata Anda! jangan lupa
            untuk datang lagi di waktu lain untuk menjelajahi tempat-tempat baru
            yang menarik!
          </p>
          <img src={imgVisit} alt="" class="mx-auto w-96 h-96" />
        </div>

        <div class="w-full mb-8 lg:mb-16 text-center">
          <h2 class="mb-4 text-4xl font-bold text-[#014539] ">
            Ceritakan Pengalaman Anda
          </h2>
          <p class="mb-6 text-[#439A97] text-lg lg:w-1/4 mx-auto">
            Memberikan pandangan pribadi agar dilihat pengguna lain
          </p>

          <form>
            <div class="w-full mb-4 rounded-lg">
              <div class="px-4 py-2 bg-[#CDECEB] rounded-3xl ">
                {/* <label for="editor" class="sr-only">
                  Publish post
                </label> */}
                <textarea
                  id="editor"
                  rows="8"
                  class="block w-full px-0 text-sm text-gray-800 bg-[#CDECEB]"
                  placeholder=""
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex px-5 py-2.5 text-sm font-medium text-center text-white bg-[#439A97] rounded-lg"
            >
              Kirim Ulasan
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
