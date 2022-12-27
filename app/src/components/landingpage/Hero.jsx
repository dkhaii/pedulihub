import React, { useState } from "react";
import DonasiButton from "./DonasiButton";

const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="hero min-h-screen bg-[url('assets/bg.png')]">
      <div className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-accent">Cara Mudah Untuk Membantu Sesama</h1>
          <p className="mb-5">Di PeduliHub, kamu bisa menjadi jembatan kebaikan untuk mereka yang membutuhkan bantuan</p>
          <DonasiButton
            content={{
              button: "Donasi Sekarang",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
