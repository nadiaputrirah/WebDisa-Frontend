import React from "react";
import Sidebar from "../../components/DashboardAdmin/sidebar";
import DataTable from "./DataTable";
import { useMemo } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function UlasanUser() {
  const [data, setData] = useState();

  const getData = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API}/ulasan`);
    setData(result.data.data.docs);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API}/ulasan/${id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    getData();
  };

  const columns = useMemo(
    () => [
      {
        Header: "Nama",
        accessor: (row) => {
          return <>{row?.user?.fullName}</>;
        },
      },
      {
        Header: "Destinasi",
        accessor: (row) => {
          return <>{row?.destinasi?.name}</>;
        },
      },
      {
        Header: "Ulasan",
        accessor: "review",
      },
      {
        Header: "Action",
        accessor: (row) => {
          return (
            <span
              className="text-red-500  hover:underline cursor-pointer"
              onClick={() => handleDelete(row?._id)}
            >
              Hapus
            </span>
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
                Data Ulasan
              </h2>
              <p class=" text-[#014539] font-normal">
                Kelola seluruh ulasan dari user
              </p>
            </div>
          </div>
          <DataTable data={data || []} columns={columns} />
        </div>
      </div>
    </div>
  );
}
