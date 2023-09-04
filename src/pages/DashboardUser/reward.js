import React from "react";
import Sidebar from "../../components/DashboardUser/sidebar";

export default function Reward() {
  return (
    <div>
      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4">
          <div class="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6">
            <div class="w-full space-y-10 md:gap-12 md:space-y-0">
              <h2 class="mb-4 text-3xl mt-10 font-bold text-[#014539]">
                Reward
              </h2>
              <p class=" text-[#014539] font-normal">
                Nikmati hadiah eksklusif setelah mengunjungi web wisata Disa
              </p>
            </div>
          </div>
          <div class="lg:grid-cols-2">
            <div class="relative overflow-x-auto p-4 mb-10 shadow-md sm:rounded-lg">
              <h2 class="mb-4 text-md font-bold text-[#439A97]">Poin Saya</h2>
              <h2 class="mb-4 text-4xl font-bold text-[#014539]">1.000</h2>
            </div>
          </div>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-white uppercase bg-[#439A97]">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Voucher
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Poin
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Kode
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:border-gray-700 text-[#014539]">
                  <th
                    scope="row"
                    class="px-4 py-4 font-medium whitespace-nowrap"
                  >
                    Rp 10.000,00
                  </th>
                  <td class="px-4 py-4">1.000</td>
                  <td class="px-4 py-4">
                    <a
                      href="/"
                      class="font-medium text-[#014539] hover:underline"
                    >
                      Claim
                    </a>
                  </td>
                  <td class="px-4 py-4">54362</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
