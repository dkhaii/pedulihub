import React, { useState } from "react";

export default function FormInput({ content }) {
  console.log(content);
  return (
    <div className="flex items-center border border-gray-600 py-2 px-3 rounded-md mb-2 ">
      <img src={content.icon} alt="" />
      <input type="email" className="pl-2 outline-none border-none w-full" placeholder={content.fieldName} id="email" />
    </div>
  );
}
