import React, { useState } from "react";
import Banner from "../../components/banner";
import Features from "../../components/features";
import Scan from "../../components/scan";
import Informasi from "../../components/Information/informasi";
import Berbagi from "../../components/berbagi";
import Populer from "../../components/Populer/populer";
import Review from "../../components/review";
import Footer from "../../components/footer";
import Navbar from "../../components/Navigasi/navbarScrolled";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar />
      <Banner setSearch={setSearch} />
      <Features />
      <Scan />
      <Informasi />
      <Berbagi />
      <Populer search={search} />
      <Review />
      <Footer />
    </div>
  );
}
