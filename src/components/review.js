import React, { useEffect, useState } from "react";
import user from "../assets/user.svg";
import axios from "axios";

export default function Review() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API}/ulasan?limit=3`
    );
    setData(result.data.data.docs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="w-full mb-8 lg:mb-16 text-center">
            <h2 class="mb-4 text-2xl font-medium text-[#439A97] ">Ulasan</h2>
            <h2 class="mb-28 text-[#014539] text-4xl font-bold mx-auto lg:w-1/2">
              Menemukan pandangan pribadi dari pengguna lain
            </h2>
          </div>
          <div class="w-full mt-28 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {data?.map((val) => {
              return (
                <div class="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
                  <img class="rounded-t-lg mb-8" src={user} alt="" />
                  <a href="/">
                    <h5 class="mb-2 text-2xl font-semibold text-[#439A97]">
                      {val?.user?.fullName}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                    {val?.review}
                  </p>
                  <div className="flex items-center mb-6">
                    <svg
                      class="w-[25px] h-[25px] text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 21"
                    >
                      <g
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                      </g>
                    </svg>
                    <span class="mb-6 ml-2 pt-6 font-normal text-gray-500">
                      {val?.destinasi?.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
