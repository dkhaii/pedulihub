import React from "react";
import Counter from "./Counter";
import DonasiButton from "./DonasiButton";

const Hero = () => {
  return (
    <>
      <section className="relative px-48 bg-[url('assets/img/bg.png')] bg-no-repeat bg-cover bg-center bg-fixed h-[780px] font-poppins">
        <div className="flex flex-col justify-center h-full max-w-3xl">
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
        <div className="absolute inset-x-0 top-[95%]">
          <div className="flex justify-center">
            <Counter />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
