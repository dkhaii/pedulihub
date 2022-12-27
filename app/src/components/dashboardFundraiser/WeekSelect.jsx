import React from "react";

const WeekSelect = () => {
  return (
    <div className="pb-4">
      <h1 className="font-semibold text-xl pb-2 text-gray-700">Lama Galang Dana :</h1>
      <select className="select select-bordered w-full">
        <option disabled selected>
          Minggu / Bulan
        </option>
        <option>1 Minggu</option>
        <option>2 Minggu</option>
        <option>3 Minggu</option>
        <option>1 Bulan</option>
      </select>
    </div>
  );
};

export default WeekSelect;
