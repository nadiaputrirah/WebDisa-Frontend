import React from "react";
import imgauth from "../../assets/loginregist.svg";
import Footer from "../../components/footer";
import Navbars from "../../components/Navigasi/navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required(),
      password: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
    }),
    onSubmit: async (val) => {
      await axios.post(`${process.env.REACT_APP_API}/auth/register`, val);
      navigate("/login");
    },
  });
  console.log(formik.errors);
  return (
    <div>
      <Navbars />

      <section className="bg-white mt-36">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img src={imgauth} class="w-full items-center mb-4" alt="Info Logo" />
          <div className="mt-4 md:mt-0 mx-auto">
            <h2 className="mb-10 text-4xl font-bold text-[#014539]">
              Nikmati Petualangan Wisata Pelosok
            </h2>
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
                  <small className="text-red-500">
                    {formik.errors.fullName}
                  </small>
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
                  <small className="text-red-500">
                    {formik.errors.password}
                  </small>
                )}
              </div>
              <button
                type="submit"
                class="text-white bg-[#439A97] hover:bg-[#014539] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10"
              >
                Submit
              </button>
            </form>
            <h6 className="w-full text-center mb-10 text-l font-medium text-gray-400">
              Belum punya akun?{" "}
              <span class="text-[#014539]">
                <a href="/">Login</a>
              </span>
            </h6>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
