import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const ProductDeal = () => {
  const [mainProductImage, setMainProductImage] = useState(
    "/images/sony-camera.jpg"
  );
  // Example mini images for the middle and right sections
  const middleMiniImages = [
    "/images/lense-01.jpg",
    "/images/lense-02.jpg",
    "/images/lense-03.jpg",
  ];
  // Handle image click for middle section
  const handleMiddleImageClick = (image) => {
    setMainProductImage(image);
  };

  return (
    <>
      {/* Middle Section (60%) */}
      <div className="lg:col-span-3 p-4 border border-gray-300 ">
        <div className="flex justify-between items-center gap-5 ">
          <div>
            {/* rating */}
            <div className="flex items-center">
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
            {/* Product Details */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Sony Camera</h3>
            </div>
            {/* Price and Rating */}
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-red-500">$50.00</div>
              <div className="text-gray-500 line-through">$60.00</div>
            </div>
            <div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Main Product Image */}
          <img
            id="mainProductImage"
            src={mainProductImage}
            alt="Main Product"
            className="w-[320px] h-64 object-left mb-4"
          />
        </div>

        {/* Mini Images Section */}
        <div className="flex space-x-2 mb-4">
          {middleMiniImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Mini Product"
              className="w-24 h-24 object-cover cursor-pointer hover:opacity-75"
              onClick={() => handleMiddleImageClick(image)} // Update main image on click
            />
          ))}
        </div>

        {/* Stock Information */}
        {/* <div className="w-full max-w-md mx-auto">
            <div className="flex justify-between mb-4">
              <p className="text-green-600 font-semibold">
                In Stock: {availableStock}
              </p>
              <p className="text-red-600 font-semibold">Sold: {soldOut}</p>
            </div>

            <div className="relative w-full h-6 bg-gray-200 rounded-full">
              <div
                className="absolute h-full bg-green-500 rounded-full transition-all duration-300"
                style={{ width: `${stockPercentage}%` }}
              ></div>
              <div
                className="absolute h-full bg-red-500 rounded-full transition-all duration-300"
                style={{ width: `${100 - stockPercentage}%`, right: 0 }}
              ></div>
            </div>

            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-600">
                {availableStock} items available
              </span>
              <span className="text-xs text-gray-600">
                {soldOut} items sold
              </span>
            </div>
          </div> */}
      </div>
    </>
  );
};

export default ProductDeal;
