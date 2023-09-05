import React from "react";
import Sidebar from "../../components/DashboardAdmin/sidebar";

export default function UlasanUser() {
  return (
    <div>
      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4">
          <div class="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6">
            <div class="w-full space-y-10 md:gap-12 md:space-y-0">
              <h2 class="mb-4 text-3xl mt-10 font-bold text-[#014539]">
                Data Ulasan
              </h2>
              <p class=" text-[#014539] font-normal">
                Kelola seluruh ulasan dari user
              </p>
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-[#439A97]">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ulasan
                  </th>
                  <th scope="col" class="px-6 py-3">
                    lokasi Wisata
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
                    Nita Fitrotul
                  </th>
                  <td class="px-4 py-4">Wahh Bagus</td>
                  <td class="px-4 py-4">Jenggala</td>
                  <td class="px-4 py-4">
                    <a
                      href="/"
                      class="font-medium text-[#014539] hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="/"
                      class="font-medium text-[#014539] hover:underline"
                    >
                      Hapus
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
