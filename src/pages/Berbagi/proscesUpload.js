import React from "react";
import Navbars from "../../components/Navigasi/navbar";
import Footer from "../../components/footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import iconUp from "../../assets/iconUpload.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProcessUpload() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      address: "",
      description: "",
      image_url: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      code: Yup.string().required(),
      address: Yup.string().required(),
      description: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        await axios.post(
          `${process.env.REACT_APP_API}/destinasi`,
          { ...values, userUpload: localStorage.getItem("id") },
          {
            headers: {
              Authorization: localStorage.getItem("token"),
              "Content-Type": "multipart/form-data",
            },
          }
        );
        await axios.post(`${process.env.REACT_APP_API}/reward`, {
          userUpload: localStorage.getItem("id"),
          point: 500,
          // code: generateRandomString(Math.floor(Math.random() * 10) + 1),
          voucer: 10000,
        });
        navigate("/finishUpload");
      } catch (error) {
        if (error.response) {
          if (error.response.data.message) {
            setFieldError("code", error.response.data.message);
          } else {
            setFieldError(
              "code",
              "Terjadi kesalahan saat mengirim permintaan."
            );
          }
        } else {
          setFieldError("code", "Tidak dapat terhubung ke server.");
        }
      }
    },
  });
  return (
    <div>
      <Navbars />

      <div>
        <section class="bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 lg:mt-32">
            <div class="w-full mb-8 lg:mb-16 text-center">
              <h2 class="mb-4 text-2xl font-medium text-[#439A97] ">
                Berbagi Destinasi
              </h2>
              <h2 class="mb-28 text-[#014539] text-4xl font-bold mx-auto">
                Daftarkan pariwisata yang belum ada
              </h2>
            </div>

            <div class="flex items-center justify-center w-full mb-10">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center h-96 w-full border-2 border-dashed rounded-lg cursor-pointer bg-[#DFEBEB]"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src={iconUp} alt="" className="mr-3 img-fluid" />
                  <p class="mb-2 text-[#014539] text-2xl font-bold">
                    {formik.values.image_url
                      ? formik.values.image_url?.name
                      : "Upload Foto"}
                  </p>
                  {/* <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p> */}
                </div>
                <input
                  id="dropzone-file"
                  onChange={(e) => {
                    formik.setFieldValue("image_url", e.currentTarget.files[0]);
                  }}
                  type="file"
                  class="hidden"
                />
              </label>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div class="mb-6">
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Nama Wisata
                </label>
                <input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className={`bg-[#DFEBEB] ${
                    formik.errors.name && "border-red-500"
                  } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                  // required
                />
                {formik.errors.name && formik.touched.name && (
                  <small className="text-red-500">{formik.errors.name}</small>
                )}
              </div>
              <div class="mb-6">
                <label
                  htmlFor="name"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Code
                </label>
                <input
                  id="code"
                  name="code"
                  value={formik.values.code}
                  onChange={formik.handleChange}
                  className={`bg-[#DFEBEB] ${
                    formik.errors.code && "border-red-500"
                  } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                  // required
                />
                {formik.errors.code && formik.touched.code && (
                  <small className="text-red-500">{formik.errors.code}</small>
                )}
              </div>
              <div class="mb-6">
                <label
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Alamat
                </label>
                <input
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  className={`bg-[#DFEBEB] ${
                    formik.errors.address && "border-red-500"
                  } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                  // required
                />
                {formik.errors.address && formik.touched.address && (
                  <small className="text-red-500">
                    {formik.errors.address}
                  </small>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Deskripsi
                </label>
                <textarea
                  type="description"
                  id="description"
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  className={`bg-[#DFEBEB] ${
                    formik.errors.description && "border-red-500"
                  } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                  // required
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white w-6/12 bg-[#439A97] hover:bg-[#014539] font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center mb-10"
                >
                  Daftar Wisata
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
