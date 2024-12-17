// import React, { useEffect } from "react";
// import ReactStars from "react-rating-stars-component";
// import { useDispatch } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { addToWishlist } from "../features/products/productSlice";

// const PopularProducts = (props) => {
//   // return (
//   //   <div>
//   //     <div className="">
//   //       {/* hot selling categories */}
//   //       <div className="p-2 rounded-lg bg-gray-200 transition flex gap-2 w-[200px] mb-4 mt-7">
//   //         <div className="">
//   //           <img
//   //             src="/images/img_79.png"
//   //             alt=""
//   //             className="w-20 h-20 object-contain rounded-lg mb-2"
//   //           />
//   //         </div>
//   //         <div>
//   //           <h3 className="text-xs font-semibold mt-2">
//   //             SAMSUNG Galaxy Tab A7
//   //           </h3>
//   //           <ReactStars
//   //             count={5}
//   //             size={16}
//   //             value={3}
//   //             edit={false}
//   //             activeColor="#ffd700"
//   //           />
//   //           <p className="text-gray-600 mb-2 text-sm">$ 100.00</p>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const { grid, data } = props;
//   console.log(data);
//   const addedToWishlist = (id) => {
//     console.log(id);
//     dispatch(addToWishlist(id));
//   };
//   useEffect(() => {
//     addedToWishlist();
//   }, []);
//   return (
//     <>
//       {data?.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className={`${
//               location.pathname === "/product" && grid === 12
//                 ? "flex items-center gap-4 px-4 bg-white mb-2"
//                 : "max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-4 mr-5"
//             }`}
//           >
//             <div className="bg-white rounded relative">
//               <div className="flex justify-between items-center">
//                 <Link to="/wishlist">
//                   <button
//                     onClick={(e) => {
//                       addedToWishlist(item?._id);
//                     }}
//                   >
//                     <img
//                       src="/images/wish.svg"
//                       alt="wishlist"
//                       className="w-4 cursor-pointer absolute top-2 right-3"
//                     />
//                   </button>
//                 </Link>
//                 {/* <Link to={"/product/" + item?._id}>
//                   <img
//                     src="/images/view.svg"
//                     alt="view"
//                     className="w-4 cursor-pointer absolute top-6 right-3"
//                   />
//                 </Link> */}
//                 <div>
//                   <img
//                     // src="/images/img_79.png"
//                     src={item?.images[0]?.url}
//                     alt="Product"
//                     className={`${
//                       grid === 12
//                         ? "w-24 h-24 object-contain"
//                         : "w-24 h-24  object-contain"
//                     }`}
//                   />
//                 </div>
//                 <div
//                   className={`px-5 pt-0 pb-3 ${grid === 12 ? "flex-1" : ""}`}
//                 >
//                   <h6 className="text-xs font-medium mt-3 text-[#ff8717] tracking-wide">
//                     {item?.brand}
//                   </h6>
//                   <h1 className="text-sm font-bold tracking-wider mt-2">
//                     {item?.title}
//                   </h1>
//                   {/* Product Description */}
//                   {/* <p
//                     className={`${
//                       grid === 4 ? "hidden" : "text-[#929292] text-sm mt-2"
//                     }`}
//                     dangerouslySetInnerHTML={{ __html: item?.description }}
//                   >
//                     {item?.description}
//                   </p> */}

//                   <ReactStars
//                     count={5}
//                     size={17}
//                     value={item?.totalRating.toString()}
//                     edit={false}
//                     activeColor="#ffd700"
//                   />
//                   <div className="">
//                     <span className="text-gray-900 font-bold text-sm">
//                       $ {item?.price}
//                     </span>
//                   </div>
//                   {/* <button className="mt-3 bg-[#ff8717] text-sm text-white px-4 py-2 rounded hover:bg-[#ff8717] transition duration-200">
//                     Add to Cart
//                   </button> */}
//                 </div>

//                 <div
//                   className={`${
//                     grid === 12
//                       ? "absolute top-3 -right-[405px]"
//                       : "absolute -top-44 right-2"
//                   }`}
//                 ></div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };
// export default PopularProducts;
