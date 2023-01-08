import React from "react";
import ilustrasi from "../../assets/img/ilustrasi2.png";
import ornament from "../../assets/svg/ornament2.svg";
import ornament2 from "../../assets/svg/ornament3.svg";

const Deskripsi = () => {
  return (
    <>
      <div className="w-full bg-white py-16 font-poppins">
        <div className="absolute left-0">
          <img src={ornament} alt="" />
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[440px] h-[385] mx-auto my-4" src={ilustrasi} alt="/" />
          <div className="flex flex-col justify-center">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-base">Keseriusan Kami</h1>
            <p className="text-base_100 leading-relaxed">
              Lörem ipsum tit monoda i kahäling. Egogisk håbesade, och rände mömedor. Åsiktstaliban övöföhar kijudade. Pseudosoledes bespehasade på stenonas intradomönt i kontramera. Nyvis hemirens på doheska: spebel. Spektig rerad i derar.
              Bektigt tent deliga dirat antilig. Du kan vara drabbad.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-0">
        <img src={ornament2} alt="" />
      </div>
    </>
  );
};

export default Deskripsi;
