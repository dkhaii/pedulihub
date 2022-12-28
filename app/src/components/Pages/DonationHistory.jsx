import React from "react";
import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";
import Table from "../dashboardFundraiser/Table";

const DonationHistory = () => {
  return (
    <>
      <div className="px-40 ">
        <nav className="bg-white pt-7">
          <div className="flex justify-between gap-10">
            <div className="text-[25px] font-bold">
              <h1 className="text-accent">
                Peduli<span className="text-secondary">Hub</span>
              </h1>
            </div>
            <div className="flex items-center w-full"></div>
            <img className="w-[32px]" src={notifIcon} alt="search-icon" />
            <div className="bg-slate-500 p-6 rounded-full"></div>
          </div>
        </nav>
      </div>
      <div className="px-40 mt-10">
        <div className="justify-start grid md:grid-cols-2">
          <div className="justify-self-start">
            <button type="submit" className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
              Ekspor
            </button>
          </div>
          <div className="flex border border-gray-600 py-2 px-4 rounded-md">
            <img className="w-[24px]" src={searchIcon} alt="search-icon" />
            <form action="">
              <input className="pl-2 outline-none border-none w-full" type="text" placeholder="Search" />
            </form>
          </div>
        </div>

        <div className="mt-5">
          <Table></Table>
        </div>
      </div>
    </>
  );
};

export default DonationHistory;
