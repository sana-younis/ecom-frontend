import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { forgotPassword } from "../features/user/userSlice";

const emailSchema = yup.object({
  email: yup.string().email().required("Email is required"),
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
      // dispatch(resetState());
    },
  });
  return (
    <>
      <div className="container bg-gray-100 mx-auto p-5 flex justify-center items-center h-screen">
        <div className="w-full max-w-md bg-white py-12 px-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-3">
            Forgot Password
          </h1>
          <p className="text-sm text-center">
            We will send you an email to enter new password
          </p>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="mt-10 mb-8">
              <label htmlFor="" className="mb-0 ml-1 text-black font-semibold">
                Email
              </label>
              <CustomInput
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                className="w-full p-3 border border-[#eeeeee] rounded-lg "
              />
              <div className="text-[red]">
                {formik.touched.email && formik.errors.email}
              </div>
            </div>
            <button
              type="submit"
              className="w-[50%] bg-[#ff8718] border-0 text-white py-3 rounded-lg hover:bg-[#e76e11] transition duration-200 mr-2"
            >
              Submit
            </button>
            <Link
              to="/login"
              className="w-full border border-[#ff8717] text-black text-center py-3.5 px-16 rounded-lg hover:bg-[#e76e11] transition duration-200 hover:text-white"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
