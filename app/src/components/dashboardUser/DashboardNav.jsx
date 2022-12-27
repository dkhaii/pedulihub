import React from "react";
import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";
import CategoryNav from "./CategoryNav";

const DashboardNav = () => {
  return (
      <nav className="bg-white pt-7">
        <div className="flex justify-between gap-10">
          <div className="text-[25px] font-bold">
            <h1 className="text-accent">
              Peduli<span className="text-secondary">Hub</span>
            </h1>
          </div>
          <div className="flex items-center w-full">
            <div className="flex border border-gray-600 py-2 px-4 rounded-md w-full">
              <img className="w-[24px]" src={searchIcon} alt="search-icon" />
              <form action="">
                <input className="pl-2 outline-none border-none w-full" type="text" placeholder="Search" />
              </form>
            </div>
          </div>
          <img className="w-[32px]" src={notifIcon} alt="search-icon" />
          <div className="bg-slate-500 p-6 rounded-full"></div>
        </div>
        <div className="flex items-center pt-3 gap-2">
          <h1 className="pr-5 text-gray-600">Category: </h1>
          <CategoryNav content={{ 
            title: 'anak-anak'
           }}/>
          <CategoryNav content={{ 
            title: 'anak-anak'
           }}/>
          <CategoryNav content={{ 
            title: 'anak-anak'
           }}/>
          <CategoryNav content={{ 
            title: 'anak-anak'
           }}/>
        </div>
      </nav>
  );
};

export default DashboardNav;
