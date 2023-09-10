import React, { useEffect } from "react";
import imgauth from "../../assets/loginregist.svg";
import Footer from "../../components/footer";
import Navbars from "../../components/Navigasi/navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/auth/login`,
          values
        );
        localStorage.setItem("token", response?.data?.data?.token);
        localStorage.setItem("username", response?.data?.data?.fullName);
        localStorage.setItem("id", response?.data?.data?._id);
        localStorage.setItem("role", response?.data?.data?.role);
        navigate("/home");
      } catch (error) {
        if (error.response) {
          if (error.response.data.message) {
            setFieldError("password", error.response.data.message);
          } else {
            setFieldError(
              "password",
              "Terjadi kesalahan saat mengirim permintaan."
            );
          }
        } else {
          setFieldError("password", "Tidak dapat terhubung ke server.");
        }
      }
    },
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);
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
                  htmlFor="email"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
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
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={`bg-[#DFEBEB] ${
                    formik.errors.email && "border-red-500"
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
                <a href="/register">Register</a>
              </span>
            </h6>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
