import React, { useState } from "react";

const categories = ["All", "Electronics", "Fashion", "Home"];

const FilterTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="mb-5 flex space-x-4 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 border-b-2 border-[#ff8718] whitespace-nowrap ${
            selectedCategory === category
              ? "border-[#ff8718] text-[#ff8718]"
              : "border-transparent"
          } hover:text-[#ff8718]`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
