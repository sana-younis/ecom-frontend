/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addRating, getAProduct } from "../features/products/productSlice";
import { FaRegHeart } from "react-icons/fa6";
import Color from "../components/Color";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../features/user/userSlice";
import PopularProducts from "../components/PopularProducts";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  console.log(color);
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);
  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const getProductId = location.pathname.split("/")[2];
  console.log(getProductId);

  const productState = useSelector((state) => state?.product?.singleProduct);
  const cartState = useSelector((state) => state?.auth?.cartProduct);
  console.log(productState);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please choose color");
      return false;
    } else {
      dispatch(
        addProductToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please write review about the product");
      return false;
    } else {
      dispatch(
        addRating({ star: star, comment: comment, productId: getProductId })
      );
      setTimeout(() => {
        dispatch(getAProduct(getProductId));
      }, 100);
    }
    return false;
  };

  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    // img: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg",
  };

  const [orderedProduct, setOrderProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log(text, "text");
    let textField = document.createElement("textarea");
    textField.innerHTML = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const closeModel = () => {};
  return (
    // <section className="py-5 bg-gray-50">
    //   <div>
    //     <div>
    //       {/* <div>
    //         <ReactImageZoom {...props} />
    //       </div> */}
    //     </div>
    //     <div className="flex justify-around items-center w-full">
    //       <div className="w-[40%]  bg-white">
    //         <div>
    //           <img
    //             src="https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //             alt="Watch"
    //             className="w-[550px] h-[300px] object-cover"
    //           />
    //         </div>
    //         <div className="flex justify-start items-center gap-5 mt-3">
    //           <div className="bg-gray-700 border">
    //             <img
    //               src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
    //               alt="Watch"
    //               className="w-32"
    //             />
    //           </div>
    //           <div className="bg-gray-700 border">
    //             <img
    //               src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
    //               alt="Watch"
    //               className="w-32"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       {/* Product Details */}
    //       <div className="bg-white">
    //         <div className="">
    //           <div>
    //             <h3>Kids Headphones</h3>
    //           </div>
    //           <div className="border-bottom py-3">
    //             <p className="price">$ 100</p>
    //             <div className="flex items-center gap-2">
    //               <ReactStars
    //                 count={5}
    //                 size={24}
    //                 value={4}
    //                 edit={false}
    //                 activeColor="#ffd700"
    //               />
    //               <p className="mb-0">(2 reviews)</p>
    //             </div>
    //             {/* <a href="#review">Write a Review</a> */}
    //           </div>
    //           <div className="py-2">
    //             <div className="flex items-center gap-10 my-2">
    //               <h3>Type:</h3>
    //               <p>Watch</p>
    //             </div>
    //             <div className="flex items-center gap-10 my-2">
    //               <h3>Brand:</h3>
    //               <p>Watch</p>
    //             </div>
    //             <div className="flex items-center gap-10 my-2">
    //               <h3>Category:</h3>
    //               <p>Watch</p>
    //             </div>
    //             <div className="flex items-center gap-10 my-2">
    //               <h3>Tags:</h3>
    //               <p>Watch</p>
    //             </div>
    //             <div className="flex items-center gap-10 my-2">
    //               <h3>Availablility:</h3>
    //               <p>In Stock</p>
    //             </div>
    //             <div className="flex flex-col gap-10 mt-2 mb-3">
    //               <h3 className="">Color</h3>
    //               {/* <Color /> */}
    //             </div>
    //             <div className="flex items-center flex-row gap-15 mt-2 mb-3">
    //               <h3>Quantity: </h3>
    //               <div className="">
    //                 <input
    //                   type="number"
    //                   name=""
    //                   min={1}
    //                   max={10}
    //                   style={{ width: "70px" }}
    //                   id=""
    //                 />
    //               </div>
    //               <div className="flex items-center gap-30 ms-5">
    //                 <button
    //                   className="button border-0"
    //                   data-bs-toggle="modal"
    //                   data-bs-target="#staticBackdrop"
    //                   type="button"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-around items-start lg:items-start">
          {/* <div>
            <ReactImageZoom {...props} />
          </div> */}
          {/* Image Section */}
          <div className="w-full lg:w-[45%] bg-white p-5">
            {productState?.images.map((item, index) => {
              return (
                <div>
                  <img
                    src={item?.url}
                    alt="Watch"
                    className="w-full h-auto object-cover"
                  />
                </div>
              );
            })}
            {/* optional section */}
            <div>
              {/* <img
                src="https://images.pexels.com/photos/1682821/pexels-photo-1682821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Watch"
                className="w-full h-auto object-cover"
              /> */}
            </div>
            {/* <div className="flex justify-start items-center gap-3 mt-3 flex-wrap">
              <div className="bg-gray-700 border w-20 h-20">
                <img
                  src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
                  alt="Watch Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-700 border w-20 h-20">
                <img
                  src="https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg"
                  alt="Watch Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-[50%] bg-white p-5 pl-7">
            <div>
              <h3 className="text-xl font-semibold">{productState?.title}</h3>
            </div>
            <div className="border-b py-3">
              <p className="text-base font-normal mb-3">
                {productState?.description}
              </p>
              <p className="text-base font-bold">$ {productState?.price}</p>
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  size={24}
                  value={productState?.totalRating}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="text-sm">(2 reviews)</p>
              </div>
            </div>

            <div className="py-2">
              <div className="flex items-center gap-7 my-2">
                <h3 className="text-base font-semibold">Type:</h3>
                <p className="text-sm font-normal">Watch</p>
              </div>
              <div className="flex items-center gap-7 my-2">
                <h3 className="text-base font-semibold">Brand:</h3>
                <p className="text-sm font-normal text-center">
                  {productState?.brand}
                </p>
              </div>
              <div className="flex items-center gap-7 my-2">
                <h3 className="text-base font-semibold">Category:</h3>
                <p className="text-sm font-normal">{productState?.category}</p>
              </div>
              <div className="flex items-center gap-7 my-2">
                <h3 className="text-base font-semibold">Tags:</h3>
                <p className="text-sm font-normal">{productState?.tags}</p>
              </div>
              <div className="flex items-center gap-7 my-2">
                <h3 className="text-base font-semibold">Availablility:</h3>
                <p className="text-sm font-normal">In Stock</p>
              </div>

              {alreadyAdded === false && (
                <>
                  <div className="mt-3 flex justify-start items-center gap-3 ">
                    <h3 className="text-base font-semibold">Color:</h3>
                    {/* Placeholder for Color Selector */}
                    <Color
                      setColor={setColor}
                      colorData={productState?.color}
                    />
                  </div>
                </>
              )}

              <div className=" mt-2">
                {alreadyAdded === false && (
                  <>
                    <div className="flex gap-2 justify-start items-center">
                      <h3 className="text-base font-semibold">Quantity:</h3>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        className="w-22 h-auto border p-2"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </>
                )}
                <button
                  className="button border-0 px-6 py-2 mt-4 bg-[#ff8717] text-white rounded"
                  type="button"
                  onClick={() => {
                    alreadyAdded ? navigate("/cart") : uploadCart();
                  }}
                >
                  {alreadyAdded ? "Go to Cart" : " Add to Cart"}
                </button>
                {/* <button className="bg-transparent border border-[#ff8717] px-6 py-2 ml-4 rounded tracking-normal">
                  Buy it Now
                </button> */}
              </div>
              <div className="flex gap-3 justify-start items-center mt-4">
                <a href="">
                  <FaRegHeart className="fs-5 me-2" />
                </a>
                <p> Add to WishList</p>
              </div>

              <div className="flex justify-start items-center gap-4 mt-4">
                <h3 className="text-base font-semibold">Product Link</h3>
                <a
                  href="javascript:void(0);"
                  onClick={() => {
                    copyToClipboard(window.location.href);
                  }}
                >
                  Copy Product Link
                </a>
              </div>
              {/* <div className="mt-4">
                <h3 className="text-base font-semibold">
                  About Shipping and Return
                </h3>
                <p>
                  Delivery Charges are applied on all orders. We <br /> ship all
                  orders within 7-10 business days!
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="m-4 rounded-sm">
          <h3 className="text-2xl font-bold mb-6 tracking-wide">Description</h3>
          <div className="bg-white p-8">
            <p
              className=""
              dangerouslySetInnerHTML={{ __html: productState?.description }}
            ></p>
          </div>
        </div>
      </div>
      {/* description */}
      {/* <div>
        <PopularProducts />
      </div> */}

      <div className="py-5 w-[95%] mx-auto">
        <h4>Write a Review</h4>
        <div>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={true}
            activeColor="#ffd700"
            onChange={(e) => {
              setStar(e);
            }}
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            className="w-full p-3 outline-none"
            cols="30"
            rows="4"
            placeholder="Comments"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="border-0 mt-3 bg-[#ff8717] p-3 text-white font-medium rounded-sm"
            type="submit"
            onClick={addRatingToProduct}
          >
            Submit Review
          </button>
        </div>
      </div>
      <div className="mt-4">
        {productState &&
          productState?.ratings?.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={item?.star}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <p className="mt-3">{item?.comment}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default SingleProduct;
