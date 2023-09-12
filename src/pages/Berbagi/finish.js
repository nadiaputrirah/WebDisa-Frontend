import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import success from "../../assets/imgSuccess.svg";

export default function FinishUpload() {
  return (
    <div>
      <Navbars />
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-26">
        <div class="w-full mb-8 lg:mb-16 text-center">
          <img src={success} alt="" class="mx-auto h-98" />
          <h2 class="mb-4 text-4xl font-bold text-[#014539] ">
            Proses upload wisata Anda telah selesai
          </h2>
          <p class="mb-6 text-[#439A97] text-lg lg:w-1/2 mx-auto">
            Untuk informasi lebih lanjut silakan cek secara berkala dengan
            mengklik tombol di bawah.
          </p>
          <a
          href="/wisataUser"
            type="submit"
            class="inline-flex px-5 py-2.5 text-sm font-medium text-center text-white bg-[#439A97] rounded-lg"
          >
            Wisata Saya
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
