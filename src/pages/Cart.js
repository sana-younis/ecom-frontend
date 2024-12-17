import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductCart,
  getUserCart,
  updateProductCart,
} from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

// my code (original)
// const Cart = () => {
//   const [totalAmount, setTotalAmount] = useState(null);
//   const [productUpdateDetail, setProductUpdateDetail] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const userCartState = useSelector((state) => state?.auth?.cartProducts);
//   console.log(userCartState);

//   const getTokenFromLocalStorage = localStorage.getItem("customer")
//     ? JSON.parse(localStorage.getItem("customer"))
//     : null;

//   const config2 = {
//     headers: {
//       Authorization: `Bearer ${
//         getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//       }`,
//       Accept: "application/json",
//     },
//   };

//   useEffect(() => {
//     dispatch(getUserCart(config2));
//   }, []);

//   useEffect(() => {
//     if (productUpdateDetail !== null) {
//       dispatch(
//         updateProductCart({
//           cartItemId: productUpdateDetail?.cartItemId,
//           quantity: productUpdateDetail?.quantity,
//         })
//       );
//       setTimeout(() => {
//         dispatch(getUserCart(config2));
//       }, 200);
//     }
//   }, [productUpdateDetail]);

//   const deleteAProductCart = (id) => {
//     dispatch(deleteProductCart({ id: id, config2: config2 }));
//     setTimeout(() => {
//       dispatch(getUserCart(config2));
//     }, 200);
//   };

//   useEffect(() => {
//     let sum = 0;
//     for (let index = 0; index < userCartState?.length; index++) {
//       sum =
//         sum +
//         Number(userCartState[index]?.quantity) *
//           Number(userCartState[index]?.price);
//       setTotalAmount(sum);
//     }
//   }, [userCartState]);

//   return (
//     <>
//       <section className="py-10 bg-gray-50">
//         <div className="max-w-6xl mx-auto ">
//           <div>
//             <div className="py-3 flex justify-between items-center"></div>
//             {userCartState &&
//               userCartState?.map((item, index) => {
//                 return (
//                   <>
//                     <div className="flex justify-between items-center gap-2">
//                       <div className="w-1/3">
//                         <h4 className="text-xl font-bold ml-20">Product</h4>
//                       </div>
//                       <h4 className="text-xl font-bold ml-20">Price</h4>
//                       <h4 className="text-xl font-bold ml-20">Quantity</h4>
//                       <h4 className="text-xl font-bold ml-20">Total</h4>
//                     </div>
//                     <div
//                       key={index}
//                       className="py-3 mb-2 flex justify-between items-center"
//                     >
//                       <div className="flex items-center gap-10">
//                         <div className="w-25">
//                           {/* <img src="/images/img_79.png" alt="Product" /> */}
//                           <img src={item?.url} alt="Product" />
//                         </div>
//                         <div className="w-75">
//                           <p>{item?.productId.title}</p>
//                           <p className="flex gap-3">
//                             Color:
//                             <ul className="">
//                               <li
//                                 style={{ backgroundColor: item?.color?.title }}
//                               ></li>
//                             </ul>
//                           </p>
//                         </div>
//                       </div>

//                       <div>
//                         <h3>$ {item?.price}</h3>
//                       </div>
//                       <div className="flex items-center gap-10">
//                         <div>
//                           <input
//                             type="number"
//                             name={"quantity" + item?._id}
//                             min={1}
//                             max={10}
//                             id={"cart" + item?._id}
//                             value={item?.quantity}
//                             onChange={(e) => {
//                               setProductUpdateDetail({
//                                 cartItemId: item?._id,
//                                 quantity: e.target.value,
//                               });
//                             }}
//                           />
//                         </div>
//                         <div>
//                           <MdDelete
//                             className="cursor-pointer text-red-600"
//                             onClick={() => {
//                               deleteAProductCart(item?._id);
//                             }}
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <h5>${item?.price * item?.quantity}</h5>
//                       </div>
//                     </div>
//                   </>
//                 );
//               })}
//           </div>
//           <div className="py-2 mt-4">
//             <div className="flex justify-between items-center">
//               <Link
//                 to="/product"
//                 className="bg-[#ff8717] text-white p-3 font-semibold rounded-sm mt-16"
//               >
//                 Continue to Shopping
//               </Link>
//               {(totalAmount !== null || totalAmount !== 0) && (
//                 <div className="flex flex-col items-end">
//                   <h2 className="text-2xl text-black">
//                     Subtotal: ${totalAmount}
//                   </h2>
//                   <p className="pt-2">
//                     Taxes and shipping calculated at checkout
//                   </p>
//                   <Link
//                     to="/checkout"
//                     className="bg-[#ff8717] text-white p-3 px-6 font-semibold rounded-sm mt-3"
//                   >
//                     Checkout
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;

