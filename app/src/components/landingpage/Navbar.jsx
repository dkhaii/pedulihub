import React, { useState } from "react";
import { Link } from "react-router-dom";
import DonasiButton from "./DonasiButton";

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? `fixed fade-in bg-white left-0 w-full px-48 py-8 flex justify-between items-center font-poppins z-20 shadow-md` : `fixed left-0 w-full px-48 py-8 flex justify-between items-center font-poppins z-20`}>
      <div className="font-bold text-[28px]">
        <Link to="/" className={color ? "text-accent" : "text-white"}>
          Peduli<span className="text-secondary">Hub</span>
        </Link>
      </div>
      <div className={color ? "flex text-base font-medium" : "flex text-white font-medium"}>
        <ul className="list-none flex justify-end items-center">
          <li className="mr-10">
            <Link to="/berita">Berita</Link>
          </li>
          <li className="mr-10">
            <Link to="/fundraiser/login">Galang Dana</Link>
          </li>
          <li className="shadow-md">
            <Link to='/login'>
              <DonasiButton
                content={{
                  button: "Donasi Sekarang",
                }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
