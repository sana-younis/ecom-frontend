/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import SpecialProducts from "../components/SpecialProducts";
import ProductCarousel from "../components/ProductCarousel";
import FilterTabs from "../components/FilterTabs";
import Products from "../components/Products";
import ProductDeal from "../components/Product Deal";
import ReactStars from "react-rating-stars-component";
import { FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  getAllProducts,
} from "../features/products/productSlice";
// import FeaturedProducts from "../components/FeaturedProducts";
// import PopularProducts from "../components/PopularProducts";
import ProductCard from "../components/ProductCard";
import PopularProducts from "../components/PopularProducts";

const latestItems = [
  {
    id: 1,
    name: "Panasonic Cordless Phone",
    price: 30.52,
    originalPrice: 28.52,
    image: "/images/img_63.png",
  },
  {
    id: 2,
    name: "Rokinon Xeen CF 16mm Wide Angle",
    price: 30.52,
    originalPrice: 28.52,
    image: "/images/lense-02.jpg",
  },
  {
    id: 3,
    name: "SAMSUNG Galaxy Tab A7 Lite'' 32GB",
    price: 30.52,
    originalPrice: 28.52,
    image: "/images/Samsung-Galaxy-Tab-A7-Lite-Model-T220-Silver-1.jpg",
  },
  {
    id: 4,
    name: "Inkjet Printers - PIXMA E3470 - Canon",
    price: 30.52,
    originalPrice: 28.52,
    image: "/images/canon-printer.jpg",
  },
  {
    id: 5,
    name: "Infinix Smart Watch 1 Bluetooth Calling (Black)",
    price: 30.52,
    originalPrice: 28.52,
    image: "/images/infinix-Smart-Watch-1-Black-5.jpg",
  },
];

