import React from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import Post from "../dashboardUser/Post";
import img from "../../assets/img.jpg"

const DashboardUser = () => {
  return (
    <>
      <div className="px-40">
        <DashboardNav />
      </div>
      <div className="px-10 flex justify-center flex-wrap gap-5 pt-10">
        <Post content={{ 
          imgUrl: img,
          title: 'tolong kami kak',
          desc: "asdlfjsadfjsaf",
          funds: "Rp. 5.000.000",
          category: "anak-anak",
        }}/>
        <Post content={{ 
          imgUrl: img,
          title: 'tolong kami kak',
          desc: "asdlfjsadfjsaf",
          funds: "Rp. 5.000.000",
          category: "anak-anak",
        }}/>
        <Post content={{ 
          imgUrl: img,
          title: 'tolong kami kak',
          desc: "asdlfjsadfjsaf",
          funds: "Rp. 5.000.000",
          category: "anak-anak",
        }}/>
        <Post content={{ 
          imgUrl: img,
          title: 'tolong kami kak',
          desc: "asdlfjsadfjsaf",
          funds: "Rp. 5.000.000",
          category: "anak-anak",
        }}/>
      </div>
    </>
  );
};

export default DashboardUser;
