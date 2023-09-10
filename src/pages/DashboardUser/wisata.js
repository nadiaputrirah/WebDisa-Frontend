import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../components/DashboardUser/sidebar";
import DataTable from "../DashboardAdmin/DataTable";
import axios from "axios";

export default function WisataUser() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API}/destinasi?id=${localStorage.getItem("id")}`
    );
    setData(result.data.data);
  };
  const columns = useMemo(
    () => [
      {
        Header: "Nama Wisata",
        accessor: "name",
      },
      {
        Header: "Alamat",
        accessor: "address",
      },
      {
        Header: "Deskripsi",
        accessor: "description",
      },
      {
        Header: "Photo",
        accessor: (row) => {
          console.log({ row });
          return (
            <img
              class="rounded-t-lg"
              src={`${process.env.REACT_APP_IMAGE_URL}/${row?.image_url}`}
              height={"50px"}
              width={"50px"}
              alt=""
            />
          );
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
                Wisata Saya
              </h2>
              <p class=" text-[#014539] font-normal">
                Melihat kembali wisata yang pernah Anda upload
              </p>
            </div>
          </div>
          <DataTable data={data?.docs || []} columns={columns} />
        </div>
      </div>
    </div>
  );
}
