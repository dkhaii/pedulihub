import React, { useState } from "react";

export default function DonasiButton({ content }) {
  console.log(content);
  return (
    <div>
      <button className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-secondary rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">{content.button}</button>
    </div>
  );
}
