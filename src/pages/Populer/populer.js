import React from "react";
import Navbar from "../../components/Navigasi/navbarScrolled";
import Footer from "../../components/footer";
import ContentPopuler from "../../components/Populer/content";
import BannerDestinasi from "../../components/Populer/bannerDestinasi";

export default function Populers() {
  return (
    <div>
      <Navbar />
      <BannerDestinasi />
      <section class="bg-white mt-36">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="w-full mb-8 lg:mb-16 space-y-10 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            <h2 class="mb-10 text-4xl font-bold text-[#014539] text-left">
              Populer Destinasi
            </h2>
            <h2 class="mb-20 text-[#014539] text-2xl font-normal text-right">
              Temukan tujuan yang menakjubkan di situs web pariwisata kami yang
              memberdayakan, menginspirasi perjalanan Anda yang tak terlupakan.
            </h2>
          </div>
          <ContentPopuler />
          <ContentPopuler />
          <ContentPopuler />
          <ContentPopuler />
        </div>
      </section>
      <Footer />
    </div>
  );
}
