import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getOrderedProduct?.orders
  );
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    // <>
    //   <section className="bg-gray-50">
    //     <div className="py-10 max-w-full mx-auto">
    //       <div className="border border-[#929292] py-3">
    //         <div className="flex justify-around items-center  ">
    //           <div className="border-r border-[#929292]">
    //             <h3 className="text-xl font-bold ">Index</h3>
    //           </div>
    //           <div className="border-r border-[#929292]">
    //             <h3 className="text-xl font-bold ">Order Id</h3>
    //           </div>
    //           <div>
    //             <h3 className="text-xl font-bold">Total Amount</h3>
    //           </div>
    //           <div>
    //             <h3 className="text-xl font-bold">
    //               Total Amount After Discount
    //             </h3>
    //           </div>
    //           <div>
    //             <h3 className="text-xl font-bold">Status</h3>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <div className="">
    //         <div className="flex justify-around items-center mt-5">
    //           <div>
    //             <p>Index</p>
    //           </div>
    //           <div>
    //             <p>Order Id</p>
    //           </div>
    //           <div>
    //             <p>Total Amount</p>
    //           </div>
    //           <div>
    //             <p>Total Amount After Discount</p>
    //           </div>
    //           <div>
    //             <p>Status</p>
    //           </div>
    //         </div>
    //       </div> */}
    //       <div className="">
    //         {orderState &&
    //           orderState?.map((item, index) => {
    //             return (
    //               <div
    //                 className="flex justify-around items-center mt-5 bg-gray-400 py-4"
    //                 key={index}
    //               >
    //                 <div>
    //                   <p>{index + 1}</p>
    //                 </div>
    //                 <div>
    //                   <p>{(item?._id).slice(0, 5)}</p>
    //                 </div>
    //                 <div>
    //                   <p>{item?.totalPrice}</p>
    //                 </div>
    //                 <div>
    //                   <p>{item?.totalPriceAfterDiscount}</p>
    //                 </div>
    //                 <div>
    //                   <p>{item?.orderStatus}</p>
    //                 </div>
    //               </div>
    //             );
    //           })}
    //       </div>
    //     </div>
    //   </section>
    // </>

    // <>
    //   <section className="bg-gray-50">
    //     <div className="py-10 max-w-full mx-auto">
    //       <div className="border border-[#929292]">
    //         <div className="grid grid-cols-9 gap-2 text-center items-center">
    //           <div className="border-r border-[#929292] lg:py-4 sm:py-0">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Index
    //             </h3>
    //           </div>
    //           <div className="border-r border-[#929292] lg:py-4 sm:py-0">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Id
    //             </h3>
    //           </div>
    //           <div className="border-r border-[#929292] lg:py-4 sm:py-0">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Product
    //             </h3>
    //           </div>
    //           <div className="border-r border-[#929292] lg:py-4 sm:py-0">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Quantity
    //             </h3>
    //           </div>
    //           <div className="border-r border-[#929292] lg:py-4 sm:py-0">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Price
    //             </h3>
    //           </div>
    //           <div className="border-r border-[#929292] lg:py-4 sm:py-0">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Color
    //             </h3>
    //           </div>
    //           <div className="border-r border-[#929292] lg:py-4 sm:py-0">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Amount
    //             </h3>
    //           </div>
    //           <div className="border-r border-[#929292]">
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               After Discount
    //             </h3>
    //           </div>
    //           <div>
    //             <h3 className="text-xs sm:text-base lg:text-xl font-bold">
    //               Status
    //             </h3>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         {orderState &&
    //           orderState.map((item, index) => (
    //             <>
    //               <div
    //                 className="grid grid-cols-9 gap-2 text-center mt-5 bg-gray-400 py-4"
    //                 key={index}
    //               >
    //                 <div>
    //                   <p className="text-sm sm:text-base tracking-wide">
    //                     {index < 9 ? `0${index + 1}` : index + 1}
    //                   </p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">
    //                     {item?._id.slice(0, 5)}
    //                   </p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">{item?.product}</p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">{item?.quantity}</p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">{item?.price}</p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">{item?.color}</p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">{item?.totalPrice}</p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">
    //                     {item?.totalPriceAfterDiscount}
    //                   </p>
    //                 </div>
    //                 <div>
    //                   <p className="text-sm sm:text-base">
    //                     {item?.orderStatus}
    //                   </p>
    //                 </div>
    //               </div>
    //             </>
    //           ))}
    //       </div>
    //     </div>
    //   </section>
    // </>

    <>
      <section className="bg-gray-50">
        <div className="py-10 max-w-full mx-auto px-2 sm:px-4">
          <div className="border border-[#929292]">
            <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center items-center">
              <div className="border-r border-[#929292] py-2">
                <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                  Index
                </h3>
              </div>
              <div className="border-r border-[#929292] py-2">
                <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                  Id
                </h3>
              </div>
              <div className="border-r border-[#929292] py-2">
                <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                  Amount
                </h3>
              </div>
              <div className="border-r border-[#929292] py-2">
                <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                  After Discount
                </h3>
              </div>
              <div className="py-2">
                <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                  Status
                </h3>
              </div>
            </div>
          </div>
          <div>
            {orderState &&
              orderState?.map((item, index) => (
                <div>
                  <div
                    className="grid grid-cols-5 gap-1 sm:gap-2 text-center mt-5 py-2 sm:py-4 bg-[#ff8717]"
                    key={index}
                  >
                    <div>
                      <p className="text-xs sm:text-sm text-white">
                        {index < 9 ? `0${index + 1}` : index + 1}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-white">
                        {/* {item?._id.slice(0, 5)} */}
                        {item?._id}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-white">
                        {item?.totalPrice}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-white">
                        {item?.totalPriceAfterDiscount}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-white">
                        {item?.orderStatus}
                      </p>
                    </div>
                  </div>
                  {/* product */}
                  <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center bg-gray-300 py-2 sm:py-4">
                    <div className="border-r border-[#929292] py-2">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                        Product
                      </h3>
                    </div>
                    <div className="border-r border-[#929292] py-2">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                        Quantity
                      </h3>
                    </div>
                    <div className="border-r border-[#929292] py-2">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                        Price
                      </h3>
                    </div>
                    <div className="">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold">
                        Color
                      </h3>
                    </div>
                  </div>
                  {item?.orderItems?.map((i, index) => {
                    return (
                      <>
                        <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center bg-gray-300 pt-0 pb-2 sm:pt-0 sm:pb-6">
                          <div>
                            <p className="text-xs sm:text-sm">
                              {i?.product?.title || "N/A"}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm">
                              {i?.quantity ?? "N/A"}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm">
                              {i?.price ?? "N/A"}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm">
                              <ul className="flex justify-center items-center">
                                <li
                                  style={{
                                    backgroundColor: i?.color?.title,
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "100%",
                                    textAlign: "center !important",
                                  }}
                                ></li>
                              </ul>
                            </p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
