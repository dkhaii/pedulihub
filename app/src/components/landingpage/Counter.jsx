import React from "react";

const Counter = () => {
  return (
    <div className="bg-white w-[1040px] h-[125px] flex justify-center items-center gap-20 shadow-md rounded-xl font-poppins">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-secondary text-5xl font-bold">9.600+</h1>
        <p className="text-lg">Galang Dana</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-secondary text-5xl font-bold">138.000.000+</h1>
        <p className="text-lg">Donasi Terkumpul</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-secondary text-5xl font-bold">200.000+</h1>
        <p className="text-lg">Donatur</p>
      </div>
    </div>
  );
};

export default Counter;
