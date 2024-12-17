// login page
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetState } from "../features/user/userSlice";

const logInSchema = yup.object({
  email: yup.string().required(""),
  password: yup.string().required(""),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state?.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  useEffect(() => {
    if (authState.user !== null && authState.isError === false) {
      navigate("/");
    }
  }, [authState]);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Logged in successfully");
  // };

  return (
    <div className="container bg-gray-100 mx-auto p-5 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

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
          </div>
          <div className="text-[red]">
            {formik.touched.email && formik.errors.email}
          </div>
          <div className="mb-6">
            <label htmlFor="" className="mb-0 ml-1 text-black font-semibold">
              Password
            </label>
            <CustomInput
              id="password"
              type="password"
              placeholder="••••••••"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              className="w-full p-3 border border-[#eeeeee] rounded-lg outline-none"
            />
          </div>
          <div className="text-[red]">
            {formik.touched.password && formik.errors.password}
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff8718] border-0 text-white py-3 rounded-lg hover:bg-[#e76e11] transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="flex justify-start items-center">
            <Link to="/forgot-password" className="text-[#929292] text-sm">
              Forgot Password
            </Link>
          </p>
          <p className="text-sm text-gray-600 mt-3">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-[#ff8718] font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
