import React from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import Post from "../dashboardUser/Post";
import img from "../../assets/img.jpg";

const DashboardFundraiser = () => {
  return (
    <>
      <div className="px-40">
        <DashboardNav />
      </div>
      <div className="px-10 flex justify-center flex-wrap gap-5 pt-10">
        <Post
          content={{
            imgUrl: img,
            title: "anjay mabar",
            desc: "asdfsadkfjlksadfjlksf",
            category: "bencana alam",
          }}
        />
        <Post
          content={{
            imgUrl: img,
            title: "anjay mabar",
            desc: "asdfsadkfjlksadfjlksf",
            category: "bencana alam",
          }}
        />
        <Post
          content={{
            imgUrl: img,
            title: "anjay mabar",
            desc: "asdfsadkfjlksadfjlksf",
            category: "bencana alam",
          }}
        />
        <Post
          content={{
            imgUrl: img,
            title: "anjay mabar",
            desc: "asdfsadkfjlksadfjlksf",
            category: "bencana alam",
          }}
        />
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
