// // // src/components/ProductCard.jsx

// // import React from "react";
// // import ReactStars from "react-rating-stars-component";
// // import { useLocation } from "react-router-dom";

// // const ProductCard = (props) => {
// //   const { grid, data } = props;
// //   const location = useLocation();
// //   console.log(data);

// //   const product = {
// //     title: "Wireless Headphones",
// //     description:
// //       "High-quality wireless headphones with noise cancellation and up to 20 hours of battery life.",
// //     price: 99.99,
// //     oldPrice: 149.99, // Optional field
// //     imageUrl: "/images/img_79.png", // Replace with an actual image URL
// //   };
// //   return (
// // new code -- 2
// // <>
// //   {data?.map?.((item, index) => {
// //     return (
// //       <div
// //         key={index}
// //         className={`${
// //           grid === 12
// //             ? "flex items-center gap-4 p-4"
// //             : "max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
// //         } ${grid === 12 ? "bg-white" : ""}`}
// //       >
// //         {/* Product Image */}
// //         <img
// //           className={`${
// //             grid === 12
// //               ? "w-40 h-40 object-contain"
// //               : "w-full h-48 object-contain"
// //           }`}
// //           src={product.imageUrl}
// //           alt={item?.title}
// //         />

// //         <div className={`p-6 ${grid === 12 ? "flex-1" : ""}`}>
// //           {/* Product Title */}
// //           {/* <h2 className="text-white bg-[#ff8717] text-sm mb-2 font-medium tracking-wider w-20 text-center h-6 flex justify-center items-center rounded-sm">
// //             {item?.brand}
// //           </h2> */}
// //           <h2
// //             className={`${
// //               grid === 12 || grid === 3 || grid === 2
// //                 ? "text-xl font-bold text-black"
// //                 : "text-base font-bold text-black"
// //             } `}
// //           >
// //             {item?.title}
// //           </h2>

// //           {/* Product Description */}
// //           <p
// //             className={`${
// //               grid === 4 ? "hidden" : "text-[#929292] text-sm mt-2"
// //             }`}
// //             dangerouslySetInnerHTML={{ __html: item?.description }}
// //           >
// //             {/* {item.description} */}
// //           </p>
// //           {/* stars */}
// //           <ReactStars
// //             count={5}
// //             size={24}
// //             value={item?.totalRating.toString()}
// //             edit={false}
// //             activeColor="#ffd700"
// //           />
// //           {/* Price */}
// //           <div className="mt-2">
// //             <span className="text-gray-900 font-bold text-lg">
// //               $ {item?.price}
// //             </span>
// //             {product.oldPrice && (
// //               <span className="ml-2 text-gray-500 line-through">
// //                 ${product.oldPrice}
// //               </span>
// //             )}
// //           </div>

// //           {/* Add to Cart Button */}
// //           <button className="mt-3 bg-[#ff8717] text-white px-4 py-2 rounded hover:bg-[#ff8717] transition duration-200">
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   })}
// // </>

// // previous code --- 1
// //     <>
// //       {data?.map((item, index) => {
// //         return (
// //           <div
// //             key={index}
// //             className={`${
// //               grid === 12
// //                 ? "flex items-center gap-4 p-4"
// //                 : "max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out relative"
// //             } ${grid === 12 ? "bg-white" : ""}`}
// //           >
// //             <div className="max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
// //               {/* Product Image */}
// //               <img
// //                 className="w-full h-[200px] object-contain"
// //                 src={product.imageUrl}
// //                 alt={item?.title}
// //               />

// //               <div className="p-6">
// //                 {/* Product Title */}
// //                 <h2 className="text-base font-semibold text-gray-800">
// //                   {item?.title}
// //                 </h2>

// //                 {/* Product Description */}
// //                 <p className="text-gray-600 text-sm mt-2">
// //                   {item?.description}
// //                 </p>

// //                 {/* Price */}
// //                 <div className="mt-4">
// //                   <span className="text-gray-900 font-bold text-lg">
// //                     ${item?.price}
// //                   </span>
// //                   {item?.oldPrice && (
// //                     <span className="ml-2 text-gray-500 line-through">
// //                       ${item?.oldPrice}
// //                     </span>
// //                   )}
// //                 </div>

// //                 {/* Add to Cart Button */}
// //                 <button className="mt-6 bg-[#ff8717] text-white px-4 py-2 rounded hover:bg-[#ff8717] transition duration-200">
// //                   Add to Cart
// //                 </button>
// //               </div>
// //             </div>
// //             {/* 2nd card */}
// //             {/* <div className="max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
// //           Product Image
// //           <img
// //             className="w-full h-[200px] object-contain"
// //             src={item?.imageUrl}
// //             alt={item?.title}
// //           />
// //           item?
// //           <div className="p-6">
// //             Product Title
// //             <h2 className="text-base font-semibold text-gray-800">
// //               {item?.title}
// //             </h2>

