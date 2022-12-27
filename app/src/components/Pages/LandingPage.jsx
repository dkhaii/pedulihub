import React from "react";
import Navbar from "../landingpage/Navbar";
import Hero from "../landingpage/Hero";
import About from "../landingpage/About";
import Deskripsi from "../landingpage/Deskripsi";
import Card from "../landingpage/Card";
import Footer from "../landingpage/Footer";

const LandingPage = () => {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Deskripsi></Deskripsi>
        <Card></Card>
        <Footer></Footer>
      </section>
    </>
  );
};

export default LandingPage;
