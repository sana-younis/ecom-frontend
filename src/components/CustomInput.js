import React from "react";

const CustomInput = (props) => {
  const {
    type,
    name,
    placeholder,
    className,
    value,
    onChange,
    onBlur,
    disabled,
  } = props;
  return (
    <div className="relative mb-3">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={`${className} border border-[#eeeeee] p-2 rounded-md w-full mt-3 h-10 outline-none`}
      />
    </div>
  );
};

export default CustomInput;