// chatgpt code

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(null);
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(userCartState);

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

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateProductCart({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart(config2));
      }, 200);
    }
  }, [productUpdateDetail]);

  const deleteAProductCart = (id) => {
    dispatch(deleteProductCart({ id: id, config2: config2 }));
    setTimeout(() => {
      dispatch(getUserCart(config2));
    }, 200);
  };

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index]?.quantity) *
          Number(userCartState[index]?.price);
      setTotalAmount(sum);
    }
  }, [userCartState]);

  // payment integration
  // const proceedToCheckout = async () => {
  //   const stripe = await loadStripe(
  //     "pk_test_51QVeoJCplrVSllH3ObYob3VB0pSwMUM60funrnItcD1pRmlBHNqfS2kVm4rmAsZPDmTU70Axw2ALMiu5W7rT06TQ00yBE9GFmH"
  //   );
  //   const body = {
  //     products: userCartState,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   const response = await fetch(
  //     "http://localhost:4000/api/create-checkout-session",
  //     {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     }
  //   );
  //   const session = await response.json();
  //   const redirect = stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });
  //   if (redirect.error) {
  //     console.log(redirect.error.message);
  //   }
  // };

  // const proceedToCheckout = async () => {
  //   const stripe = await loadStripe(
  //     "pk_test_51QVeoJCplrVSllH3ObYob3VB0pSwMUM60funrnItcD1pRmlBHNqfS2kVm4rmAsZPDmTU70Axw2ALMiu5W7rT06TQ00yBE9GFmH"
  //   );
  //   const body = {
  //     products: userCartState,
  //   };
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   try {
  //     const response = await fetch("/api/create-checkout-session", {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     });
  //     const session = await response.json();
  //     console.log("Session Response:", session);

  //     if (!session.id) {
  //       console.error("Failed to create session.");
  //       return;
  //     }

  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });

  //     if (result.error) {
  //       console.log("Stripe Checkout Error:", result.error.message);
  //     }
  //   } catch (error) {
  //     console.error("Error during checkout:", error);
  //   }
  // };

  // new code
  // const checkout = async () => {
  //   const body = {
  //     products: userCartState,
  //   };
  //   try {
  //     const response = await fetch(
  //       "http://localhost:4000/api/checkout-session",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         mode: "cors",
  //         body: JSON.stringify(
  //           // {
  //           // items: [
  //           //   {
  //           //     id: 1,
  //           //     quantity: 1,
  //           //     price: 250,
  //           //     name: "Samsung Galaxy A20s 3GB Ram 64GB Storage",
  //           //   },
  //           // ],
  //           // }
  //           body
  //         ),
  //       }
  //     );
  //     const data = await response.json();
  //     window.location = data.url;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // new code 2

  const cartData = [
    { title: "Product 1", price: 100, quantity: 1 },
    { title: "Product 2", price: 200, quantity: 2 },
  ];

  const checkout = async () => {
    const body = {
      items: [
        {
          title: "Samsung Galaxy A20s 3GB Ram 64GB Storage",
          price: 250,
          quantity: 1,
        },
      ],
    };
    try {
      const response = await fetch(
        // "http://localhost:4000/api/checkout-session",
        "https://ecommerce-backend-three-gamma.vercel.app/api/checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify(body), // Sending "items" instead of "products"
        }
      );
      const data = await response.json();
      if (data.url) {
        window.location = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.log("Error in checkout:", error);
    }
  };

  return (
    <>
      <section className="py-10 max-w-6xl mx-auto">
        <div className="flex justify-between items-center gap-4 md:gap-8 pt-10 pb-5">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h4 className="text-lg font-bold text-center">Product</h4>
          </div>
          <h4 className="w-1/4 text-lg font-bold text-center ml-24">Price</h4>
          <h4 className="w-1/4 text-lg font-bold text-center">Quantity</h4>
          <h4 className="w-1/4 text-lg font-bold text-center">Total</h4>
        </div>
        {userCartState &&
          userCartState?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded shadow-sm mb-4"
              >
                <div className="flex items-center gap-4 w-full md:w-1/3">
                  <img
                    src={item?.images?.[0]?.url || "/images/img_64.png"}
                    alt={item?.title || "Product Image"}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {item?.productId?.title}
                    </p>
                    <p className="text-xs flex items-center gap-1">
                      <span>Color:</span>
                      <span
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item?.color?.title }}
                      ></span>
                    </p>
                  </div>
                </div>

                <div className="w-full md:w-1/4 text-center">
                  <h3 className="text-sm">$ {item?.price}</h3>
                </div>

                <div className="w-full md:w-1/4 flex items-center justify-center">
                  <input
                    type="number"
                    name={"quantity" + item?._id}
                    min={1}
                    max={10}
                    id={"cart" + item?._id}
                    value={item?.quantity}
                    onChange={(e) => {
                      setProductUpdateDetail({
                        cartItemId: item?._id,
                        quantity: e.target.value,
                      });
                    }}
                    className="w-12 text-center border rounded"
                  />
                  <MdDelete
                    className="cursor-pointer text-red-600 ml-2"
                    onClick={() => deleteAProductCart(item?._id)}
                  />
                </div>

                <div className="w-full md:w-1/4 text-center">
                  <h5 className="text-sm font-semibold">
                    ${item?.price * item?.quantity}
                  </h5>
                </div>
              </div>
            );
          })}

        <div className="flex flex-wrap justify-between items-center mt-8 gap-4 ">
          <Link
            to="/store"
            className="bg-[#ff8717] text-white py-2 px-4 rounded"
          >
            Continue Shopping
          </Link>

          {(totalAmount !== null || totalAmount !== 0) && (
            <div className="flex flex-col items-end">
              <h2 className="text-lg font-bold">Subtotal: ${totalAmount}</h2>
              <p className="text-sm">
                Taxes and shipping calculated at checkout
              </p>
              <button
                onClick={checkout}
                className="bg-[#ff8717] text-white py-2 px-6 rounded mt-2"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Cart;
