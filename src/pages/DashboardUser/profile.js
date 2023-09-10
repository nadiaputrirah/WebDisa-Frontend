import React from "react";
import Sidebar from "../../components/DashboardUser/sidebar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ProfileUser() {
  const [data, setData] = useState();

  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API}/user/${localStorage.getItem("id")}`
    );
    setData(result.data.data);
  };

  const formik = useFormik({
    initialValues: {
      email: data?.email || "",
      fullName: data?.fullName || "",
      phone: data?.phone || "",
      password: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required(),
      password: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
    }),
    onSubmit: async (val) => {
      await axios.put(
        `${process.env.REACT_APP_API}/user/${localStorage.getItem("id")}`,
        val
      );
      window.location.reload();
    },
  });
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
                Profile
              </h2>
              <p class=" text-[#014539] font-normal">
                Perkenalkan diri Anda kepada komunitas kami dengan fitur Profil
              </p>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-6">
              <label
                htmlFor="name"
                class="block mb-2 text-sm font-medium text-[#014539]"
              >
                Nama
              </label>
              <input
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                className={`bg-[#DFEBEB] ${
                  formik.errors.fullName && "border-red-500"
                } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                // required
              />
              {formik.errors.fullName && (
                <small className="text-red-500">{formik.errors.fullName}</small>
              )}
            </div>
            <div class="mb-6">
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-[#014539]"
              >
                Alamat email
              </label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={`bg-[#DFEBEB] ${
                  formik.errors.email && "border-red-500"
                } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                // required
              />
              {formik.errors.email && (
                <small className="text-red-500">{formik.errors.email}</small>
              )}
            </div>
            <div class="mb-6">
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-medium text-[#014539]"
              >
                No. Handphone
              </label>
              <input
                type="number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={`bg-[#DFEBEB] ${
                  formik.errors.phone && "border-red-500"
                } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                // required
              />
              {formik.errors.phone && (
                <small className="text-red-500">{formik.errors.phone}</small>
              )}
            </div>
            <div class="mb-6">
              <label
                htmlFor="password"
                class="block mb-2 text-sm font-medium text-[#014539]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className={`bg-[#DFEBEB] ${
                  formik.errors.password && "border-red-500"
                } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                // required
              />
              {formik.errors.password && (
                <small className="text-red-500">{formik.errors.password}</small>
              )}
            </div>
            <button
              type="submit"
              class="text-white bg-[#439A97] hover:bg-[#014539] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
