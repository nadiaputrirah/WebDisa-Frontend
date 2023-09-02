import React from "react";
import bannerdestinasi from "../../assets/bannerDestinasi.png";

export default function BannerDestinasi() {
  return (
    <div>
      <section
        className="jumbotron-wave bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply"
        style={{ backgroundImage: `url(${bannerdestinasi})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Pariwisata Curug Jenggala
          </h1>
          <p className="mb-15 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Jelajahi keajaiban alam yang memukau dengan menikmati keindahan
            Curug Jenggala
          </p>
        </div>
      </section>
    </div>
  );
}
