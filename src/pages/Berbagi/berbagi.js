import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";

import Berbagi from "../../components/berbagi";

export default function PageBerbagi() {
  return (
    <div>
      <Navbars />
      <div class="w-full mt-26 lg:mt-32">
        <Berbagi />
      </div>

      <div class="w-full mt-8 lg:mt-10 mb-32 text-center">
        <a
          href="/"
          className="mx-auto inline-flex text-center justify-center px-10 py-4 text-md font-medium text-white bg-[#439A97] hover:bg-[#2b928e] rounded-lg focus:ring-4 focus:outline-none focus:ring-[#2b928e]"
        >
          Daftar Wisata
        </a>
      </div>

      <Footer />
    </div>
  );
}
