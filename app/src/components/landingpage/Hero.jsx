import React from "react";
import Counter from "./Counter";
import DonasiButton from "./DonasiButton";

const Hero = () => {
  return (
    <>
      <section className="realtive px-48 bg-[url('assets/bg.png')] h-[780px] font-poppins">
        <div className="absolute inset-y-1/4 max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold text-accent">
            Cara Mudah <br />
            Untuk Membantu Sesama
          </h1>
          <p className="mb-5 text-white text-lg">Di PeduliHub, kamu bisa menjadi jembatan kebaikan untuk mereka yang membutuhkan bantuan</p>
          <DonasiButton
            content={{
              button: "Donasi Sekarang",
            }}
          />
        </div>
        <div className="absolute inset-y-[72%] z-20">
          <Counter />
        </div>
      </section>
    </>
  );
};

export default Hero;
