import React, { useState, useEffect } from "react";
import Sidebar from "../../components/DashboardAdmin/sidebar";
import axios from "axios";
import DataTable from "./DataTable";
import { useMemo } from "react";
import Pagination from "./Pagination";
import { useFormik } from "formik";
import { Button, Modal } from "flowbite-react";
import * as Yup from "yup";

export default function Admin() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const [show, setShow] = useState("");
  const getData = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API}/user?page=${page}`
    );
    setData(result.data.data);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      phone: "",
      role: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required(),
      password: Yup.string().required(),
      email: Yup.string().email().required(),
      phone: Yup.string().required(),
    }),
    onSubmit: async (val, { setSubmitting, setFieldError }) => {
      try {
        show == "create"
          ? await axios.post(`${process.env.REACT_APP_API}/auth/register`, val)
          : await axios.put(`${process.env.REACT_APP_API}/user/${show}`, val, {
              headers: { Authorization: localStorage.getItem("token") },
            });
        await getData();
        props.setOpenModal(undefined);
      } catch (error) {
        if (error.response) {
          if (error.response.data.message) {
            setFieldError("email", error.response.data.message);
          } else {
            setFieldError(
              "email",
              "Terjadi kesalahan saat mengirim permintaan."
            );
          }
        } else {
          setFieldError("email", "Tidak dapat terhubung ke server.");
        }
      }
    },
  });

  const columns = useMemo(
    () => [
      {
        Header: "Nama",
        accessor: "fullName",
      },
      {
        Header: "Email",
        accessor: "email",
      },

      {
        Header: "Phone",
        accessor: "phone",
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
                  setShow(row?.id);
                  formik.setFieldValue("email", row.email);
                  formik.setFieldValue("fullName", row.fullName);
                  formik.setFieldValue("password", row.password);
                  formik.setFieldValue("phone", row.phone);
                  formik.setFieldValue("role", row.role);
                }}
              >
                Edit
              </span>
              <span
                className="text-red-500  hover:underline cursor-pointer"
                // onClick={() => handleDelete(row?._id)}
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
                Data User
              </h2>
              <p class=" text-[#014539] font-normal">
                Kelola seluruh user Disa
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
              Create User
            </button>
          </div>
          <Modal
            dismissible
            show={props.openModal === "dismissible"}
            size={"lg"}
            onClose={() => {
              props.setOpenModal(undefined);
              formik.resetForm();
            }}
          >
            <Modal.Header>Form User</Modal.Header>
            <Modal.Body>
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
                  {formik.errors.fullName && formik.touched.fullName && (
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
                  {formik.errors.email && formik.touched.email && (
                    <small className="text-red-500">
                      {formik.errors.email}
                    </small>
                  )}
                </div>
                <div class="mb-6">
                  <label
                    htmlFor="name"
                    class="block mb-2 text-sm font-medium text-[#014539]"
                  >
                    Nama
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    className={`bg-[#DFEBEB] ${
                      formik.errors.role && "border-red-500"
                    } border-none hover:border-none text-gray-900 text-sm rounded-lg block w-full p-4 placeholder-gray-400`}
                    // required
                  >
                    <option value="">role</option>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                  {formik.errors.role && formik.touched.role && (
                    <small className="text-red-500">{formik.errors.role}</small>
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
                  {formik.errors.phone && formik.touched.phone && (
                    <small className="text-red-500">
                      {formik.errors.phone}
                    </small>
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
                  {formik.errors.password && formik.touched.password && (
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
          {data?.docs?.length != 0 && (
            <Pagination
              currentPage={page}
              limit={10}
              maxVisible={3}
              pageCount={data?.paginator?.pageCount}
              totalItems={data?.paginator?.itemCount}
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
          )}
        </div>
      </div>
    </div>
  );
}
