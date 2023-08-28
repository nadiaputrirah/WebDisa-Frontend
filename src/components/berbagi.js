import React from "react";
import imgshare from "../assets/sharedestinasi.svg";
import upload from "../assets/upload.png";
import sharelokasi from "../assets/sharelokasi.png";

export default function Berbagi() {
  return (
    <div>
      <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            src={imgshare}
            class="w-full items-center mb-4"
            alt="Info Logo"
          />
          <div className="mt-4 md:mt-0">
            <h3 className="mb-6 text-3xl font-medium text-[#439A97]">
              Berbagi Destinasi
            </h3>
            <h2 className="mb-10 text-4xl font-bold text-[#014539]">
              Daftarkan pariwisata yang belum ada
            </h2>
            <div className="media mb-10 flex items-center">
              <img src={upload} alt="" className="mr-3 img-fluid" />
              <div className="media-body ml-6">
                <h4 className="mb-3 text-2xl font-medium text-[#439A97]">
                  Unggah Destinasi
                </h4>
                <p className="mb-3 text-xl font-medium text-gray-500">
                  Mengunggah gambar dan informasi terkait destinasi
                </p>
              </div>
            </div>
            <div className="media mb-10 flex items-center">
              <img src={sharelokasi} alt="" className="mr-3 img-fluid" />
              <div className="media-body ml-6">
                <h4 className="mb-3 text-2xl font-medium text-[#439A97]">
                  Lokasi Destinasi
                </h4>
                <p className="mb-3 text-xl font-medium text-gray-500">
                  Membagikan lokasi tempat pariwisata yang belum terdaftar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
