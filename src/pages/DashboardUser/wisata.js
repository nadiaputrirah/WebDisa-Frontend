import React from "react";
import Sidebar from "../../components/DashboardUser/sidebar";

export default function Wisata() {
  return (
    <div>
      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4">
          <div class="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6">
            <div class="w-full space-y-10 md:gap-12 md:space-y-0">
              <h2 class="mb-4 text-3xl mt-10 font-bold text-[#014539]">
                Wisata Saya
              </h2>
              <p class=" text-[#014539] font-normal">
                Melihat kembali wisata yanf pernah Anda upload
              </p>
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-[#439A97]">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Nama Wisata
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Lokasi
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Deskripsi
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Gambar
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:border-gray-700 text-[#014539]">
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium whitespace-nowrap"
                  >
                    Curug jenggala
                  </th>
                  <td class="px-4 py-4">
                    Jl. Pangeran Limboro, Dusun III Kalipagu, Ketenger, Kec.
                    Baturaden, Kabupaten Banyumas, Jawa Tengah 53152
                  </td>
                  <td class="px-4 py-4">
                    Curug Jenggala adalah air terjun yang berlokasi di Ketenger,
                    Baturaden, Banyumas. Air terjun ini memiliki ketinggian 30
                    meter dari permukaan tanah. Curug ini mempunyai tiga air
                    terjun yang tingginya sejajar, dengan air terjun yang di
                    tengah memiliki arus yang paling deras.
                  </td>
                  <td class="px-4 py-4">$2999</td>
                  <td class="px-4 py-4">Aktif</td>
                  <td class="px-4 py-4">
                    <a
                      href="/"
                      class="font-medium text-[#014539] hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:border-gray-700 text-[#014539]">
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium whitespace-nowrap"
                  >
                    Curug jenggala
                  </th>
                  <td class="px-4 py-4">
                    Jl. Pangeran Limboro, Dusun III Kalipagu, Ketenger, Kec.
                    Baturaden, Kabupaten Banyumas, Jawa Tengah 53152
                  </td>
                  <td class="px-4 py-4">
                    Curug Jenggala adalah air terjun yang berlokasi di Ketenger,
                    Baturaden, Banyumas. Air terjun ini memiliki ketinggian 30
                    meter dari permukaan tanah. Curug ini mempunyai tiga air
                    terjun yang tingginya sejajar, dengan air terjun yang di
                    tengah memiliki arus yang paling deras.
                  </td>
                  <td class="px-4 py-4">$2999</td>
                  <td class="px-4 py-4">Aktif</td>
                  <td class="px-4 py-4">
                    <a
                      href="/"
                      class="font-medium text-[#014539] hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
