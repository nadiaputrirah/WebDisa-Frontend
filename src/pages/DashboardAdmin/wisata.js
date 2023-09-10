import React from "react";
import Sidebar from "../../components/DashboardAdmin/sidebar";
import DataTable from "./DataTable";
import { useMemo } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Pagination from "./Pagination";

export default function WisataAdmin() {
  const [data, setData] = useState();
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [show, setShow] = useState("");
  const [page, setPage] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      address: "",
      description: "",
      isShow: "",
      image_url: "",
      latitude: 0,
      longitude: 0,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      code: Yup.string().required(),
      address: Yup.string().required(),
      description: Yup.string(),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const payload = {
        ...values,
        geolocation: [values.latitude || 0, values.longitude || 0],
      };
      try {
        show == "create"
          ? await axios.post(
              `${process.env.REACT_APP_API}/destinasi`,
              payload,
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                  "Content-Type": "multipart/form-data",
                },
              }
            )
          : await axios.put(
              `${process.env.REACT_APP_API}/destinasi/${show}`,
              payload,
              {
                headers: {
                  Authorization: localStorage.getItem("token"),
                  "Content-Type": "multipart/form-data",
                },
              }
            );
        await getData();
        props.setOpenModal(undefined);
      } catch (error) {
        if (error.response) {
          if (error.response.data.message) {
            setFieldError("name", error.response.data.message);
          } else {
            setFieldError(
              "name",
              "Terjadi kesalahan saat mengirim permintaan."
            );
          }
        } else {
          setFieldError("name", "Tidak dapat terhubung ke server.");
        }
      }
    },
  });

  const getData = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API}/destinasi`);
    setData(result.data.data);
  };

  const handleDelete = async (row) => {
    await axios.delete(`${process.env.REACT_APP_API}/destinasi/${row}`, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    getData();
  };

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from(
      { length },
      () => characters[Math.floor(Math.random() * characters.length)]
    ).join("");
  }

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
        Header: "Status",
        accessor: (row) => {
          return <>{row.isShow ? "active" : "non active"}</>;
        },
      },
      {
        Header: "Photo",
        accessor: (row) => {
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

      {
        Header: "Action",
        accessor: (row) => {
          return (
            <>
              <span
                className="text-green-500 mr-3 hover:underline cursor-pointer"
                onClick={() => {
                  props.setOpenModal("dismissible");
                  setShow(row?._id);
                  formik.setFieldValue("name", row.name);
                  formik.setFieldValue("address", row.address);
                  formik.setFieldValue("code", row.code);
                  formik.setFieldValue("description", row.description);
                  formik.setFieldValue("isShow", row.isShow);
                  formik.setFieldValue("latitude", row.geolocation?.[0]);
                  formik.setFieldValue("longitude", row.geolocation?.[1]);
                }}
              >
                Edit
              </span>
              <span
                className="text-red-500  hover:underline cursor-pointer"
                onClick={() => handleDelete(row?._id)}
              >
                Hapus
              </span>
            </>
          );
        },
      },
    ],
    []
  );
  console.log({ file: formik.values.image_url });

  useEffect(() => {
    getData();
  }, [page]);
  return (
    <div>
      <Sidebar />

      <div class="p-4 sm:ml-64">
        <div class="p-4">
          <div class="py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6">
            <div class="w-full space-y-10 md:gap-12 md:space-y-0">
              <h2 class="mb-4 text-3xl mt-10 font-bold text-[#014539]">
                Data Wisata
              </h2>
              <p class=" text-[#014539] font-normal">
                Kelola seluruh ulasan dari user
              </p>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <button
              class="text-white bg-[#439A97] hover:bg-[#014539] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10"
              onClick={() => {
                setShow("create");
                props.setOpenModal("dismissible");
              }}
            >
              Create Wisata
            </button>
          </div>
          <Modal
            dismissible
            show={props.openModal === "dismissible"}
            // size={"md"}
            onClose={() => {
              props.setOpenModal(undefined);
              formik.resetForm();
            }}
          >
            <Modal.Header>Form Wisata</Modal.Header>
            <Modal.Body>
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
                <div class="mb-6">
                  <label
                    htmlFor="name"
                    class="block mb-2 text-sm font-medium text-[#014539]"
                  >
                    Longitude
                  </label>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={(e) => {
                      formik.setFieldValue(
                        "image_url",
                        e.currentTarget.files[0]
                      );
                    }}
                    className={`bg-[#DFEBEB] ${"border-red-500"} border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                    // required
                  />
                </div>
                <div class="mb-6">
                  <label
                    htmlFor="name"
                    class="block mb-2 text-sm font-medium text-[#014539]"
                  >
                    Latitude
                  </label>
                  <input
                    id="latitude"
                    name="latitude"
                    type="number"
                    value={formik.values.latitude}
                    onChange={formik.handleChange}
                    className={`bg-[#DFEBEB] ${
                      formik.errors.latitude && "border-red-500"
                    } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                    // required
                  />
                  {formik.errors.latitude && formik.touched.latitude && (
                    <small className="text-red-500">{formik.errors.code}</small>
                  )}
                </div>
                <div class="mb-6">
                  <label
                    htmlFor="name"
                    class="block mb-2 text-sm font-medium text-[#014539]"
                  >
                    Longitude
                  </label>
                  <input
                    id="longitude"
                    name="longitude"
                    type="number"
                    value={formik.values.longitude}
                    onChange={formik.handleChange}
                    className={`bg-[#DFEBEB] ${
                      formik.errors.longitude && "border-red-500"
                    } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                    // required
                  />
                  {formik.errors.longitude && formik.touched.longitude && (
                    <small className="text-red-500">{formik.errors.code}</small>
                  )}
                </div>
                <div class="mb-6">
                  <label
                    htmlFor="name"
                    class="block mb-2 text-sm font-medium text-[#014539]"
                  >
                    Status
                  </label>
                  <select
                    id="isShow"
                    name="isShow"
                    value={formik.values.isShow}
                    onChange={formik.handleChange}
                    className={`bg-[#DFEBEB] ${
                      formik.errors.role && "border-red-500"
                    } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                    // required
                  >
                    <option value="">role</option>
                    <option value={true}>Active</option>
                    <option value={false}>Non Active</option>
                  </select>
                  {/* {formik.errors.role && formik.touched.role && (
                    <small className="text-red-500">{formik.errors.role}</small>
                  )} */}
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
                <button
                  type="submit"
                  class="text-white bg-[#439A97] hover:bg-[#014539] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10"
                >
                  Submit
                </button>
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button onClick={() => props.setOpenModal(undefined)}>
                I accept
              </Button>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                Decline
              </Button>
            </Modal.Footer> */}
          </Modal>
          <DataTable data={data?.docs || []} columns={columns} />
          <Pagination
            currentPage={page}
            limit={10}
            maxVisible={3}
            pageCount={data?.totalPages || 0}
            totalItems={data?.totalCount || 0}
            gotoPage={(p) => {
              setPage(p);
            }}
            previousPage={() => {
              setPage(page - 1);
            }}
            nextPage={() => {
              setPage(page + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
