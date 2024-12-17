import React from "react";

const Cancel = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center pt-20 pb-32 mt-10 bg-gray-100">
      <img
        src="/images/payment_fail_icon.png"
        alt="Payment Fail"
        width="250px"
      />
      <h1 className="text-xl mt-6 font-medium text-[#000000] text-center tracking-wider">
        Your Payment was Cancelled. <br /> Please Try Again!!
      </h1>
    </div>
  );
};

export default Cancel;
