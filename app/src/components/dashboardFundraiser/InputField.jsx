import React from "react";

const InputField = ({ content }) => {
  return (
    <div className="pb-4">
      <h1 className="font-semibold text-xl pb-2 text-gray-700">{content.label}</h1>
      <div className="flex items-center border border-gray-300 py-2 px-3 rounded-md mb-2 ">
        <input className="w-full outline-none" type={content.type} />
      </div>
    </div>
  );
};

export default InputField;
