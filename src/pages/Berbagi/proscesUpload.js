import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import iconUp from "../../assets/iconUpload.svg";

export default function ProcessUpload() {
  return (
    <div>
      <Navbars />

      <div>
        <section class="bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:mt-32">
            <div class="w-full mb-8 lg:mb-16 text-center">
              <h2 class="mb-4 text-2xl font-medium text-[#439A97] ">
                Berbagi Destinasi
              </h2>
              <h2 class="mb-28 text-[#014539] text-4xl font-bold mx-auto">
                Daftarkan pariwisata yang belum ada
              </h2>
            </div>

            <div class="flex items-center justify-center w-full mb-10">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center h-96 w-full border-2 border-dashed rounded-lg cursor-pointer bg-[#DFEBEB]"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src={iconUp} alt="" className="mr-3 img-fluid" />
                  <p class="mb-2 text-[#014539] text-2xl font-bold">
                    Upload Foto
                  </p>
                  {/* <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p> */}
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            <form>
              <div class="mb-6">
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Nama Destinasi
                </label>
                <input
                  type="email"
                  id="email"
                  class="bg-[#DFEBEB] border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400"
                  placeholder=""
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  htmlFor="password"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Lokasi
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-[#DFEBEB] border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400"
                  required
                />
              </div>
              <div class="w-full mb-4 rounded-lg">
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Deskripsi
                </label>
                <div class="px-4 py-2 bg-[#DFEBEB] rounded-2xl ">
                  {/* <label for="editor" class="sr-only">
                  Publish post
                </label> */}
                  <textarea
                    id="editor"
                    rows="8"
                    class="block w-full px-0 text-sm text-gray-800 bg-[#DFEBEB]"
                    placeholder=""
                    required
                  ></textarea>
                </div>
              </div>
              <div class="w-full mt-8 lg:mt-10 mb-32 text-center">
                <a
                  href="/finishUpload"
                  className="mx-auto inline-flex text-center justify-center px-10 py-4 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
                >
                  Upload Wisata
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
