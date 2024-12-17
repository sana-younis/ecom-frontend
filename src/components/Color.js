import React from "react";

const Color = (props) => {
  const { colorData, setColor } = props;
  return (
    <>
      <ul>
        {colorData &&
          colorData?.map((item, index) => {
            return (
              <li
                className="w-5 h-5 rounded-full cursor-pointer"
                onClick={() => setColor(item?._id)}
                style={{ backgroundColor: item?.title }}
                key={index}
              ></li>
            );
          })}
      </ul>
    </>
  );
};

export default Color;
