// SignUp.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetState } from "../features/user/userSlice";

const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  email: yup.string().required("Email is Required"),
  mobile: yup.string().required("Mobile No is Required"),
  password: yup.string().required("Password is Required"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      dispatch(resetState());
    },
  });
  useEffect(() => {
    if (authState.createdUser !== null && authState.isError === false) {
      navigate("/login");
    }
  }, [authState]);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState();
  // const [password, setPassword] = useState("");

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   Add sign-up logic here
  //   console.log("Sign Up:", { name, email, password });
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6">
            <CustomInput
              type="text"
              id="first-name"
              placeholder="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange("firstName")}
              onBlur={formik.handleBlur("firstName")}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="text-[red]">
            {formik.touched.firstName && formik.errors.firstName}
          </div>
          <div className="mb-6">
            <CustomInput
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange("lastName")}
              onBlur={formik.handleBlur("lastName")}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="text-[red]">
            {formik.touched.lastName && formik.errors.lastName}
          </div>
          <div className="mb-6">
            <CustomInput
              type="email"
              id="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-[red]">
            {formik.touched.email && formik.errors.email}
          </div>
          <div className="mb-6">
            <CustomInput
              type="tel"
              id="mobile"
              placeholder="Mobile No"
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
              onBlur={formik.handleBlur("mobile")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-[red]">
            {formik.touched.mobile && formik.errors.mobile}
          </div>
          <div className="mb-6">
            <CustomInput
              type="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="text-[red]">
            {formik.touched.password && formik.errors.password}
          </div>
          <button
            type="submit"
            className="w-full bg-[#ff8717] text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center mr-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#ff8717] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
