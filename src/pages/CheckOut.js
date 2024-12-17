// // my code (original)
// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { Link } from "react-router-dom";
// // import { useFormik } from "formik";
// // import * as yup from "yup";

// // const shippingSchema = yup.object({
// //   firstName: yup.string().required("First Name is Required"),
// //   lastName: yup.string().required("Last Name is Required"),
// //   address: yup.string().required("Address is Required"),
// //   state: yup.string().required("State is Required"),
// //   city: yup.string().required("City is Required"),
// //   country: yup.string().required("Country is Required"),
// //   pincode: yup.number().required("Pin Code is Required"),
// // });

// // const CheckOut = () => {
// //   const [shippingInfo, setShippingInfo] = useState(null);
// //   const dispatch = useDispatch();
// //   const [totalAmount, setTotalAmount] = useState(null);
// //   const cartState = useSelector((state) => state?.auth?.cartProducts);
// //   useEffect(() => {
// //     let sum = 0;
// //     for (let index = 0; index < cartState?.length; index++) {
// //       sum =
// //         sum +
// //         Number(cartState[index]?.quantity) * Number(cartState[index]?.price);
// //       setTotalAmount(sum);
// //     }
// //   }, [cartState]);

// //   const formik = useFormik({
// //     initialValues: {
// //       firstName: "",
// //       lastName: "",
// //       address: "",
// //       state: "",
// //       city: "",
// //       country: "",
// //       pincode: "",
// //       other: "",
// //     },
// //     validationSchema: shippingSchema,
// //     onSubmit: (values) => {
// //       // alert(JSON.stringify(values));
// //       setShippingInfo(values);
// //     },
// //   });

// //   return (
// //     <>
// //       <div className="bg-gray-100 p-10 flex justify-between items-center max-w-7xl">
// //         <div>
// //           <div>
// //             <h3 className="text-2xl font-bold mb-4">
// //               Multi Vendor E-commerce Store
// //             </h3>
// //             <nav
// //               style={{ "--bs-breadcrumb-divider": ">" }}
// //               aria-label="breadcrumb"
// //               className=""
// //             >
// //               <ol className="flex justify-start items-center gap-5">
// //                 <li>
// //                   <Link to="/cart">Cart</Link>
// //                 </li>
// //                 <li>Information </li>
// //                 <li>Shipping </li>
// //                 <li>Payment</li>
// //               </ol>
// //             </nav>
// //             <h4 className="text-base font-bold mt-3">Contact Information</h4>
// //             <p className="text-sm text-black mt-2">
// //               Sana Y. (sana.younis05@gmail.com)
// //             </p>
// //             <h4 className="mb-2 text-xl font-bold mt-3">Shipping Address</h4>
// //             <form
// //               className="flex flex-wrap justify-between gap-3"
// //               onSubmit={formik.handleSubmit}
// //             >
// //               <div className="w-full">
// //                 <select
// //                   name="country"
// //                   value={formik.values.country}
// //                   onChange={formik.handleChange("country")}
// //                   onBlur={formik.handleBlur("country")}
// //                 >
// //                   <option value="">Select Country</option>
// //                   <option defaultValue="pakistan">Pakistan</option>
// //                 </select>
// //                 <div>{formik.touched.country && formik.errors.country}</div>
// //               </div>
// //               <div className="flex-grow w-1/2">
// //                 <input
// //                   type="text"
// //                   placeholder="First Name"
// //                   className=""
// //                   name="firstName"
// //                   value={formik.values.firstName}
// //                   onChange={formik.handleChange("firstName")}
// //                   onBlur={formik.handleBlur("firstName")}
// //                 />
// //                 <div>{formik.touched.firstName && formik.errors.firstName}</div>
// //               </div>

