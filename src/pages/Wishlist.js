import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const wishlistState = useSelector((state) => state?.auth?.wishlist);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  return (
    <>
      {/* <!-- Wishlist Content --> */}
      <section className="mx-auto my-8">
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <h2 className="text-2xl font-semibold text-black mb-4">
            Your Saved Items
          </h2>  */}
          {/* {!wishlistState.length === 0 && (
            <div>
              <p className="text-center text-xl text-black font-medium">
                No Data Found
              </p>
            </div>
          )} */}
          {wishlistState &&
            wishlistState?.map((item, index) => {
              return (
                <div className="mb-6" key={index}>
                  {/* <!-- Example Product Card --> */}
                  <div className="border rounded-lg shadow hover:shadow-lg transition p-6 pb-8 relative">
                    <span
                      className="text-[#ff8717] hover:underline float-right absolute top-2 right-2 cursor-pointer"
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                    >
                      &#x2716;
                    </span>
                    <img
                      // src="https://via.placeholder.com/300"
                      src={
                        item?.images[0].url
                          ? item?.images[0].url
                          : "https://via.placeholder.com/300"
                      }
                      alt="Product"
                      className="w-full h-auto object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-black">
                      {item?.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-800 mt-2">
                      $ {item?.price}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <button className="bg-[#ff8717] text-white px-4 py-2 rounded">
                        <Link to="/cart"> Move to Cart</Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Wishlist;
