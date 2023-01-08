import React, { useState } from "react";
import facebook from "../../assets/svg/facebook.svg";
import whatsapp from "../../assets/svg/whatsapp.svg";
import youtube from "../../assets/svg/youtube.svg";
import instagram from "../../assets/svg/instagram.svg";
import phone from "../../assets/svg/phone.svg";
import email from "../../assets/svg/email.svg";

const Footer = () => {
  return (
    <footer className="text-base-content h-[350px] font-poppins">
      <div className="relative bg-secondary h-full w-full">
        <div className="absolute bg-white rounded-bl-[150px] w-full shadow-xl  px-48 py-10 flex justify-between gap-20">
          <div className="flex flex-col max-w-md">
            <h1 className="w-full text-3xl font-bold text-accent pb-5">
              Peduli<span className="text-secondary">Hub</span>
            </h1>
            <p className="leading-relaxed text-base_100 text-sm">
              PeduliHub telah memiliki izin pengumpulan uang di Kementrian Sosial Republik Indonesia dan tanda daftar penyelenggara sistem elektronik di Kementrian Komunikasi dan Informatika Republik Indonesia
            </p>
            <div className="flex gap-10 pt-5 pb-10">
              <img src={facebook} alt="" />
              <img src={whatsapp} alt="" />
              <img src={youtube} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="flex flex-col min-w-max">
            <h1 className=" text-secondary font-bold mb-5">TUNJUKAN AKSIMU</h1>
            <ul className="list-none text-base_100 text-sm">
              <li className="mb-5">
                <a href="">Donasi</a>
              </li>
              <li>
                <a href="">Menggalang Dana</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col min-w-max">
            <h1 className=" text-secondary font-bold mb-5">KONTAK KAMI</h1>
            <ul className="list-none text-base_100 text-sm">
              <li className="mb-5 flex gap-3">
                <img src={phone} alt="" />
                <a href="">+62 812 1212 1234</a>
              </li>
              <li className="flex gap-3">
                <img src={email} alt="" className="w-4"/>
                <a href="">pedulihub@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
