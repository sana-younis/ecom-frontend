/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { BiCalendar, BiCheckCircle, BiCloud, BiSearch } from "react-icons/bi";
import {
  BsCart,
  BsEnvelopeFill,
  BsInstagram,
  BsPerson,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FiHeart, FiShare } from "react-icons/fi";
import { MdMenu, MdClose } from "react-icons/md";
import { PiCity } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(null);

  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }
  }, [cartState]);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {/* 1st header */}
      <header className="bg-white py-3 border-[#eae4e4] border-b">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex justify-between items-center px-4 py-1 flex-wrap">
            <div className="w-full md:w-auto flex px-4 pb-2 text-center">
              <p className="text-xs md:text-sm font-thin text-[#424D58] pr-2">
                <span className="text-[#ff8717] font-light">Call Us</span> free
                24/7 : (+92) 555-555-5555 |{" "}
              </p>
              <p className="text-xs md:text-sm text-[#424D58] flex justify-start items-center">
                {" "}
                <span className="pr-2 text-[#ff8717]">
                  <BsEnvelopeFill />
                </span>{" "}
                info@example.com
              </p>
            </div>
            <div className="w-full md:w-auto flex text-center">
              <div className="flex gap-2 justify-between items-center">
                <span className="text-[#ff8718]">
                  <BiCloud />
                </span>
                <p className="text-xs md:text-sm font-thin">
                  30 degree <span className="pl-2 pr-2 text-[#f6f6f6]">|</span>
                </p>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <span className="text-[#ff8718]">
                  <PiCity />
                </span>
                <p className="text-xs md:text-sm font-thin">
                  {" "}
                  Lahore <span className="pl-2 pr-2 text-[#eae4e4]">|</span>
                </p>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <span className="text-[#ff8718]">
                  <FiHeart />
                </span>
                <p className="text-xs md:text-sm font-thin">
                  <Link to="/wishlist"> My Wishlist</Link>
                  <span className="pl-2 pr-2 text-[#f6f6f6]">|</span>
                </p>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <span className="text-[#ff8718]">
                  <BiCheckCircle />
                </span>
                <p className="text-xs md:text-sm font-thin">
                  CheckOut <span className="pl-2 pr-2 text-[#f6f6f6]">|</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* 2nd header */}
      <header className="py-5 bg-white ">
        <div className="max-w-screen-6xl mx-auto">
          <div className="px-4 flex justify-around items-center">
            <div className="w-full md:w-auto">
              <embed src="/images/logo.svg" />
            </div>
            <div className="text-xs md:text-sm font-normal text-[#ff8717] hidden lg:block">
              <div className=" flex justify-center items-center gap-2 ">
                <BiCalendar />
                {new Date()
                  .toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                  .replace(",", "")}
              </div>
            </div>
            <div className="w-full md:w-auto">
              <span className="text-red-250">
                <img
                  src="/images/ads-img.jpg"
                  alt="ads image"
                  className="max-w-full h-auto"
                />
              </span>
            </div>
            <div className="hidden lg:block">
              <select className="border rounded-3xl w-full h-10 px-3 outline-none ">
                <option>English</option>
              </select>
            </div>
            <div className="hidden md:block">
              <span className="flex flex-col-4 gap-5 text-base text-[#424D58]">
                <FaFacebook />
                <BsTwitter />
                <BsInstagram />
                <BsYoutube />
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* 3rd header */}
      {/* <header className="py-3 bg-white">
        <div className="max-w-screen-6xl mx-auto">
          <div className="px-4 flex justify-between items-center">
            <div className="flex justify-start items-center">
              <div className="w-full md:w-auto flex justify-center items-center bg-[#ff8717] py-1 px-5 mr-10 rounded-sm ">
                <span className="text-white text-2xl font-semibold pl-2">
                  <MdMenu />
                </span>{" "}
                <select className="bg-[#ff8717] p-3 text-white text-base font-semibold outline-none">
                  <option className="">Browse Category</option>
                </select>
              </div>
              <div className="w-full md:w-auto">
                <div className="flex gap-16 flex-col-5 text-[#40465C] text-[17px] font-custom">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/shop">Shop:</NavLink>
                  <NavLink to="/pages">Pages:</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-8">
              <div className="flex gap-8 ">
                <span className="text-[#424D58] text-2xl font-medium">
                  <BsPerson />
                </span>
                <span className="text-[#424D58] text-2xl font-medium ">
                  <FiHeart />
                </span>
                <span className="text-[#424D58] text-2xl font-medium">
                  <FiShare />
                </span>
              </div>
              <div>
                <button className="bg-[#ff8717] p-3 rounded-sm text-white text-base font-medium">
                  Login / Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <header className="py-3 bg-white ">
        <div className="max-w-screen-6xl mx-auto">
          <div className="px-4 flex justify-start items-center gap-6 md:flex-nowrap">
            {/* First Div: Dropdown (Hidden on smaller screens) */}
            <div className="hidden md:flex justify-between items-center">
              <div className="w-full md:w-[250px] flex justify-center items-center bg-[#ff8717] py-1 px-5 rounded-sm">
                <span className="text-white text-2xl font-semibold pl-2 pr-1">
                  <MdMenu />
                </span>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md shadow-sm px-2 py-2 bg-[#ff8718] text-base text-white focus:outline-none font-semibold"
                    id="dropdownMenuButton1"
                    onClick={toggleDropdown}
                  >
                    Browse Category
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06-.02l3.72 3.74 3.73-3.75a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <ul
                      className="absolute -right-2 mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link
                          to="/store"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Store
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/my-orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/wishlist"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          WishList
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Second Div: Navigation Links */}
            <div className="w-full md:w-auto hidden md:flex lg:gap-14 md:gap-10 gap-8 text-[#40465C] lg:text-[17px] text-[15px] font-custom">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/store">Store</NavLink>
              {/* <NavLink to="/wishlist">Wishlist</NavLink> */}
              <NavLink to="/my-orders">Orders</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden w-1/3 mt-2">
              <div className="flex justify-between items-center gap-4">
                {!menuOpen ? (
                  <button
                    onClick={() => setMenuOpen(true)}
                    className="flex-1 text-2xl text-[#40465C]"
                  >
                    <MdMenu />
                  </button>
                ) : null}
              </div>
            </div>
            {/* Mobile Navigation Dropdown */}
            {menuOpen && (
              <div className="absolute top-16 left-0 bg-white w-full shadow-md p-4 md:hidden">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-2 right-4 text-2xl text-[#40465C]"
                >
                  <MdClose />
                </button>
                <NavLink
                  to="/"
                  className="block py-2 border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="block py-2 border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/store"
                  className="block py-2 border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  Store
                </NavLink>
                {/* <NavLink
                  to="/wishlist"
                  className="block py-2 border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  Wishlist
                </NavLink> */}
                <NavLink
                  to="/my-orders"
                  className="block py-2 border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  Orders
                </NavLink>
                <NavLink
                  to="/contact"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            )}

            {/* Third Div: Search Bar (Mobile only) */}
            <div className="md:hidden md:w-1/3 mt-2">
              {/* <form className="flex items-center border rounded-3xl p-2 ">
                <input
                  type="text"
                  placeholder="Search Item"
                  className="w-full p-2 outline-none"
                />
                <BiSearch className="text-[#ff8717] text-xl" />
              </form> */}
              <form className="flex-1 flex items-center border rounded-3xl p-2">
                <input
                  type="text"
                  placeholder="Search Item"
                  className="flex-1 p-2 outline-none"
                />
                <BiSearch className="text-[#ff8717] text-xl" />
              </form>
            </div>

            {/* Fourth Div: Icons and Login Button */}
            <div className="md:flex justify-end items-center gap-6 w-full">
              <div className="hidden lg:block">
                <div className="flex justify-end items-center md:gap-6 gap-3 relative">
                  <span className="text-[#424D58] text-2xl font-medium">
                    <Link to="/cart">
                      <BsCart />
                      <span
                        className="absolute text-xs bg-[#ff8717] rounded-full w-4 h-4 text-center text-white
                      -top-1 left-3"
                      >
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                    </Link>
                  </span>
                  <span className="text-[#424D58] text-2xl font-medium">
                    <Link to="wishlist">
                      <FiHeart />
                    </Link>
                  </span>
                  <span className="text-[#424D58] text-2xl font-medium">
                    <Link
                      to={authState?.user === null ? "/login" : "/my-profile"}
                      className="flex justify-between items-center gap-2"
                    >
                      {/* <BsPerson size={24} /> */}
                      {authState.user === null ? (
                        <BsPerson size={24} />
                      ) : (
                        <div className="flex justify-between items-center gap-2">
                          <BsPerson size={24} />
                          <p className="text-sm capitalize">
                            Welcome {authState.user.firstName}
                          </p>
                        </div>
                      )}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="w-full md:w-auto flex justify-center items-center self-center ">
                <button className="flex-1 bg-[#ff8717] text-white py-3 px-5 rounded-sm lg:text-base text-xs font-medium tracking-wider">
                  {authState.user === null ? (
                    <Link
                      to={authState.user === null ? "/login" : "/my-profile"}
                    >
                      Login / Sign Up
                    </Link>
                  ) : (
                    <Link
                      to={authState.user === null ? "/logout" : ""}
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  )}
                  {/* <Link to={authState.user === null ? "/login" : ""}>
                  Login / Sign Up
                </Link> */}
                  {/* <Link to="/login">Login / Sign Up</Link> */}
                  {/* {authState.user === null ? (
                    <Link to="/login">Login / Sign Up</Link>
                  ) : (
                    <p>
                      {authState.user.firstName + " " + authState.user.lastName}
                    </p>
                  )} */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
