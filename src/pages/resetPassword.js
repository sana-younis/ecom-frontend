import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../features/user/userSlice";

const passwordSchema = yup.object({
  password: yup.string().required(""),
});

const ResetPassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  // console.log(getToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
      navigate("/login");
      // dispatch(resetState());
    },
  });
  return (
    <>
      <div className="container bg-gray-100 mx-auto p-5 flex justify-center items-center h-screen">
        <div className="w-full max-w-md bg-white py-12 px-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-3">
            Reset Password
          </h1>
          {/* <p className="text-sm text-center">
          We will send you an email to enter new password
        </p> */}
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="mt-7">
              <CustomInput
                id=""
                type="password"
                name="password"
                placeholder="New Password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                className="w-full p-3 border border-[#eeeeee] rounded-lg "
              />
              <div className="text-[red]">
                {formik.touched.password && formik.errors.password}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff8718] border-0 text-white py-3 rounded-lg hover:bg-[#e76e11] transition duration-200 mt-4"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
