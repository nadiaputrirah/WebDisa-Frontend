import React from "react";

import Scan from "../../components/scan";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";
import Scanner from "../../components/scanner";

export default function PageScan() {
  return (
    <div>
      <Navbars />
      <Scan />
      <div class=" w-full mx-auto max-w-screen-xl">
        <Scanner />
      </div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <a
          href="/"
          className="mx-auto w-full inline-flex justify-center px-4 py-4 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
        >
          Scan Sekarang
        </a>
      </div>

      <Footer />
    </div>
  );
}
