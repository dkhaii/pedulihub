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
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="px-48 py-20">
        <About></About>
        <Deskripsi></Deskripsi>
      </section>
      <Card></Card>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
