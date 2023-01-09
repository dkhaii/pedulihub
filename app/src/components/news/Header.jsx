import React from "react";
import bg from "../../assets/img/Group28.png";

const Header = () => {
  return (
    <section className="w-full px-48 font-poppins bg-[url('assets/img/Group28.png')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="z-10 pt-48 pb-32">
        <h1 className="font-bold text-[60px] text-accent leading-none">
          Peduli Berita <br />
          <span className="text-white">seputar kemanusiaan</span>
          <span className="text-[70px]">.</span>
        </h1>
      </div>
    </section>
  );
};

export default Header;
