import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../../components/DashboardUser/sidebar";
import axios from "axios";
import DataTable from "../DashboardAdmin/DataTable";

export default function Reward() {
  const [data, setData] = useState();

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API}/reward?id=${localStorage.getItem("id")}`,
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
    setData(result.data.data.docs);
  };
  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");
  }

  const handleDelete = async (row) => {
    await axios.put(
      `${process.env.REACT_APP_API}/reward/${row?._id}`,
      {
        user: row.user._id,
        point: 0,
        voucer: 0,
        code: generateRandomString(Math.floor(Math.random() * 10) + 1),
      },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );
    getData();
  };

  let totalPoint = 0;

  data?.map((val) => (totalPoint += val?.point));

  const columns = useMemo(
    () => [
      {
        Header: "Voucher",
        accessor: (row) => {
          return <>{row?.voucer}</>;
        },
      },
      {
        Header: "Point",
        accessor: (row) => {
          return <>{row?.point}</>;
        },
      },
      {
        Header: "Code",
        accessor: "code",
      },
      {
        Header: "Action",
        accessor: (row) => {
          console.log({ row });
          return (
            <span
              className="text-red-500  hover:underline cursor-pointer"
              onClick={() => handleDelete(row)}
            >
              Claim
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
              <h2 class="mb-4 text-4xl font-bold text-[#014539]">
                {totalPoint}
              </h2>
            </div>
          </div>
          <DataTable data={data || []} columns={columns} />
        </div>
      </div>
    </div>
  );
}
