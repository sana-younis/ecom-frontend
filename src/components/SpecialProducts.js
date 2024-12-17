import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

// const topCategories = [
//   {
//     id: 1,
//     name: "Panasonic Cordless Phone",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 2,
//     name: "Rokinon Xeen CF 16mm Wide Angle",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 3,
//     name: "SAMSUNG Galaxy Tab A7 Lite'' 32GB",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 4,
//     name: "SAMSUNG Galaxy Tab A7 Lite'' 32GB",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
// ];
// const latestCategories = [
//   {
//     id: 1,
//     name: "Panasonic Cordless Phone",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 2,
//     name: "Rokinon Xeen CF 16mm Wide Angle",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 3,
//     name: "SAMSUNG Galaxy Tab A7 Lite'' 32GB",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 4,
//     name: "SAMSUNG Galaxy Tab A7 Lite'' 32GB",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
// ];

// const hotSellingCategories = [
//   {
//     id: 1,
//     name: "Panasonic Cordless Phone",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 2,
//     name: "Rokinon Xeen CF 16mm Wide Angle",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 3,
//     name: "SAMSUNG Galaxy Tab A7 Lite'' 32GB",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 4,
//     name: "SAMSUNG Galaxy Tab A7 Lite'' 32GB",
//     price: 30.52,
//     originalPrice: 28.52,
//     image: "https://via.placeholder.com/50",
//   },
// ];

const SpecialProducts = (props) => {
  const { title, brand, totalRating, price, sold, quantity, id } = props;
  console.log((quantity / (quantity + sold)) * 100);
  return (
    <div>
      <div className="">
        {/* hot selling categories */}
        <div className="p-2 rounded-lg bg-gray-200 transition flex gap-2 w-[200px] mb-4 mt-7">
          <div className="">
            <img
              src="/images/img_79.png"
              alt=""
              className="w-20 h-20 object-contain rounded-lg mb-2"
            />
          </div>
          <div>
            <h6>{brand}</h6>
            <h3 className="text-xs font-semibold mt-2">{title}</h3>
            <ReactStars
              count={5}
              size={16}
              value={totalRating}
              edit={false}
              activeColor="#ffd700"
            />
            <div>
              <p></p>
              <div
                className=""
                role="progressbar"
                style={{ width: (quantity / (quantity + sold)) * 100 + "%" }}
                aria-valuenow={(quantity / (quantity + sold)) * 100}
                aria-valuemin={quantity}
                aria-valuemax={sold + quantity}
              ></div>
            </div>
            <p className="text-gray-600 mb-2 text-sm">$ {price}</p>
            <Link className="button" to={"/product/" + id}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
