import React, { useState } from "react";

import logo from "../../assets/logodisa.svg";
import { useNavigate } from "react-router-dom";

export default function Navbars() {
  const name = localStorage?.getItem("username");
  const [popper, setPopper] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  let link =
    localStorage.getItem("role") == "admin" ? "/admin" : "/profileUser";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    window.location.reload();
  };
  return (
    <div>
      {/* navbar */}
      <nav class="fixed w-full z-20 top-0 left-0 bg-[#439A97]">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img src={logo} class="h-15 mr-3" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-white-400 dark:hover:bg-white-700 dark:focus:ring-white-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setShow(!show)}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              // aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-[#439A97]">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-white-700 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/info"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-white-700 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Informasi
                </a>
              </li>
              <li>
                <a
                  href="/populer"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-white-700 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Destinasi
                </a>
              </li>
              <li>
                <a
                  href="/berbagi"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-white-700 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Berbagi
                </a>
              </li>
              <li>
                <a
                  href="/scan"
                  class="block py-2 pl-3 pr-4 rounded hover:bg-white-700 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Scan QR
                </a>
              </li>
              {name ? (
                <li className="relative " onClick={() => setPopper(!popper)}>
                  <span
                    // href="#berbagi"
                    className="cursor-pointer block py-2 pl-3 pr-4 rounded hover:bg-white-700 md:hover:bg-transparent md:border-0 md:hover:text-white-700 md:p-0 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {name && `Hai ${name}`}
                  </span>
                  <div
                    className={`${
                      popper ? "inline-block" : "hidden"
                    } absolute z-10  transition-all  w-64 text-sm text-gray-500  duration-300 bg-white border border-gray-200 rounded-lg shadow-sm  `}
                  >
                    <div
                      className="cursor-pointer  px-3 py-2"
                      onClick={() => navigate(link)}
                    >
                      Dashboard
                    </div>
                    <div
                      className="cursor-pointer px-3 py-2"
                      onClick={handleLogout}
                    >
                      <span>Logout</span>
                    </div>
                  </div>
                </li>
              ) : (
                <li>
                  {/* <redirect to="/" replace={true} /> */}
                  <a
                    href="/login"
                    class="text-[#439A97] bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                  >
                    Mulai
                  </a>
                </li>
              )}
            </ul>
          </div>
          {/* <div className="bg-[#439A97]  w-screen">jancoo</div> */}
        </div>
      </nav>
      {show && (
        <div
          className={`md:hidden fixed z-10 mt-16  transition-all   text-sm text-gray-500  duration-300 bg-white border border-gray-200 w-full shadow-sm  `}
          style={{
            marginTop: "68px",
            backgroundColor: "#439A97",
            color: "white",
          }}
        >
          <div
            className="cursor-pointer px-3 text-center  "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            onClick={() => navigate("/home")}
          >
            Beranda
          </div>
          <div
            className="cursor-pointer px-3  text-center  "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            onClick={() => navigate("/info")}
          >
            Informasi
          </div>
          <div
            className="cursor-pointer px-3  text-center  "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            onClick={() => navigate("/populer")}
          >
            Destinasi
          </div>
          <div
            className="cursor-pointer px-3  text-center  "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            onClick={() => navigate("/berbagi")}
          >
            Berbagi
          </div>
          <div
            className="cursor-pointer px-3  text-center  "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            onClick={() => navigate("/scan")}
          >
            Scan Qr
          </div>
          <div
            className="cursor-pointer px-3  text-center "
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
            onClick={handleLogout}
          >
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  );
}
