import React from "react";
import Icon1 from "../../assets/svg/iconverification.svg";
import Icon2 from "../../assets/svg/iconwaktu.svg";
import Icon3 from "../../assets/svg/icontransparant.svg";
import ornament from "../../assets/svg/ornament4.svg";

const Card = () => {
  return (
    <div className="min-w-screen py-10 px-48 flex items-center justify-cente bg-green-200 font-poppins">
      <div className="relative max-w-5xl w-full mx-auto py-6 sm:px-6 lg:px-8">
        <div className="absolute right-[-15%]">
          <img src={ornament} alt="" />
        </div>
        <h1 className="mb-20 text-5xl font-bold text-center text-base">Kenapa Donasi Di PeduliHub?</h1>
        <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
          <div className="w-full lg:w-1/3">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-[15px] border-primary">
              <div className="icon w-20 p-3 ">
                <img src={Icon1} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-lg text-base pb-5">Aman Dan terpercaya</h1>
                <div className="text-sm text-base_100 leading-relaxed">Semua galang dana yang dibuat sudah melalui proses kurasi dan verifikasi secara akurat oleh tim kami</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-[15px] border-secondary">
              <div className="icon w-20 p-3 ">
                <img src={Icon2} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-lg text-base pb-5">Mudah dan Cepat</h1>
                <div className="text-sm text-base_100 leading-relaxed">Proses donasi kamu lakukan hanya dalam hitungan menit dengan berbagai metode pembayaran</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="widget w-full p-4 rounded-lg bg-white border-l-[15px] border-danger">
              <div className="icon w-20 p-3 ">
                <img src={Icon3} alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-lg text-base pb-5">Transparan</h1>
                <div className="text-sm text-base_100 leading-relaxed">Pencairan dan penggunaan donasi yang sudah diterima penggalang dana dapat dilihat di update aktivitas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
