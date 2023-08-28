import React from "react";
import banner from "../../assets/bannerinfo.png";

export default function BannerInfo() {
  return (
    <div>
      <section
        className="jumbotron-wave bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Dieng Culture Festival
          </h1>
          <p className="mb-15 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Festival budaya dengan konsep sinergi antara unsur budaya
            masyarakat, potensi wisata alam yang dimiliki Dieng
          </p>
        </div>
      </section>
    </div>
  );
}
