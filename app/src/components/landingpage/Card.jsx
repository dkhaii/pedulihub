import React, { useState } from "react";
import Icon1 from "../../assets/iconverification.svg";
import Icon2 from "../../assets/iconwaktu.svg";
import Icon3 from "../../assets/icontransparant.svg";

const Card = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-cente bg-green-200">
      <div className="max-w-5xl w-full mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="mb-20 text-5xl font-bold text-center">Kenapa Donasi Di PeduliHub. ?</h1>
        <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <div className="w-full lg:w-1/3">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-8 border-orange-400">
              <div className="icon w-20 p-3 ">
                <img src={Icon1} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-lg">Aman Dan terpercaya</h1>
                <div className="text-sm text-gray-400">Semua galang dana yang dibuat sudah melalui proses kurasi dan verifikasi secara akurat oleh tim kami</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-8 border-green-400">
              <div className="icon w-20 p-3 ">
                <img src={Icon2} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-lg">Mudah dan Cepat</h1>
                <div className="text-sm text-gray-400">Proses donasi kamu lakukan hanya dalam hitungan menit dengan berbagai metode pembayaran</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-8 border-red-400">
              <div className="icon w-20 p-3 ">
                <img src={Icon3} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-lg">Transparan</h1>
                <div className="text-sm text-gray-400">Pencairan dan penggunaan donasi yang sudah diterima penggalang dana dapat dilihat di update aktivitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
