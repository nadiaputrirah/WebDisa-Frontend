import React from "react";
import imgscan from "../assets/scanqr.svg";
import imgindikator from "../assets/indikator.png";
import imgreward from "../assets/reward.png";

export default function Scan() {
  return (
    <div>
      <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h3 className="mb-6 text-3xl font-medium text-[#439A97]">
              Scan QR
            </h3>
            <h2 className="mb-10 text-4xl font-bold text-[#014539]">
              Memindai kode QR untuk akses cepat ke informasi
            </h2>
            <div className="media mb-10 flex items-center">
              <img src={imgindikator} alt="" className="mr-3 img-fluid" />
              <div className="media-body ml-6">
                <h4 className="mb-3 text-2xl font-medium text-[#439A97]">
                  Indikator Kepadatan Pariwisata
                </h4>
                <p className="mb-3 text-xl font-medium text-gray-500">
                  Kemampuan pengguna untuk melihat tingkat kepadatan pengunjung
                </p>
              </div>
            </div>
            <div className="media mb-10 flex items-center">
              <img src={imgreward} alt="" className="mr-3 img-fluid" />
              <div className="media-body ml-6">
                <h4 className="mb-3 text-2xl font-medium text-[#439A97]">
                  Dapatkan Hadiah
                </h4>
                <p className="mb-3 text-xl font-medium text-gray-500">
                  Dapatkan hadiah dengan melakukan scan QR setiap petak lokasi
                  pariwisata
                </p>
              </div>
            </div>
          </div>

          <img src={imgscan} class="w-full items-center mb-4" alt="Info Logo" />
        </div>
      </section>
    </div>
  );
}
