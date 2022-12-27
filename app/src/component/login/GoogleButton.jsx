import React, { useState } from "react";

export default function FormInput({ content }) {
  console.log(content);
  return (
    <button type="button" className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-green-200">
      <img src={content.icon} alt="" />
      &nbsp;&nbsp;Masuk dengan Google
    </button>
  );
}
