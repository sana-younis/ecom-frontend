import React from "react";
import ReactStars from "react-rating-stars-component";

const FeaturedProducts = () => {
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
            <h3 className="text-xs font-semibold mt-2">
              SAMSUNG Galaxy Tab A7
            </h3>
            <ReactStars
              count={5}
              size={16}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="text-gray-600 mb-2 text-sm">$ 100.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
