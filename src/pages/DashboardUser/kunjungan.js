import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../components/DashboardUser/sidebar";
import axios from "axios";
import DataTable from "../DashboardAdmin/DataTable";

export default function KunjunganWisata() {
  const [data, setData] = useState();

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API}/history?id=${localStorage.getItem("id")}`
    );
    setData(result.data.data.docs);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Nama Wisata",
        accessor: (row) => {
          return <>{row?.destinasi?.name}</>;
        },
      },
      {
        Header: "Lokasi",
        accessor: (row) => {
          return <>{row?.destinasi?.address}</>;
        },
      },
      {
        Header: "Tanggal",
        accessor: (row) => {
          const date = new Date(row?.createdAt);
          const tanggalTerformat = date.toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return <>{tanggalTerformat}</>;
        },
      },
    ],
    []
  );
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4">
          <div class="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6">
            <div class="w-full space-y-10 md:gap-12 md:space-y-0">
              <h2 class="mb-4 text-3xl mt-10 font-bold text-[#014539]">
                Riwayat Kunjungan
              </h2>
              <p class=" text-[#014539] font-normal">
                Melihat kembali perjalanan wisata Anda menjadi mudah dengan
                fitur Riwayat Kunjungan kami.
              </p>
            </div>
          </div>
          <DataTable data={data || []} columns={columns} />
        </div>
      </div>
    </div>
  );
}
