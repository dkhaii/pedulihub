import React, { useState } from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import Post from "../dashboardUser/Post";
import img from "../../assets/img.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const DashboardFundraiser = () => {
  const [datas, setDatas] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const showAllData = () => {
    axios
      .get(`http://localhost:8001/api/fundraiser/list-galang-dana`, {
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        console.log("data: ", response.data.data);
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
        {Object.values(datas).map((post) => {
          return (
            <Post
              key={post.id}
              content={{
                imgUrl: post.title_img,
                title: post.title,
                desc: post.description,
                category: post.category_id,
              }}
            />
          );
        })}
        <Post
          content={{
            imgUrl: img,
            title: "anjay mabar",
            desc: "asdfsadkfjlksadfjlksf",
            category: "bencana alam",
          }}
        />
      </div>
    </>
  );
};

export default DashboardFundraiser;
