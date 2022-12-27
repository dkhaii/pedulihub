import React, { useState } from "react";

export default function ButtonSubmit({ content }) {
  console.log(content);
  return (
    <div className="mt-6">
      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">{content.button}</button>
    </div>
  );
}
