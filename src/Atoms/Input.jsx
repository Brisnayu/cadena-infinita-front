import React from "react";

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      className="border border-gray-300 rounded-md px-3 py-2 text-sm leading-tight focus:border-indigo-500" // Estilos de Tailwind
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
