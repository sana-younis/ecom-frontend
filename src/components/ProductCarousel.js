import React, { useState } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    category: "Electronics",
    price: 100,
    image: "/images/img_64.png",
  },
  {
    id: 2,
    name: "Product 2",
    category: "Fashion",
    price: 80,
    image: "/images/img_65.png",
  },
  {
    id: 3,
    name: "Product 3",
    category: "Home",
    price: 60,
    image: "/images/img_66.png",
  },
  {
    id: 4,
    name: "Product 4",
    category: "Electronics",
    price: 90,
    image: "/images/img_61.png",
  },
  {
    id: 5,
    name: "Product 5",
    category: "Fashion",
    price: 70,
    image: "/images/img_62.png",
  },
  {
    id: 6,
    name: "Product 6",
    category: "Home",
    price: 60,
    image: "/images/img_68.png",
  },
  // More products...
];

const ProductCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-[-17px] z-10 bg-white text-[#ff8717] p-2 rounded-full cursor-pointer shadow"
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-[-17px] z-10 bg-white text-[#ff8717] p-2 rounded-full cursor-pointer shadow"
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );

  const productSettings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="border border-[#ff8717]">
      <Slider {...productSettings} className="">
        {filteredProducts.map((product) => (
          <div key={product.id} className="p-3 border-r">
            <div className=" rounded-lg p-4 flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-black">
                {product.name}
              </h3>
              <p className="text-[#404D58]">{product.category}</p>
              <p className="text-[#ff8718] font-bold">${product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