// //               <div className="flex-grow w-[45%]">
// //                 <input
// //                   type="text"
// //                   placeholder="Last Name"
// //                   name="lastName"
// //                   value={formik.values.lastName}
// //                   onChange={formik.handleChange("lastName")}
// //                   onBlur={formik.handleBlur("lastName")}
// //                 />
// //                 <div>{formik.touched.lastName && formik.errors.lastName}</div>
// //               </div>
// //               <div className="w-full">
// //                 <input
// //                   type="text"
// //                   placeholder="Address"
// //                   name="address"
// //                   value={formik.values.address}
// //                   onChange={formik.handleChange("address")}
// //                   onBlur={formik.handleBlur("address")}
// //                 />
// //                 <div>{formik.touched.address && formik.errors.address}</div>
// //               </div>
// //               <div className="w-full">
// //                 <input
// //                   type="text"
// //                   placeholder="Apartment, Suite etc"
// //                   name="other"
// //                   value={formik.values.other}
// //                   onChange={formik.handleChange("other")}
// //                   onBlur={formik.handleBlur("other")}
// //                 />
// //               </div>
// //               <div className="flex-grow">
// //                 <input
// //                   type="text"
// //                   placeholder="City"
// //                   name="city"
// //                   value={formik.values.city}
// //                   onChange={formik.handleChange("city")}
// //                   onBlur={formik.handleBlur("city")}
// //                 />
// //                 <div>{formik.touched.city && formik.errors.city}</div>
// //               </div>
// //               <div className="flex-grow">
// //                 <select
// //                   name="state"
// //                   value={formik.values.state}
// //                   onChange={formik.handleChange("state")}
// //                   onBlur={formik.handleBlur("state")}
// //                 >
// //                   <option value="">Select City</option>
// //                   <option defaultValue="lahore">Lahore</option>
// //                 </select>
// //                 <div>{formik.touched.state && formik.errors.state}</div>
// //               </div>
// //               <div className="flex-grow">
// //                 <input
// //                   type="text"
// //                   placeholder="Zip Code"
// //                   name="pincode"
// //                   value={formik.values.pincode}
// //                   onChange={formik.handleChange("pincode")}
// //                   onBlur={formik.handleBlur("pincode")}
// //                 />
// //                 <div>{formik.touched.pincode && formik.errors.pincode}</div>
// //               </div>
// //               <div className="w-full">
// //                 <div className="flex justify-between items-center">
// //                   <Link className="text-dark" to="/cart">
// //                     Return To Cart
// //                   </Link>
// //                   <Link
// //                     className="bg-[#ff8717] p-3 text-white rounded-sm "
// //                     to="/cart"
// //                   >
// //                     Continue to Shopping
// //                   </Link>
// //                   <button className="" type="submit">
// //                     Place Order
// //                   </button>
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //         <div>
// //           <div className="border-b py-4">
// //             {cartState &&
// //               cartState?.map((item, index) => {
// //                 return (
// //                   <div key={index} className="flex gap-10 mb-2 items-center ">
// //                     <div className="flex gap-10 w-75">
// //                       <div className="w-25 relative">
// //                         <span
// //                           style={{ top: "-10px", right: "2px" }}
// //                           className="text-white rounded-full p-2 absolute"
// //                         >
// //                           {item?.quantity}
// //                         </span>
// //                         <img
// //                           src={item?.productId?.images[0]?.url}
// //                           alt="product"
// //                           width={100}
// //                           height={100}
// //                         />
// //                       </div>
// //                       <div>
// //                         <h5>{item?.productId?.title}</h5>
// //                         <p>{item?.color?.title}</p>
// //                       </div>
// //                     </div>
// //                     <div className="flex-grow">
// //                       <h5>{item?.price * item?.quantity}</h5>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //           </div>
// //           <div className="border-b py-4">
// //             <div className="flex justify-between items-center">
// //               <p>Subtotal:</p>
// //               <p>$ {totalAmount ? totalAmount : 0}</p>
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <p>Shipping:</p>
// //               <p>$ 10</p>
// //             </div>
// //             <div className="flex justify-between items-center">
// //               <p>Total:</p>
// //               <p>$ {totalAmount ? totalAmount + 10 : 0}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default CheckOut;

// // code
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { GoArrowLeft } from "react-icons/go";

// const shippingSchema = yup.object({
//   firstName: yup.string().required("First Name is Required"),
//   lastName: yup.string().required("Last Name is Required"),
//   address: yup.string().required("Address is Required"),
//   state: yup.string().required("State is Required"),
//   city: yup.string().required("City is Required"),
//   country: yup.string().required("Country is Required"),
//   pincode: yup.number().required("Pin Code is Required"),
// });

// const CheckOut = () => {
//   const [shippingInfo, setShippingInfo] = useState(null);
//   const dispatch = useDispatch();
//   const [totalAmount, setTotalAmount] = useState(null);
//   const cartState = useSelector((state) => state?.auth?.cartProducts);

//   useEffect(() => {
//     let sum = 0;
//     for (let index = 0; index < cartState?.length; index++) {
//       sum +=
//         Number(cartState[index]?.quantity) * Number(cartState[index]?.price);
//     }
//     setTotalAmount(sum);
//   }, [cartState]);

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       address: "",
//       state: "",
//       city: "",
//       country: "",
//       pincode: "",
//       other: "",
//     },
//     validationSchema: shippingSchema,
//     onSubmit: (values) => {
//       setShippingInfo(values);
//     },
//   });

