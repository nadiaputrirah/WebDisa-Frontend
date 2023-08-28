import React from "react";
import bannerhome from "../assets/banners.png";

export default function Banner() {
  return (
    <div>
      <section
        className="jumbotron-wave bg-center bg-no-repeat bg-cover bg-gray-400 bg-blend-multiply"
        style={{ backgroundImage: `url(${bannerhome})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Selamat Datang di Pariwisata Kami
          </h1>
          <p className="mb-15 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Jelajahi keajaiban destinasi menakjubkan kami dan mulailah
            perjalanan penemuan dan petualangan yang belum pernah ada sebelumnya
          </p>
          <div className="flex space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-8">
            <form className="w-full sm:w-1/2 md:w-1/3 lg:w-1/8 xl:w-1/8">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-[#439A97] sr-only light:text-[#439A97]"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-white-300 rounded-2xl bg-white-50 focus:ring-white-500 light:bg-white-700 light:border-white-600 dark:placeholder-white-400 light:text-white light:focus:ring-white-500 light:focus:border-white-500"
                  placeholder="Cari Destinasi"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
