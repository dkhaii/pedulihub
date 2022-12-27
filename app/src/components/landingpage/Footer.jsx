import React, { useState } from "react";
import DonasiButton from "./DonasiButton";

const Footer = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div className="ml-10 min-w-min">
        <h1 className="w-full text-3xl font-bold text-accent">
          Peduli<span className="text-secondary">Hub.</span>
        </h1>
        <p>
          PeduliHub telah memiliki izin pengumpulan uang di Kementrian <br />
          Sosial Republik Indonesia dan tanda daftar penyelenggara
          <br /> sistem elektronik di Kementrian Komunikasi dan Informatika <br /> Republik Indonesia
        </p>
      </div>
      <div>
        <span className=" text-secondary font-bold">TUNJUKAN AKSIMU</span>
        <a className="link link-hover">Donasi</a>
        <a className="link link-hover">Menggalang Dana</a>
      </div>
      <div>
        <span className=" text-secondary font-bold">KONATAK KAMI</span>
        <a className="link link-hover">+62 812 1212 1234e</a>
        <a className="link link-hover">pedulihub@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
