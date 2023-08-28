import React from "react";
import imgauth from "../../assets/loginregist.svg";
import Footer from "../../components/footer";
import Navbars from "../../components/Navigasi/navbar";

export default function Login() {
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
            <form>
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
                  class="bg-[#DFEBEB] border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400"
                  placeholder=""
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  htmlFor="password"
                  class="block mb-2 text-sm font-medium text-[#014539]"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-[#DFEBEB] border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400"
                  required
                />
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
                <a href="/">Register</a>
              </span>
            </h6>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
