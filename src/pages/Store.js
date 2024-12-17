import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";

const Store = () => {
  const dispatch = useDispatch();
  const [grid, setGrid] = useState(4);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [colors, setColors] = useState([]);

  // filter state
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState("");

  const productState = useSelector((state) => state?.product?.product);
  console.log(productState);

  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  };
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];
    let newColors = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push(element.brand);
      category.push(element.category);
      newTags.push(element.tags);
      newColors.push(element.color);
    }
    setBrands(newBrands);
    setCategories(category);
    setTags(newTags);
    setColors(newColors);
  }, [productState]);

  // console.log(
  //   [...new Set(brands)],
  //   [...new Set(categories)],
  //   [...new Set(tags)]
  // );

  useEffect(() => {
    if (sort) {
      console.log("Sorting by:", sort);
      // Add your sorting logic here based on the `sort` value
    }
  }, [sort]);
  return (
    // <div className="py-5 bg-gray-100 px-5">
    //   <div className="">
    //     <div className="flex items-start gap-4 justify-between ">
    //       <div className="flex flex-col w-1/4 ">
    //         <div className="mb-3 bg-white rounded-md py-5 px-8">
    //           <h3 className="text-lg font-bold">Shop by Categories</h3>
    //           <div>
    //             <ul className="decoration-0 text-sm mt-3">
    //               <li className="pt-2 text-[#929292]">Laptop</li>
    //               <li className="pt-2 text-[#929292]">Watch</li>
    //               <li className="pt-2 text-[#929292]">Camera</li>
    //               <li className="pt-2 text-[#929292]">TV</li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="mb-3 bg-white rounded-md  py-5 px-7">
    //           <h3 className="text-lg font-bold mb-2">Filter By</h3>
    //           <div>
    //             <h5 className="text-base font-semibold mt-7">Availablity</h5>
    //             <div>
    //               <div className="mt-3">
    //                 <input
    //                   type="checkbox"
    //                   value=""
    //                   id=""
    //                   className="mr-2 accent-[#ff8717] text-white"
    //                 />
    //                 <label htmlFor="" className="text-[#929292] ">
    //                   In Stock
    //                 </label>
    //               </div>
    //               <div className="mt-2">
    //                 <input
    //                   type="checkbox"
    //                   value=""
    //                   id=""
    //                   className="mr-2 accent-[#ff8717] text-white"
    //                 />
    //                 <label htmlFor="" className="text-[#929292]">
    //                   Sold Out
    //                 </label>
    //               </div>
    //             </div>
    //             <h3 className="text-base font-semibold mt-7">Price</h3>
    //             <div className="flex items-center justify-between mt-3">
    //               <div className="mb-3">
    //                 <input
    //                   type="number"
    //                   className=" border border-[#929292] w-28 p-2 rounded-sm outline-none"
    //                   placeholder="$ (From)"
    //                 />
    //               </div>
    //               <div className="mb-3  ">
    //                 <input
    //                   type="number"
    //                   className="border border-[#929292] w-28 p-2 rounded-sm outline-none"
    //                   placeholder="$ (To)"
    //                 />
    //               </div>
    //             </div>
    //             <h3 className="text-base font-semibold mt-7">Colors</h3>
    //             <div className=" mt-3">
    //               <ul className="flex flex-wrap gap-4">
    //                 <li className="w-5 h-5 bg-red-600 rounded-full"></li>
    //                 <li className="w-5 h-5 bg-slate-600 rounded-full"></li>
    //                 <li className="w-5 h-5 bg-amber-600 rounded-full"></li>
    //                 <li className="w-5 h-5 bg-green-700 rounded-full"></li>
    //                 <li className="w-5 h-5 bg-teal-500 rounded-full"></li>
    //                 <li className="w-5 h-5 bg-black rounded-full"></li>
    //                 <li className="w-5 h-5 bg-orange-400 rounded-full"></li>
    //               </ul>
    //             </div>
    //             <h3 className="text-base font-semibold mt-7">Size</h3>
    //             <div>
    //               <div className="mt-3">
    //                 <input
    //                   type="checkbox"
    //                   value=""
    //                   id="color-1"
    //                   className="mr-2 accent-[#ff8717] text-white"
    //                 />
    //                 <label htmlFor="color-1" className="text-[#929292] ">
    //                   S(2)
    //                 </label>
    //               </div>
    //               <div className="mt-3">
    //                 <input
    //                   type="checkbox"
    //                   value=""
    //                   id="color-2"
    //                   className="mr-2 accent-[#ff8717] text-white"
    //                 />
    //                 <label htmlFor="color-2" className="text-[#929292] ">
    //                   M(2)
    //                 </label>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mb-3 bg-white rounded-md p-5">
    //           <h3 className="text-base font-bold">Products Tags</h3>
    //           <div>
    //             <div className="flex flex-wrap items-center gap-3 mt-3">
    //               <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
    //                 Headphones
    //               </span>
    //               <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
    //                 Laptop
    //               </span>
    //               <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
    //                 Tablet
    //               </span>
    //               <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
    //                 Mobile
    //               </span>
    //               <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
    //                 TV
    //               </span>
    //               <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
    //                 Speaker
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className=" bg-white rounded-md p-5 ">
    //           <h3 className="text-base font-bold">Random Products</h3>
    //           <div className="pt-5">
    //             <div className="mb-5 ">
    //               <div className="flex justify-start items-center gap-2">
    //                 <div className="w-1/2">
    //                   <img src="/images/img_79.png" alt="product" />
    //                 </div>
    //                 <div className="w-75 mt-3">
    //                   <h1 className="text-sm font-bold leading-tight">
    //                     Kids Watch bulk 10 pack multi...
    //                   </h1>
    //                   <ReactStars
    //                     count={5}
    //                     size={18}
    //                     value={3}
    //                     edit={false}
    //                     activeColor="#ffd700"
    //                   />
    //                   <p className="text-sm font-bold">$100.00</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="pt-5 border-t-2">
    //               <div className="flex justify-start items-center gap-2">
    //                 <div className="w-1/2">
    //                   <img src="/images/img_79.png" alt="product" />
    //                 </div>
    //                 <div className="w-75 mt-3">
    //                   <h1 className="text-sm font-bold leading-tight">
    //                     Kids Watch bulk 10 pack multi...
    //                   </h1>
    //                   <ReactStars
    //                     count={5}
    //                     size={18}
    //                     value={3}
    //                     edit={false}
    //                     activeColor="#ffd700"
    //                   />
    //                   <p className="text-sm font-bold">$100.00</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-10/12">
    //         <div>
    //           <div className="bg-white p-4 rounded-sm flex justify-between items-center">
    //             <div className="flex items-center justify-start gap-3 w-1/2">
    //               <p className="text-base font-semibold">Sort By:</p>
    //               <select className="border border-[#929292] p-2 rounded-md outline-none w-1/2 text-sm text-[#929292]">
    //                 <option className="manual text-sm text-[#929292]">
    //                   Featured
    //                 </option>
    //                 <option
    //                   className="best-selling text-sm text-[#929292]"
    //                   selected="selected"
    //                 >
    //                   Best Selling
    //                 </option>
    //                 <option className="title-ascending text-sm text-[#929292]">
    //                   Alphabaticallt A-Z
    //                 </option>
    //                 <option className="title-ascending text-sm text-[#929292]">
    //                   Alphabaticallt Z-A
    //                 </option>
    //                 <option className="price-ascending text-sm text-[#929292]">
    //                   Price, low to high
    //                 </option>
    //                 <option className="price-descending text-sm text-[#929292]">
    //                   Price, high to low
    //                 </option>
    //                 <option className="created-ascending text-sm text-[#929292]">
    //                   Date, old to new
    //                 </option>
    //                 <option className="price-descending text-sm text-[#929292]">
    //                   Date, new to old
    //                 </option>
    //               </select>
    //             </div>
    //             <div className="flex justify-end items-center gap-3 w-1/2">
    //               <p className="text-base text-[#929292]">21 Products</p>
    //               <div className="grid grid-cols-4 gap-3">
    //                 <div className="bg-[#eeeeee] p-2 rounded-md grid">
    //                   <img
    //                     onClick={() => {
    //                       setGrid(4);
    //                     }}
    //                     src="/images/gr4.svg"
    //                     className="w-[18px] h-[18px]"
    //                     alt="grid"
    //                   />
    //                 </div>
    //                 <div className="bg-[#eeeeee] p-2 rounded-md">
    //                   <img
    //                     onClick={() => {
    //                       setGrid(3);
    //                     }}
    //                     src="images/gr3.svg"
    //                     className="w-[18px] h-[18px]"
    //                     alt="grid"
    //                   />
    //                 </div>
    //                 <div className="bg-[#eeeeee] p-2 rounded-md">
    //                   <img
    //                     onClick={() => {
    //                       setGrid(2);
    //                     }}
    //                     src="images/gr2.svg"
    //                     className="w-[18px] h-[18px]"
    //                     alt="grid"
    //                   />
    //                 </div>
    //                 <div className="bg-[#eeeeee] p-2 rounded-md">
    //                   <img
    //                     onClick={() => {
    //                       setGrid(12);
    //                     }}
    //                     src="/images/gr.svg"
    //                     className="w-[18px] h-[18px]"
    //                     alt="grid"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="mt-4">
    //             <div className=" ">
    //               <ProductCard grid={grid} />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //  second code

    <div className="py-5 bg-gray-100 px-5">
      <div className="flex items-start gap-4 justify-between">
        <div className="flex flex-col w-1/4 ">
          <div className="mb-3 bg-white rounded-md py-5 px-8">
            <h3 className="text-lg font-bold">Shop by Categories</h3>
            <div>
              <ul className="decoration-0 text-sm mt-3 cursor-pointer">
                {categories &&
                  [...new Set(categories)].map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => setCategory(item)}
                        className="mb-2"
                      >
                        {index + 1 + ". "} {item}
                      </li>
                    );
                  })}
                {/* <li className="pt-2 text-[#929292]">Laptop</li>
                <li className="pt-2 text-[#929292]">Watch</li>
                <li className="pt-2 text-[#929292]">Camera</li>
                <li className="pt-2 text-[#929292]">TV</li> */}
              </ul>
            </div>
          </div>
          <div className="mb-3 bg-white rounded-md  py-5 px-7">
            <h3 className="text-lg font-bold mb-2">Filter By</h3>
            <div>
              <h3 className="text-base font-semibold mt-7">Price</h3>
              <div className="flex items-center justify-between mt-3">
                <div className="mb-3">
                  <input
                    type="number"
                    className=" border border-[#929292] w-28 p-2 rounded-sm outline-none"
                    placeholder="$ (From)"
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3  ">
                  <input
                    type="number"
                    className="border border-[#929292] w-28 p-2 rounded-sm outline-none"
                    placeholder="$ (To)"
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold mt-7">Colors</h3>
              <div className=" mt-3">
                <Color />
                <ul className="flex flex-wrap gap-4">
                  <li className="w-5 h-5 bg-red-600 rounded-full"></li>
                  <li className="w-5 h-5 bg-slate-600 rounded-full"></li>
                  <li className="w-5 h-5 bg-amber-600 rounded-full"></li>
                  <li className="w-5 h-5 bg-green-700 rounded-full"></li>
                  <li className="w-5 h-5 bg-teal-500 rounded-full"></li>
                  <li className="w-5 h-5 bg-black rounded-full"></li>
                  <li className="w-5 h-5 bg-orange-400 rounded-full"></li>
                </ul>
              </div>
            </div>
          </div>
          {/* tags */}
          <div className="mb-3 bg-white rounded-md p-5">
            <h3 className="text-base font-bold mb-5">Products Tags</h3>
            <div className="flex flex-wrap">
              {tags &&
                [...new Set(tags)].map((item, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => setTag(item)}
                      className="capitalize rounded-md bg-gray-200 py-2 px-3 text-sm mr-3 cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
            </div>
            {/* <div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
                  Headphones
                </span>
                <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
                  Laptop
                </span>
                <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
                  Tablet
                </span>
                <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
                  Mobile
                </span>
                <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
                  TV
                </span>
                <span className="rounded-md bg-gray-200 py-2 px-3 text-sm">
                  Speaker
                </span>
              </div>
            </div> */}
          </div>
          {/* brands */}
          <div className="mb-3 bg-white rounded-md p-5">
            <h3 className="text-base font-bold mb-5">Brands Tags</h3>
            <div className="flex flex-wrap">
              {brands &&
                [...new Set(brands)].map((item, index) => {
                  return (
                    <span
                      key={index}
                      onClick={() => setBrand(item)}
                      className="capitalize rounded-md bg-gray-200 py-2 px-3 text-sm mr-3 mb-3 cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
            </div>
          </div>
          {/* random products */}
          <div className=" bg-white rounded-md p-5 ">
            <h3 className="text-base font-bold">Random Products</h3>
            {productState.length > 0 &&
              [...productState]
                .sort(() => Math.random() - 0.5)
                .slice(0, 2)
                .map((item, index) => {
                  return (
                    <div className="pt-5" key={index}>
                      <div className="mb-5 ">
                        <div className="flex justify-start items-center gap-2">
                          <div className="w-1/2">
                            {/* <img src="/images/img_79.png" alt="product" /> */}
                            <img src={item?.images[0]?.url} alt="Product" />
                          </div>
                          <div className="w-75 mt-3">
                            <h1 className="text-sm font-bold leading-tight">
                              {item?.title}.
                            </h1>
                            <ReactStars
                              count={5}
                              size={18}
                              value={item?.totalRating?.toString()}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="text-sm font-bold">${item?.price}</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="pt-5 border-t-2">
                      <div className="flex justify-start items-center gap-2">
                        <div className="w-1/2">
                          <img src="/images/img_79.png" alt="product" />
                        </div>
                        <div className="w-75 mt-3">
                          <h1 className="text-sm font-bold leading-tight">
                            Kids Watch bulk 10 pack multi...
                          </h1>
                          <ReactStars
                            count={5}
                            size={18}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="text-sm font-bold">$100.00</p>
                        </div>
                      </div>
                    </div> */}
                    </div>
                  );
                })}
          </div>
        </div>
        <div className="w-10/12">
          <div>
            <div className="bg-white p-4 rounded-sm flex justify-between items-center">
              <div className="flex items-center justify-start gap-3 w-1/2">
                <p className="text-base font-semibold">Sort By:</p>
                <select
                  className="border border-[#929292] p-2 rounded-md outline-none w-1/2 text-sm text-[#929292]"
                  onChange={(e) => setSort(e.target.value)}
                >
                  {/* Sort options */}
                  <option
                    className="title text-sm text-[#929292]"
                    value="title"
                  >
                    Alphabaticallt A-Z
                  </option>
                  <option
                    className="-title text-sm text-[#929292]"
                    value="-title"
                  >
                    Alphabaticallt Z-A
                  </option>
                  <option
                    className="price text-sm text-[#929292]"
                    value="price"
                  >
                    Price, low to high
                  </option>
                  <option
                    className="-price text-sm text-[#929292]"
                    value="-price"
                  >
                    Price, high to low
                  </option>
                  <option
                    className="createdAt text-sm text-[#929292]"
                    value="createdAt"
                  >
                    Date, old to new
                  </option>
                  <option
                    className="-createdAt text-sm text-[#929292]"
                    value="-createdAt"
                  >
                    Date, new to old
                  </option>
                </select>
              </div>
              <div className="flex justify-end items-center gap-3 w-1/2">
                <p className="text-base text-[#929292]">
                  {productState.length} Products
                </p>
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-[#eeeeee] p-2 rounded-md">
                    <img
                      onClick={() => setGrid(4)}
                      src="/images/gr4.svg"
                      className="w-[18px] h-[18px] cursor-pointer"
                      alt="grid"
                    />
                  </div>
                  <div className="bg-[#eeeeee] p-2 rounded-md">
                    <img
                      onClick={() => setGrid(3)}
                      src="/images/gr3.svg"
                      className="w-[18px] h-[18px] cursor-pointer"
                      alt="grid"
                    />
                  </div>
                  <div className="bg-[#eeeeee] p-2 rounded-md">
                    <img
                      onClick={() => setGrid(2)}
                      src="/images/gr2.svg"
                      className="w-[18px] h-[18px] cursor-pointer"
                      alt="grid"
                    />
                  </div>
                  <div className="bg-[#eeeeee] p-2 rounded-md">
                    <img
                      onClick={() => setGrid(12)}
                      src="/images/gr.svg"
                      className="w-[18px] h-[18px] cursor-pointer"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <ProductCard
                  grid={grid}
                  data={productState ? productState : []}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
