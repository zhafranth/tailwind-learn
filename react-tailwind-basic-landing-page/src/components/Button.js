import React from "react";
const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="px-4 py-2 rounded-md bg-traffico-red text-white uppercase text-sm inline hover:bg-traffico-red-1"
    >
      {title}
    </button>
  );
};

export default Button;