const Home = () => {
  const dispatch = useDispatch();
  // product details
  const [rightProductImage, setRightProductImage] =
    useState("/images/tablet.jpg");

  const rightMiniImages = [
    "/images/tablet-03.jpg",
    "/images/tablet-01.jpg",
    "/images/tablet-02.jpg",
  ];

  // Handle image click for right section
  const handleRightImageClick = (image) => {
    setRightProductImage(image);
  };

  const availableStock = 15;
  const soldOut = 8;

  // Calculate total stock
  const totalStock = availableStock + soldOut;
  // Calculate the percentage of available stock
  const stockPercentage = totalStock ? (availableStock / totalStock) * 100 : 0;

  const productState = useSelector((state) => state?.product.product);
  console.log(productState);
  const navigate = useNavigate();

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {/* main  */}
      <section className="py-5 mx-3">
        <div className="flex-1 flex justify-between items-center gap-6">
          <div className="flex flex-1 items-center justify-start w-8/12 h-full bg-[#F1F0F5] px-10 py-[98px]">
            <div className="">
              <h4 className="text-[#ff8717] text-sm font-semibold mb-2">
                Wide Screen 4K....
              </h4>
              <h1 className="text-4xl text-black font-medium mb-2 uppercase leading-normal">
                Digital Slr Camera High Defination
              </h1>
              <h6 className="text-[#929292] text-base font-medium mb-5">
                Sumptuous, filling, and temptingly
              </h6>
              <h3 className="text-2xl font-medium text-[#ff8717] ">
                Up To <span className="font-extrabold text-4xl ">70% </span> $
                180.99
              </h3>
              <div className="mt-7">
                <button className="mb-4 flex items-center bg-black text-white w-15 h-15 px-8 py-3 rounded-3xl text-base font-medium">
                  Shop Now <BsArrowRight className="ml-2" />
                </button>
              </div>
            </div>
            <div className="">
              <img
                src="/images/watch-img.png"
                alt="watch"
                className="max-w-md h-auto"
              />
            </div>
          </div>
          <div className="w-3/12 bg-[#F1F0F5] px-6 pt-10">
            <div>
              <button className="bg-[#ff8717] text-sm font-semibold mb-4 py-1 px-3 text-white">
                New
              </button>
              <h1 className="text-2xl text-black font-semibold mb-2 uppercase leading-7">
                Cloud Cam, Security Camera
              </h1>

              <h3 className="text-lg font-medium text-[#ff8717] ">
                Up To <span className="font-extrabold text-3xl ">70% </span>
              </h3>
            </div>
            <div className="mt-7">
              <button className="mb-4 flex items-center border border-[#ff8718] text-[#ff8718] w-15 h-15 px-8 py-3 rounded-3xl text-base font-medium">
                Shop Now <BsArrowRight className="ml-2" />
              </button>
            </div>
            <div>
              <img src="/images/mobile-img.png" alt="mobile" />
            </div>
          </div>
        </div>
      </section>

      {/* mini product */}
      <section className="py-5 mx-3">
        <div className="">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-stretch gap-4">
            <div className="flex flex-col-2 gap-4 w-full">
              {/* 1st Item */}
              <div className="flex flex-col md:flex-row justify-start items-center gap-4 bg-gray-100 px-4 py-7 w-full h-full md:w-auto flex-grow">
                <div>
                  <img
                    src="/images/img_59.png"
                    alt="laptop"
                    className="w-[150px] h-[130px] lg:w-[200px] object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-black text-lg font-normal mb-2 leading-6 uppercase">
                    Break Disc deals on this
                  </h4>
                  <h5 className="text-[#ff8717] text-base font-medium mb-2">
                    Up To{" "}
                    <span className="text-3xl font-semibold">
                      70<sup>%</sup>
                    </span>
                  </h5>
                  <Link className="flex justify-start gap-2 items-center text-black text-sm pt-1">
                    Shop Now
                    <span className="bg-[#ff8718] text-xs text-white rounded-lg p-0.5">
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col-2 gap-4 w-full">
              {/* 1st Item */}
              <div className="flex flex-col md:flex-row justify-start items-center gap-4 bg-gray-100 px-4 py-7 w-full h-full md:w-auto flex-grow">
                <div>
                  <img
                    src="/images/img_59.png"
                    alt="laptop"
                    className="w-[150px] h-[130px] lg:w-[200px] object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-black text-lg font-normal mb-2 leading-6 uppercase">
                    Break Disc deals on this
                  </h4>
                  <h5 className="text-[#ff8717] text-base font-medium mb-2">
                    Up To{" "}
                    <span className="text-3xl font-semibold">
                      70<sup>%</sup>
                    </span>
                  </h5>
                  <Link className="flex justify-start gap-2 items-center text-black text-sm pt-1">
                    Shop Now
                    <span className="bg-[#ff8718] text-xs text-white rounded-lg p-0.5">
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col-2 gap-4 w-full">
              {/* 1st Item */}
              <div className="flex flex-col md:flex-row justify-start items-center gap-4 bg-gray-100 px-4 py-7 w-full h-full md:w-auto flex-grow">
                <div>
                  <img
                    src="/images/img_59.png"
                    alt="laptop"
                    className="w-[150px] h-[130px] lg:w-[200px] object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-black text-lg font-normal mb-2 leading-6 uppercase">
                    Break Disc deals on this
                  </h4>
                  <h5 className="text-[#ff8717] text-base font-medium mb-2">
                    Up To{" "}
                    <span className="text-3xl font-semibold">
                      70<sup>%</sup>
                    </span>
                  </h5>
                  <Link className="flex justify-start gap-2 items-center text-black text-sm pt-1">
                    Shop Now
                    <span className="bg-[#ff8718] text-xs text-white rounded-lg p-0.5">
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col-2 gap-4 w-full">
              {/* 1st Item */}
              <div className="flex flex-col md:flex-row justify-start items-center gap-4 bg-gray-100 px-4 py-7 w-full h-full md:w-auto flex-grow">
                <div>
                  <img
                    src="/images/img_59.png"
                    alt="laptop"
                    className="w-[150px] h-[130px] lg:w-[200px] object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-black text-lg font-normal mb-2 leading-6 uppercase">
                    Break Disc deals on this
                  </h4>
                  <h5 className="text-[#ff8717] text-base font-medium mb-2">
                    Up To{" "}
                    <span className="text-3xl font-semibold">
                      70<sup>%</sup>
                    </span>
                  </h5>
                  <Link className="flex justify-start gap-2 items-center text-black text-sm pt-1">
                    Shop Now
                    <span className="bg-[#ff8718] text-xs text-white rounded-lg p-0.5">
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* products */}
      <section className="flex flex-col gap-5 lg:flex-row w-full h-auto p-5">
        {/* Left side image (20% on large, 100% on mobile) */}
        <div className="lg:w-1/5 w-full h-[435px] flex-col justify-center items-center bg-gray-100 mb-5 lg:mb-0 px-4 pt-10 lg:text-left text-center">
          <div>
            <button className="bg-[#ff8717] text-sm font-semibold mb-4 py-1 px-3 text-white">
              New
            </button>
            <h1 className="text-xl lg:text-xl text-black font-semibold mb-2 uppercase leading-7">
              Cloud Cam, Security Camera
            </h1>
            <h3 className="text-lg font-medium text-[#ff8717]">
              Up To{" "}
              <span className="font-extrabold text-2xl lg:text-3xl">70%</span>
            </h3>
            <button className="flex items-center border border-[#ff8718] text-[#ff8718] px-6 lg:px-8 py-2 lg:py-3 rounded-3xl text-base font-medium mt-5 mx-auto lg:mx-0">
              Shop Now <BsArrowRight className="ml-2" />
            </button>
          </div>
          <div className="mt-5">
            <img
              src="/images/img_63.png"
              alt="Promo"
              className="object-contain w-full h-40 lg:h-full"
            />
          </div>
        </div>

        {/* Right side best seller products (80% on large, 100% on mobile) */}
        <div className="lg:w-4/5 w-full p-2 relative">
          <h2 className="text-2xl font-bold mb-5">Best Sellers</h2>
          {/* Filter Tab */}
          <FilterTabs />

          {/* Product carousel */}

          <ProductCarousel />
        </div>
      </section>

      {/* used section */}
      <section className="flex flex-col lg:flex-row w-full p-5 gap-5">
        {/* Left side: Latest Items Slider (20% width on large screens) */}
        <div className="lg:w-1/5 w-full mb-5 lg:mb-0 p-5 border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Latest Items</h2>
            {/* <div> {Left and right swipe button}
              <button className="text-gray-500 hover:text-gray-700 mr-2">
                &#8592;
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                &#8594;
              </button>
            </div> */}
          </div>

          {/* Slider with latest items */}
          <div className="">
            {latestItems.map((item) => (
              <div className="flex">
                <div key={item.id} className="p-3 flex w-full gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <div className="text-center mt-3">
                    <h3 className="text-[10px] font-semibold text-gray-700">
                      {item.name}
                    </h3>
                    <div className="mt-2 flex justify-center gap-3">
                      <p className="text-red-500 font-semibold text-xs">
                        ${item.price}
                      </p>
                      <p className="line-through text-gray-500 text-xs ">
                        ${item.originalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Best Seller Products (80% width on large screens) */}
        <div className="lg:w-4/5 w-full p-2 relative ">
          <h2 className="text-2xl font-bold mb-5">Used Products</h2>

          {/* Filter tabs */}
          <FilterTabs />

          {/* Product carosel withour move*/}
          <div>
            <div>
              <Products />
            </div>

            <div className="flex gap-3 mt-7">
              <div className="bg-black flex w-[100%]">
                <div className="p-7">
                  <h5 className="text-sm lg:text-xs text-[#ff8717] font-semibold uppercase leading-7 mt-2">
                    Get 30% off
                  </h5>
                  <h5 className="text-sm lg:text-md text-white font-semibold mt-2">
                    Buy One. Get Free delivery
                  </h5>
                  <h4 className="text-xs font-medium text-white mt-2">
                    Starting{" "}
                    <span className="text-[#ff8717] text-xs font-medium">
                      560.99
                    </span>
                  </h4>
                  <h6 className="text-sm lg:text-xs text-white font-normal mt-2">
                    Shop Now
                  </h6>
                </div>
                <div>
                  <img
                    src="/images/img_79.png"
                    alt="watch"
                    className="w-auto h-full"
                  />
                </div>
              </div>
              <div className="bg-black flex w-[100%]">
                <div className="p-7">
                  <h5 className="text-sm lg:text-xs text-[#ff8717] font-semibold uppercase leading-7 mt-2">
                    Get 30% off
                  </h5>
                  <h5 className="text-sm lg:text-md text-white font-semibold mt-2">
                    Buy One. Get Free delivery
                  </h5>
                  <h4 className="text-xs font-medium text-white mt-2">
                    Starting{" "}
                    <span className="text-[#ff8717] text-xs font-medium">
                      560.99
                    </span>
                  </h4>
                  <h6 className="text-sm lg:text-xs text-white font-normal mt-2">
                    Shop Now
                  </h6>
                </div>
                <div>
                  <img
                    src="/images/img_80.png"
                    alt="radio"
                    className="w-[200px] object-contain h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product details */}

      <section className="grid grid-cols-1 lg:grid-cols-5 gap-4 p-5">
        {/* Left Section (20%) */}
        <div className="lg:col-span-1 p-4 border border-gray-300">
          <h2 className="text-xl font-bold mb-4">Information</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, adipiscing elit.</p>
          <img
            src="/images/canon-camera (4).jpg"
            alt="Info"
            className="w-full h-[400px] object-cover
            "
          />
        </div>
        {/* Middle Section */}
        <ProductDeal />

        {/* Right Section (20%) */}
        <div className="lg:col-span-1 p-4 border border-gray-300 ">
          {/* Product Image on Top */}
          <img
            src={rightProductImage}
            alt="Product"
            className="w-full h-48 object-cover mb-4"
          />

          {/* Mini Images */}
          <div className="flex space-x-2 mb-4">
            {rightMiniImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Mini Product"
                className="w-16 h-16 object-cover cursor-pointer"
                onClick={() => handleRightImageClick(image)} // Update right section image on click
              />
            ))}
          </div>

          {/* Stock Info */}
          <div className="w-full max-w-md mx-auto mt-7">
            <div className="flex justify-between mb-1">
              <p className="text-xs text-gray-600">
                Available:{" "}
                <span className="text-black font-medium">{availableStock}</span>
              </p>
              <p className="text-xs text-gray-600">
                Sold: <span className="text-black font-medium">{soldOut}</span>
              </p>
            </div>

            <div className="relative w-full h-6 bg-gray-200 rounded-full">
              <div
                className="absolute h-full bg-[#ff8717] rounded-md rounded-r-none transition-all duration-300"
                style={{ width: `${stockPercentage}%` }}
              ></div>
              <div
                className="absolute h-full bg-gray-100 rounded-md rounded-l-none transition-all duration-300"
                style={{ width: `${100 - stockPercentage}%`, right: 0 }}
              ></div>
            </div>

            {/* <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-600">
                {availableStock} items available
              </span>
              <span className="text-xs text-gray-600">
                {soldOut} items sold
              </span>
            </div> */}
          </div>

          {/* Heading, Rating, and Price */}
          <div className="mt-5">
            <h3 className="text-lg font-bold mb-2">Apple Tablet</h3>
            <div className="flex items-center mt-2">
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
            <div className="flex items-center justify-start gap-3 mt-2">
              <span className="text-base font-bold text-red-500">$45.00</span>
              <span className="text-gray-500 text-base line-through">
                $55.00
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* products carousal */}
      <section className="flex flex-col gap-5 lg:flex-row w-full h-auto p-5">
        <div className="w-full p-2 relative">
          <h2 className="text-2xl font-bold mb-5">Best Sellers</h2>
          {/* Product carousel */}
          <div className="">
            <div className="flex justify-between items-center border-b-0 pt-4 pl-6 pb-2 pr-6 border-[#ff8718] border">
              <div className="">
                <h3 className="text-lg font-medium">Tructor Part</h3>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black">
                  <span className="text-[#ff8718] text-lg font-medium">
                    Baby Items{" "}
                  </span>
                  / Gift Part
                </h3>
              </div>
            </div>
            <ProductCarousel />
          </div>
        </div>
      </section>

      {/* banner section */}
      <section className="py-10">
        <div className="bg-black mx-3 sm:px-5 md:px-10 lg:px-16 pt-16 md:pt-20 pb-10 flex flex-col lg:flex-row relative">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 mb-6 lg:mb-0 lg:text-left text-center">
            <button className="bg-[#ff8717] text-sm font-semibold mb-4 py-1 px-3 text-white">
              Expert Mechanic
            </button>
            <h1 className="text-xl md:text-xl lg:text-5xl text-white font-bold tracking-normal mb-2 capitalize lg:leading-tight ">
              Repair Car Perfectly From Expertist
            </h1>
            <h6 className="text-[#929292] text-sm md:text-base font-medium mb-5">
              Sumptuous, filling, and temptingly
            </h6>
            <div className="mt-5 ">
              <button className="flex items-center lg:mx-0 mx-auto text-white text-base md:text-lg font-medium uppercase">
                Make Enquiry <BsArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Center Image/Offer */}
          <div className="hidden lg:block">
            <img
              src="/images/offer_bg.png"
              alt="bg"
              className="absolute top-10 left-[39%] w-25 z-0"
            />
            <p className="relative z-10 text-white text-[22px] font-bold -top-[18px] -left-[49%] leading-none text-center">
              30% <br /> <span className="text-base font-normal">OFF</span>{" "}
            </p>
          </div>

          {/* Right Images */}
          <div className="flex w-full lg:w-4/12 justify-center lg:justify-start -space-x-4 sm:-space-x-6 lg:-space-x-12 mt-5 lg:mt-0">
            <img
              src="/images/img_108.png"
              alt="laptop"
              className="w-[120px] sm:w-[160px] lg:w-auto"
            />
            <img
              src="/images/offer_text.png"
              alt="offer"
              className="w-[120px] sm:w-[160px] lg:w-auto"
            />
          </div>
        </div>
      </section>

      {/* categories section */}
      <section className="flex w-full py-8 px-4">
        {/* Left Section - 20% */}
        <div className="w-1/5 flex flex-col justify-center items-center text-center bg-laptopImage bg-black h-[500px] bg-cover">
          <div className="p-7 pt-0">
            <h5 className="text-sm lg:text-xs text-[#ff8717] font-semibold uppercase leading-7 mb-3">
              Get Save 30% OFF
            </h5>
            <h5 className="text-sm lg:text-lg text-white font-semibold mt-5">
              Cloud Cam, Security Camera
            </h5>
            <h4 className="text-[#ff8717] text-2xl font-medium mt-5">
              $ 18560.99
            </h4>
            <button className="flex items-center mx-auto bg-[#ff8718] text-white px-6 py-3 mt-6 rounded-3xl text-sm font-medium">
              Shop Now <BsArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Middle Section - 60% */}
        <div className="w-[60%] pl-4 ">
          <div className="grid grid-cols-2">
            {/* Featured  Products*/}
            <div className="">
              <h2 className="text-xl font-semibold mb-4">
                Featured Categories
              </h2>
              {productState &&
                productState?.map((item, index) => {
                  if (item?.tags === "featured") {
                    return (
                      // <FeaturedProducts
                      //   key={index}
                      //   data={productState ? productState : []}
                      // />
                      <div className="max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out my-4 mr-5 pb-4">
                        <div className="bg-white rounded relative" key={index}>
                          <div className="flex justify-between items-center gap-2">
                            <div className="wishlist-icon">
                              <Link to="/wishlist">
                                <button className="border-0 bg-transparent">
                                  <img
                                    onClick={() => addToWish(item?._id)}
                                    src="/images/wish.svg"
                                    alt="Wishlist"
                                    className="absolute top-3 right-3"
                                  />
                                </button>
                              </Link>
                            </div>
                            <div>
                              <img
                                src={item?.images[0].url}
                                alt="Product"
                                className="w-24 h-24  object-contain"
                                width={160}
                              />
                            </div>
                            <div>
                              <h6 className="text-xs font-medium mt-3 text-[#ff8717] tracking-wide">
                                {item?.brand}
                              </h6>
                              <h5 className="text-sm font-bold tracking-wider mt-2">
                                {item?.title}
                              </h5>
                              <ReactStars
                                count={5}
                                size={17}
                                value={item?.totalRating.toString()}
                                edit={false}
                                activeColor="#ffd700"
                              />
                              <p className="text-gray-900 font-bold text-sm">
                                $ {item?.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>

            {/* popular */}
            <div className="w-full">
              <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>
              {productState &&
                productState?.map((item, index) => {
                  if (item?.tags === "popular") {
                    return (
                      //   <PopularProducts
                      //     key={index}
                      //     data={productState ? productState : []}
                      //   />

                      <div className="max-w-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out my-4 mr-5 pb-4">
                        <div className="bg-white rounded relative" key={index}>
                          <div className="flex justify-between items-center gap-2">
                            <div className="wishlist-icon">
                              <Link to="/wishlist">
                                <button className="border-0 bg-transparent">
                                  <img
                                    onClick={() => addToWish(item?._id)}
                                    src="/images/wish.svg"
                                    alt="Wishlist"
                                    className="absolute top-3 right-3"
                                  />
                                </button>
                              </Link>
                            </div>
                            <div>
                              <img
                                src={
                                  item?.images[0]?.url ||
                                  "/images/samsung-a20s.jpg"
                                }
                                alt="Product"
                                className="w-24 h-24  object-contain"
                                width={160}
                              />
                            </div>
                            <div>
                              <h6 className="text-xs font-medium mt-3 text-[#ff8717] tracking-wide">
                                {item?.brand}
                              </h6>
                              <h5 className="text-sm font-bold tracking-wider mt-2">
                                {item?.title}
                              </h5>
                              <ReactStars
                                count={5}
                                size={17}
                                value={item?.totalRating.toString()}
                                edit={false}
                                activeColor="#ffd700"
                              />
                              <p className="text-gray-900 font-bold text-sm">
                                $ {item?.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
            {/* Special Products */}
            {/* <div>
              <h2 className="text-xl font-semibold mb-4">
                Hot Selling Categories
              </h2>
              {productState &&
                productState?.map((item, index) => {
                  if (item.tags === "special") {
                    return (
                      <SpecialProducts
                        key={index}
                        id={item?._id}
                        title={item?.title}
                        brand={item?.brand}
                        totalRating={item?.totalRating.toString()}
                        price={item?.price}
                        sold={item?.sold}
                        quantity={item?.quantity}
                      />
                    );
                  }
                })}
            </div> */}
          </div>
        </div>
        {/* Right Section - 20% */}
        <div className="w-1/5 flex flex-col justify-center items-center text-center bg-carImage h-[500px] bg-cover">
          <div className="p-7 pt-0">
            <h5 className="text-sm lg:text-xs text-[#ff8717] font-semibold uppercase leading-7 mb-3">
              Get Save 30% OFF
            </h5>
            <h5 className="text-sm lg:text-lg text-white font-semibold mt-5">
              Cloud Cam, Security Camera
            </h5>
            <h4 className="text-[#ff8717] text-2xl font-medium mt-5">
              $ 18560.99
            </h4>
            <button className="flex items-center mx-auto bg-[#ff8718] text-white px-6 py-3 mt-6 rounded-3xl text-sm font-medium">
              Shop Now <BsArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* logo section */}
      <section className="py-10 ">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <Marquee className="">
            <div className="mx-4 w-25">
              <img src="/images/img_01.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_02.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_03.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_04.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_05.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_06.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_04.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_01.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_03.png" alt="brand logo" />
            </div>
            <div className="mx-4 w-25">
              <img src="/images/img_05.png" alt="brand logo" />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Home;
