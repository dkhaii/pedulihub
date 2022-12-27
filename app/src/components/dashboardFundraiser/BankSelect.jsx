import React from "react";

const BankSelect = () => {
  return (
    <div className="pb-4">
      <h1 className="font-semibold text-xl pb-2 text-gray-700">Pilih Bank :</h1>
      <select className="select select-bordered w-full">
        <option disabled selected>
          Bank Select
        </option>
        <option>BNI</option>
        <option>BCA</option>
      </select>
    </div>
  );
};

export default BankSelect;
