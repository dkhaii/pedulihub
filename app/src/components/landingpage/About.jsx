import React, { useState } from "react";
import ilustrasi from "../../assets/illustrasi1.png";

const About = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] ml-20 grid md:grid-cols-2">
        <div className="flex flex-col justify-center mx-auto">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Apa Itu PeduliHub.?</h1>
          <p>
            Lörem ipsum tit monoda i kahäling. Egogisk håbesade, och rände mömedor. Åsiktstaliban övöföhar kijudade. Pseudosoledes bespehasade på stenonas intradomönt i kontramera. Nyvis hemirens på doheska: spebel. Spektig rerad i derar.
            Bektigt tent deliga dirat antilig. Du kan vara drabbad.
          </p>
        </div>
        <div>
          <img className="w-[440px] h-[385] mx-auto my-4" src={ilustrasi} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
