import React from "react";
import searchIcon from "../../assets/search.svg";
import notifIcon from "../../assets/notif.svg";
import CategoryNav from "./CategoryNav";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect } from "react";

const DashboardNav = ({ handleInput }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/landing");
    }
  }, []);

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
            <input className="pl-2 outline-none border-none w-full" type="text" placeholder="Search" onChange={(e) => handleInput(e.target.value)} />
          </div>
        </div>
        <img className="w-[32px]" src={notifIcon} alt="search-icon" />
        <div className="bg-slate-500 p-6 rounded-full"></div>
      </div>
      <div className="flex items-center pt-3 gap-2">
        <h1 className="pr-5 text-gray-600">Category: </h1>
        <CategoryNav
          content={{
            title: "anak-anak",
          }}
        />
        <CategoryNav
          content={{
            title: "anak-anak",
          }}
        />
        <CategoryNav
          content={{
            title: "anak-anak",
          }}
        />
        <CategoryNav
          content={{
            title: "anak-anak",
          }}
        />
      </div>
    </nav>
  );
};

export default DashboardNav;
