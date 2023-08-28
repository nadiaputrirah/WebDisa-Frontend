import React from "react";
import Footer from "../../components/footer";
import ContentInfo from "../../components/Information/content";
import Banner from "../../components/banner";
import Navbar from "../../components/Navigasi/navbarScrolled";

export default function Info() {
  return (
    <div>
      <Navbar />
      <Banner />
      <section class="bg-white mt-36">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="w-full mb-8 lg:mb-16 space-y-10 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
            <h2 class="mb-10 text-4xl font-bold text-[#014539] text-left">
              Informasi Terkini
            </h2>
            <h2 class="mb-20 text-[#014539] text-2xl font-normal text-right">
              Dapatkan event terbaru dari pariwisata jarak jauh dengan mudah
            </h2>
          </div>
          <ContentInfo />
          <ContentInfo />
          <ContentInfo />
          <ContentInfo />
        </div>
      </section>
      <Footer />
    </div>
  );
}
