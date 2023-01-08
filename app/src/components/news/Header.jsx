import React from "react";
import bg from "../../assets/img/Group28.png";
import searchIcon from "../../assets/svg/search.svg";
import notifIcon from "../../assets/svg/notif.svg";

const Header = () => {
  return (
    <section className="relative w-full h-[400px] font-poppins">
      <div className="absolute z-10 px-48 inset-y-1/2">
        <div className="flex justify-center">
          <h1 className="font-bold text-[60px] text-accent leading-none">
            Peduli Berita <br />
            <span className="text-white">seputar kemanusiaan</span><span className="text-[70px]">.</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-[400px]">
        <img src={bg} alt="" className="object-fit w-full" />
      </div>
    </section>
  );
};

export default Header;