//   return (
//     <div className="bg-gray-100 px-4 py-8 lg:py-12 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
//       {/* Shipping Information */}
//       <div className="lg:col-span-2 bg-white shadow-md rounded-md p-6">
//         <h3 className="text-2xl font-bold mb-4">
//           Multi Vendor E-commerce Store
//         </h3>
//         <nav className="text-sm text-gray-600 flex gap-4 mb-6">
//           <Link to="/cart" className="hover:text-black">
//             Cart
//           </Link>
//           <span>&gt;</span>
//           <span>Information</span>
//           <span>&gt;</span>
//           <span>Shipping</span>
//           <span>&gt;</span>
//           <span>Payment</span>
//         </nav>

//         <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
//         <p className="text-sm text-gray-800 mb-6">
//           Sana Y. (sana.younis05@gmail.com)
//         </p>

//         <h4 className="text-lg font-semibold mb-4">Shipping Address</h4>
//         <form
//           className="grid gap-4 sm:grid-cols-2"
//           onSubmit={formik.handleSubmit}
//         >
//           <div className="col-span-full">
//             <select
//               name="country"
//               value={formik.values.country}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             >
//               <option value="">Select Country</option>
//               <option value="Pakistan">Pakistan</option>
//             </select>
//             {formik.touched.country && formik.errors.country && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.country}
//               </p>
//             )}
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="First Name"
//               name="firstName"
//               value={formik.values.firstName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             />
//             {formik.touched.firstName && formik.errors.firstName && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.firstName}
//               </p>
//             )}
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Last Name"
//               name="lastName"
//               value={formik.values.lastName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             />
//             {formik.touched.lastName && formik.errors.lastName && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.lastName}
//               </p>
//             )}
//           </div>

//           <div className="col-span-full">
//             <input
//               type="text"
//               placeholder="Address"
//               name="address"
//               value={formik.values.address}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             />
//             {formik.touched.address && formik.errors.address && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.address}
//               </p>
//             )}
//           </div>

//           <div className="col-span-full">
//             <input
//               type="text"
//               placeholder="Apartment, Suite, etc. (Optional)"
//               name="other"
//               value={formik.values.other}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="City"
//               name="city"
//               value={formik.values.city}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             />
//             {formik.touched.city && formik.errors.city && (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
//             )}
//           </div>

//           <div>
//             <select
//               name="state"
//               value={formik.values.state}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             >
//               <option value="">Select State</option>
//               <option value="Lahore">Lahore</option>
//             </select>
//             {formik.touched.state && formik.errors.state && (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
//             )}
//           </div>

//           <div>
//             <input
//               type="text"
//               placeholder="Zip Code"
//               name="pincode"
//               value={formik.values.pincode}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className="w-full border rounded p-2"
//             />
//             {formik.touched.pincode && formik.errors.pincode && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.pincode}
//               </p>
//             )}
//           </div>

//           <div className="col-span-full flex justify-between mt-4">
//             <Link
//               to="/cart"
//               className="text-sm text-gray-600 hover:underline flex gap-2"
//             >
//               <GoArrowLeft /> Return to Cart
//             </Link>
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//             >
//               Place Order
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Order Summary */}
//       <div className="bg-white shadow-md rounded-md p-6">
//         <h4 className="text-lg font-bold mb-4">Order Summary</h4>
//         <div className="border-b pb-4 mb-4">
//           {cartState?.map((item, index) => (
//             <div key={index} className="flex items-center gap-4 mb-3">
//               <div className="w-16 h-16 relative">
//                 <img
//                   src={item?.productId?.images[0]?.url}
//                   // src="/images/img_79.png"
//                   alt="product"
//                   className="w-full h-full object-cover rounded"
//                 />
//                 <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs px-2 rounded-full">
//                   {item.quantity}
//                 </span>
//               </div>
//               <div className="flex-grow">
//                 <h5 className="font-medium text-sm">
//                   {item?.productId?.title}
//                 </h5>
//                 <p className="text-xs text-gray-500">
//                   Color: {item?.color?.title}
//                 </p>
//               </div>
//               <p className="font-bold text-sm">
//                 ${item?.price * item?.quantity}
//               </p>
//             </div>
//           ))}
//         </div>
//         <div className="py-4">
//           <div className="flex justify-between mb-2">
//             <p className="text-base">Subtotal:</p>
//             <p className="text-sm font-semibold">${totalAmount}</p>
//           </div>
//           <div className="flex justify-between mb-2">
//             <p className="text-base">Shipping:</p>
//             <p className="text-sm font-semibold">$10</p>
//           </div>
//           <div className="flex justify-between text-lg font-bold">
//             <p className="text-base font-normal">Total:</p>
//             <p>${totalAmount ? totalAmount + 10 : 0}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;

import React from "react";

const CheckOut = () => {
  return <div>CheckOut</div>;
};

export default CheckOut;
