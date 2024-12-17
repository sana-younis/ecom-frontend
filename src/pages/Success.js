import React from "react";

const Success = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center pt-10 pb-32 mt-10 bg-gray-100">
      <img
        src="/images/payment-check-02.png"
        alt="Payment Check"
        width="350px"
      />
      <h1 className="text-xl -mt-10 font-medium text-[#000000] text-center tracking-wider">
        Thank You for your Purchase <br /> Happy Shopping 🎉
      </h1>
    </div>
  );
};

export default Success;
