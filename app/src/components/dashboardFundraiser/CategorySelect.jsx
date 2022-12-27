import React from "react";

const CategorySelect = () => {
  return (
    <div className="pb-4">
      <h1 className="font-semibold text-xl pb-2 text-gray-700">Pilih Category :</h1>
      <select className="select select-bordered w-full">
        <option disabled selected>
          Category ID
        </option>
        <option>1 - Anak</option>
        <option>2 - Kemanusiaan</option>
        <option>3 - Pendidikan</option>
        <option>4 - Agama</option>
        <option>5 - Hewan</option>
        <option>6 - Kesehatan</option>
      </select>
    </div>
  );
};

export default CategorySelect;
