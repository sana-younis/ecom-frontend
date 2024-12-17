import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/user/userSlice";
import { FaRegEdit } from "react-icons/fa";
import { config } from "../utils/axiosConfig";

const profileSchema = yup.object({
  firstName: yup.string().required(""),
  lastName: yup.string().required(""),
  email: yup.string().required("Email is required"),
  mobile: yup.number().required(""),
});

const Profile = () => {
  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userState?.firstName,
      lastName: userState?.lastName,
      email: userState?.email,
      mobile: userState?.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      dispatch(updateUserProfile({ data: values, config2: config2 }));
      setEdit(true);
    },
  });
  return (
    <div className="container bg-gray-100 mx-auto p-5 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-bold text-center">Update Profile</h1>
          <FaRegEdit onClick={() => setEdit(false)} size={20} />
        </div>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="flex justify-between gap-2">
            <div className="mt-10">
              <label htmlFor="" className="mb-0 ml-1 text-black font-semibold ">
                First Name
              </label>
              <input
                id=""
                type="text"
                name="firstName"
                placeholder="Enter Name"
                disabled={edit}
                value={formik.values.firstName}
                onChange={formik.handleChange("firstName")}
                onBlur={formik.handleBlur("firstName")}
                className="w-full p-3 border border-[#eeeeee] rounded-lg mt-2"
              />
              <div>{formik.touched.firstName && formik.errors.firstName}</div>
            </div>
            <div className="mt-10">
              <label htmlFor="" className="mb-0 ml-1 text-black font-semibold">
                Last Name
              </label>
              <input
                id=""
                type="text"
                name="lastName"
                placeholder="Enter Name"
                disabled={edit}
                value={formik.values.lastName}
                onChange={formik.handleChange("lastName")}
                onBlur={formik.handleBlur("lastName")}
                className="w-full p-3 border border-[#eeeeee] rounded-lg mt-2"
              />
              <div>{formik.touched.lastName && formik.errors.lastName}</div>
            </div>
          </div>
          <div className="mt-5 mb-8">
            <label htmlFor="" className="mb-0 ml-1 text-black font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              disabled={edit}
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              className="w-full p-3 border border-[#eeeeee] rounded-lg mt-2"
            />
            <div className="text-red-500">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="" className="mb-0 ml-1 text-black font-semibold">
              Phone No
            </label>
            <input
              id=""
              type="number"
              name="mobile"
              placeholder="Enter Phone Number"
              disabled={edit}
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
              onBlur={formik.handleBlur("mobile")}
              className="w-full p-3 border border-[#eeeeee] rounded-lg outline-none mt-2"
            />
            <div>{formik.touched.mobile && formik.errors.mobile}</div>
          </div>
          {edit === false && (
            <button
              type="submit"
              className="w-full bg-[#ff8718] border-0 text-white py-3 rounded-lg hover:bg-[#e76e11] transition duration-200 outline-0"
            >
              Save
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
