import React from "react";

const FileInput = ({ content }) => {
  return (
    <div className="pb-4">
      <h1 className="font-semibold text-xl pb-2 text-gray-700">{content.label}</h1>
      <input type="file" className="file-input file-input-bordered w-full" />{" "}
    </div>
  );
};

export default FileInput;
