import React from "react";
import Navigasi from "../../components/navigasi";
import Footer from "../../components/footer";
import BannerInfo from "../../components/Information/banner";

import imgInfoDetail from "../../assets/detailinfo.png";
import InfoDetail from "../../assets/detaintwo.png";

export default function DetailInfo() {
  return (
    <div>
      <Navigasi />
      <BannerInfo />
      <section class="bg-white mt-36">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="w-full mb-6 lg:mb-10 space-y-10 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            <h2 class="mb-6 text-4xl font-bold text-[#014539] text-left">
              25-27 Agustus 2023
            </h2>
            <h2 class="mb-6 text-[#014539] text-2xl font-normal text-right">
              Kompleks Candi Arjuna, Kabupaten Banjarnegara
            </h2>
            <div></div>
          </div>
          <p class="mb-6 text-[#014539] text-lg">
            Apakah Anda pernah mengunjungi Dieng Culture Festival sebelumnya?
            Jika belum, ada kesempatan yang besar bagi Anda untuk mengunjungi
            acara ini pada tahun 2022. Dieng Culture Festival 2022 akan diadakan
            pada tanggal 26 Agustus 2022 hingga 28 Agustus 2022 di kabupaten
            Banjarnegara, Jawa Tengah.
          </p>
          <p class="mb-6 text-[#014539] text-lg">
            Namun, apa sebenarnya Dieng Culture Festival itu? Mengapa acara ini
            begitu terkenal dan menarik minat banyak orang setiap tahunnya?
          </p>
          <p class="mb-6 text-[#014539] text-lg">
            Dalam artikel singkat ini, kami akan mengajak Anda yang belum
            familiar dengan Dieng Culture Festival atau DCF untuk memahaminya
            secara lebih mendalam. Kami akan menjelaskan apa itu DCF, keunikan
            dan daya tarik yang ada di dalamnya, serta beberapa informasi
            penting yang sebaiknya Anda ketahui sebelum mengunjungi acara
            tersebut.
          </p>
          <h3 class="mb-10 text-[#014539] text-2xl font-bold">
            Apa Itu Dieng Culture Festival?
          </h3>
          <img src={imgInfoDetail} alt="" class="w-full mb-10" />
          <p class="mb-6 text-[#014539] text-lg">
            Dieng Culture Festival merupakan sebuah festival budaya yang
            menggabungkan harmonisasi unsur-unsur budaya masyarakat, potensi
            wisata alam yang ada di Dieng, serta pemberdayaan masyarakat lokal
            untuk memanfaatkan potensi yang ada.
          </p>
          <p class="mb-6 text-[#014539] text-lg">
            Inisiatif pertama kali dilakukan oleh Kelompok Sadar Wisata Dieng
            Pandawa, yang pertama kali mengadakan acara ini pada tahun 2010
            bekerja sama dengan Equator Sinergi Indonesia dan Dieng Ecotourism.
            Pada awalnya, festival ini dikenal dengan nama Pekan Budaya Dieng,
            namun pada tahun ketiga penyelenggaraannya, panitia dan masyarakat
            memutuskan untuk mengganti namanya menjadi Dieng Culture Festival
            seperti yang kita kenal sekarang.
          </p>
          <p class="mb-10 text-[#014539] text-lg">
            Tujuan acara ini tidak hanya untuk memperkenalkan budaya dan
            keindahan alam Dieng kepada para wisatawan yang hadir, tetapi juga
            untuk meningkatkan pemahaman masyarakat akan pentingnya pariwisata
            dalam kehidupan secara umum, termasuk manfaatnya dari segi
            pariwisata.
          </p>
          <h3 class="mb-10 text-[#014539] text-2xl font-bold">
            Keunikan Dieng Culture Festival
          </h3>
          <img src={InfoDetail} alt="" class="w-full mb-10" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
