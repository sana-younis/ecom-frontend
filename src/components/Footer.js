import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-6">
      {/* newsletter */}
      <div className="pt-10 pb-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          {/* Left Side Content */}
          <div className="mb-6 md:mb-0 md:w-full md:text-left text-center">
            <h2 className="text-2xl font-bold mb-2">
              Subscribe to our Newsletter
            </h2>
            <p className="text-[#c4baba]">
              Stay updated with the latest news, special offers, and exclusive
              promotions directly to your inbox!
            </p>
          </div>

          {/* Right Side Newsletter Form */}
          <div className="md:w-1/2">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-l-md outline-none text-[#929292] border border-[#eae3e3]"
                required
              />
              <button
                type="submit"
                className="bg-[#ff8718] text-white px-4 rounded-r-md hover:bg-[#fd8852] transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="max-w-screen-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#5b5555]">
        {/* Top part of the footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-14 pb-10">
          {/* Company Info */}
          <div>
            <embed src="/images/logo-2.svg" className="mb-5" />
            <p className="text-[#929292] font-sans leading-6">
              Welcome to our multi-vendor eCommerce platform where sellers meet
              buyers. Explore a variety of products from multiple sellers.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                to="#"
                className="text-[#929292] hover:text-gray-100 transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="#"
                className="text-[#929292] hover:text-gray-100 transition"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to="#"
                className="text-[#929292] hover:text-gray-100 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-[#929292] space-y-2 ">
              <li className="pb-2 font-thin">
                <Link to="#" className="hover:text-gray-100 transition ">
                  Home
                </Link>
              </li>
              <li className="pb-2 font-thin">
                <Link to="#" className="hover:text-[#929292] transition">
                  Shop
                </Link>
              </li>
              <li className="pb-2 font-thin">
                <Link to="#" className="hover:text-[#929292] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-100 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="text-[#929292] space-y-2">
              <li className="pb-2 font-thin">
                <Link to="#" className="hover:text-gray-100 transition">
                  FAQ
                </Link>
              </li>
              <li className="pb-2 font-thin">
                <Link to="#" className="hover:text-gray-100 transition">
                  Shipping & Returns
                </Link>
              </li>
              <li className="pb-2 font-thin">
                <Link to="#" className="hover:text-gray-100 transition">
                  Order Tracking
                </Link>
              </li>
              <li className="pb-2 font-thin">
                <Link to="#" className="hover:text-gray-100 transition">
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <p className="text-[#929292] font-thin">
              123 St, Online City, WEB 12345
            </p>
            <p className="text-[#929292] mt-2 font-thin">
              Email: info@example.com
            </p>
            <p className="text-[#929292] mt-2 font-thin">
              Phone: +1 234 567 890
            </p>
          </div>
        </div>

        {/* Bottom part of the footer */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Multi-Vendor eCommerce. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
