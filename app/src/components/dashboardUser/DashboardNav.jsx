import React from "react";
import searchIcon from "../../assets/svg/search.svg";
import notifIcon from "../../assets/svg/notif.svg";
import CategoryNav from "./CategoryNav";
import { useNavigate } from "react-router";
import { Spin as Hamburger } from "hamburger-react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardNav = ({ handleInput }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/landing");
    }
  }, []);

  return (
    <nav className="bg-white pt-7 font-poppins">
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
        <Hamburger rounded onToggle={() => setTrigger((prev) => !prev)} />
        <div
          className={trigger ? "flex justify-center p-6 bg-white absolute top-20 right-0 min-w-full shadow-lg sidebar text-secondary" : "hidden justify-center p-6 bg-white absolute top-20 right-0 min-w-full shadow-lg sidebar text-white"}
        >
          <ul className="list-none flex flex-col justify-center items-center">
            <li className="mb-4">
              <Link to="/" className="transition duration-300 hover:text-accent">
                HOME
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/" className="transition duration-300 hover:text-accent">
                SETTING
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/" className="transition duration-300 hover:text-accent">
                DONATION
              </Link>
            </li>
            <li className="">
              <Link to="/" className="transition duration-300 hover:text-accent">
                LOG OUT
              </Link>
            </li>
          </ul>
        </div>
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