// //             Product Description
// //             <p className="text-gray-600 text-sm mt-2">
// //               {item?.description}
// //             </p>

// //             Price
// //             <div className="mt-4">
// //               <span className="text-gray-900 font-bold text-lg">
// //                 ${item?.price}
// //               </span>
// //               {item?.oldPrice && (
// //                 <span className="ml-2 text-gray-500 line-through">
// //                   ${item?.oldPrice}
// //                 </span>
// //               )}
// //             </div>

// //             Add to Cart Button
// //             <button className="mt-6 bg-[#ff8717] text-white px-4 py-2 rounded hover:bg-[#ff8717] transition duration-200">
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div> */}
// //           </div>
// //         );
// //       })}
// //     </>
// //   );
// // };

// // export default ProductCard;

// // product card third code -- 03

// // src/components/ProductCard.jsx

// import React from "react";
// import ReactStars from "react-rating-stars-component";
// import { useDispatch, useSelector } from "react-redux";
// import { addToWishlist } from "../features/products/productSlice";
// import { FaRegHeart } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const products = {
//   title: "Wireless Headphones",
//   description:
//     "High-quality wireless headphones with noise cancellation and up to 20 hours of battery life.",
//   price: 99.99,
//   oldPrice: 149.99, // Optional field
//   imageUrl: "/images/img_79.png", // Replace with an actual image URL
// };

// const ProductCard = ({ product, grid }) => {
//   const dispatch = useDispatch();
//   const addtoWishlist = (id) => {
//     // alert(id);
//     dispatch(addToWishlist(id));
//   };
//   return (
//     <div
//       className={`${
//         grid === 12
//           ? "flex items-center gap-4 p-4"
//           : "max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out relative"
//       } ${grid === 12 ? "bg-white" : ""}`}
//     >
//       {/* Product Image */}
//       <img
//         className={`${
//           grid === 12
//             ? "w-40 h-40 object-contain"
//             : "w-full h-48 object-contain"
//         }`}
//         src={products.imageUrl}
//         // src={product?.images[0].url}
//         alt={product.title}
//       />
//       <img
//         src="/images/wish.svg"
//         className="absolute top-4 right-3 text-[#ff8717] w-6 cursor-pointer"
//         alt="WishList"
//         onClick={() => {
//           addtoWishlist(product?._id);
//         }}
//       />

//       <div className={`p-6 ${grid === 12 ? "flex-1" : ""}`}>
//         {/* Product Title */}
//         <h2
//           className={`${
//             grid === 12 || grid === 3 || grid === 2
//               ? "text-xl font-bold text-black"
//               : "text-base font-bold text-black"
//           } `}
//         >
//           {product.title}
//         </h2>

//         {/* Product Description */}
//         <p
//           className={`${grid === 4 ? "hidden" : "text-[#929292] text-sm mt-2"}`}
//           dangerouslySetInnerHTML={{ __html: product.description }}
//         ></p>

//         {/* Rating Stars */}
//         <ReactStars
//           count={5}
//           size={24}
//           value={product.totalRating?.toString()}
//           edit={false}
//           activeColor="#ffd700"
//         />

//         {/* Price */}
//         <div className="mt-2">
//           <span className="text-gray-900 font-bold text-lg">
//             $ {product.price}
//           </span>
//           {product.oldPrice && (
//             <span className="ml-2 text-gray-500 line-through">
//               ${product.oldPrice}
//             </span>
//           )}
//         </div>

//         {/* Add to Cart Button */}
//         <button className="mt-3 bg-[#ff8717] text-white px-4 py-2 rounded hover:bg-[#ff8717] transition duration-200">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// Again writing code (original code)
// ----------------------------------------------------------------------------------
// import React, { useEffect } from "react";
// import ReactStars from "react-rating-stars-component";
// import { useDispatch } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
// import { addToWishlist } from "../features/products/productSlice";

// const ProductCard = (props) => {
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
//       {data?.length > 0 &&
//         data?.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className={`${
//                 location.pathname === "/product" && grid === 12
//                   ? "flex items-center gap-4 px-4 bg-white"
//                   : "max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
//               }`}
//             >
//               <div className="bg-white rounded relative">
//                 <div>
//                   <Link to="/wishlist">
//                     <button
//                       onClick={(e) => {
//                         addedToWishlist(item?._id);
//                       }}
//                     >
//                       <img
//                         src="/images/wish.svg"
//                         alt="wishlist"
//                         className="w-6 cursor-pointer absolute top-3 right-3"
//                       />
//                     </button>
//                   </Link>
//                   <Link to={"/product/" + item?._id}>
//                     <img
//                       src="/images/view.svg"
//                       alt="view"
//                       className="w-6 cursor-pointer absolute top-10 right-3"
//                     />
//                   </Link>
//                   <div>
//                     <img
//                       src="/images/img_79.png"
//                       // src={item?.images[0].url}
//                       alt="Product"
//                       className={`${
//                         grid === 12
//                           ? "w-52 h-52 object-contain"
//                           : "w-full h-48 object-contain"
//                       }`}
//                     />
//                   </div>
//                   <div className={`px-4 py-6 ${grid === 12 ? "flex-1" : ""}`}>
//                     <h6 className="text-xs font-medium mt-7 text-[#ff8717] tracking-wide">
//                       {item?.brand}
//                     </h6>
//                     <h1 className="text-base font-bold tracking-wider mt-2">
//                       {item?.title}
//                     </h1>
//                     {/* Product Description */}
//                     <p
//                       className={`${
//                         grid === 4 ? "hidden" : "text-[#929292] text-sm mt-2"
//                       }`}
//                       dangerouslySetInnerHTML={{ __html: item?.description }}
//                     >
//                       {/* {item?.description} */}
//                     </p>

