import React from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import Post from "../dashboardUser/Post";
import img from "../../assets/img.jpg";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const DashboardUser = () => {
  const [datas, setDatas] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const showAllData = () => {
    axios
      .get(`http://localhost:8001/api/donasi/pilihan-donasi`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        console.log("datas: ", response.data.data);
        return setDatas(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    if (!token) {
      navigate("/landing");
    }

    showAllData();
  }, []);

  return (
    <>
      <div className="px-40">
        <DashboardNav />
      </div>
      <div className="px-10 flex justify-center flex-wrap gap-5 pt-10">
        {datas.map((post) => {
          return (
            <Post
              key={post.id}
              content={{
                imgUrl: post.title_img,
                title: post.title,
                desc: post.description,
                funds: post.funds,
                category: post.category_id,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default DashboardUser;
