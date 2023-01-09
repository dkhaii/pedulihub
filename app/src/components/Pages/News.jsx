import React from "react";
import Footer from "../landingpage/Footer";
import Navbar from "../landingpage/Navbar";
import Header from "../news/Header";
import NewsList from "../news/NewsList";
import Paginator from "../news/Paginator";

const News = () => {
  return (
    <>
      <Navbar />
      <Header />
      <NewsList />
      <Paginator/>
      <Footer />
    </>
  );
};

export default News;