//                     <ReactStars
//                       count={5}
//                       size={24}
//                       value={item?.totalRating.toString()}
//                       edit={false}
//                       activeColor="#ffd700"
//                     />
//                     <div className="mt-2">
//                       <span className="text-gray-900 font-bold text-lg">
//                         $ {item?.price}
//                       </span>
//                     </div>
//                     <button className="mt-3 bg-[#ff8717] text-sm text-white px-4 py-2 rounded hover:bg-[#ff8717] transition duration-200">
//                       Add to Cart
//                     </button>
//                   </div>

//                   <div
//                     className={`${
//                       grid === 12
//                         ? "absolute top-3 -right-[405px]"
//                         : "absolute -top-44 right-2"
//                     }`}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//     </>
//   );
// };
// export default ProductCard;

// chatgpt code

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { grid, data } = props;
  console.log(data);
  const addedToWishlist = (id) => {
    console.log(id);
    dispatch(addToWishlist(id));
  };
  useEffect(() => {
    addedToWishlist();
  }, []);
  return (
    <>
      <div
        className={`grid gap-4 ${
          grid === 12
            ? "grid-cols-1"
            : grid === 2
            ? "grid-cols-2"
            : grid === 3
            ? "grid-cols-3"
            : "grid-cols-4"
        } max-w-full`}
      >
        {data?.length > 0 &&
          data?.map((item, index) => (
            <>
              <div
                key={index}
                className={` bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out py-3 ${
                  grid === 12 ? "flex items-center gap-4 px-4" : ""
                }`}
              >
                {/* Product Image Section */}
                <div
                  className={`relative ${
                    grid === 12 ? "max-w-full" : "max-w-full"
                  } bg-white rounded`}
                >
                  <Link to={"/product/" + item?._id}>
                    <img
                      src={item?.images[0]?.url || "/images/samsung-a20s.jpg"}
                      alt={item?.title}
                      className={`${
                        grid === 12
                          ? "w-52 h-52 object-contain"
                          : "w-full h-48 object-contain"
                      }`}
                    />
                  </Link>
                  <div
                    className={`${
                      grid === 12
                        ? "absolute -top-10 -right-[697px] gap-2"
                        : "absolute -top-3 right-3 gap-2"
                    } `}
                  >
                    <Link to="/wishlist">
                      {" "}
                      <button
                        onClick={(e) => {
                          addedToWishlist(item?._id);
                        }}
                      >
                        <img
                          src="/images/wish.svg"
                          alt="wishlist"
                          className="w-6 cursor-pointer absolute top-2 right-0"
                        />
                      </button>
                    </Link>
                    <Link to={"/product/" + item?._id}>
                      <img
                        src="/images/view.svg"
                        alt="view"
                        className="w-4 cursor-pointer top-9 right-0"
                      />
                    </Link>
                  </div>
                </div>

                {/* Product Details Section */}
                <div
                  className={`p-4 ${grid === 12 ? "flex-1" : ""} ${
                    grid === 12 ? "w-1/2" : ""
                  }`}
                >
                  <h6 className="text-xs font-medium text-[#ff8717] tracking-wide">
                    {item?.brand}
                  </h6>
                  <h1 className="text-base font-bold tracking-wider mt-2">
                    {item?.title}
                  </h1>
                  {/* Show description only if grid is not 4 */}
                  {grid === 4 ||
                    grid === 3 ||
                    (grid === 2 ? (
                      " "
                    ) : (
                      <p
                        className="text-[#929292] text-sm mt-2"
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      ></p>
                    ))}
                  <ReactStars
                    count={5}
                    size={24}
                    value={item?.totalRating}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="mt-2">
                    <span className="text-gray-900 font-bold text-lg">
                      ${item?.price}
                    </span>
                  </div>
                  <button className="mt-3 bg-[#ff8717] text-sm text-white px-4 py-2 rounded hover:bg-[#ff8717] transition duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default ProductCard;
