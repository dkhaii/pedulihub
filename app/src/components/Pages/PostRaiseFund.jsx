import React from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import InputField from "../dashboardFundraiser/InputField";
import ButtonSubmit from "../login/ButtonSubmit";
import CategorySelect from "../dashboardFundraiser/CategorySelect";
import WeekSelect from "../dashboardFundraiser/WeekSelect";
import FileInput from "../dashboardFundraiser/FileInput";
import HeaderTitle from "../dashboardFundraiser/HeaderTitle";
import { useState } from "react";
import axios from "axios";

const PostRaiseFund = () => {
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [funds, setFunds] = useState("");
  const [endsAt, setEndsAt] = useState("");
  const [titleImg, setTitleImg] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const token = localStorage.getItem("token");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `http://localhost:8001/api/fundraiser/galang-dana`,
        {
          title: title,
          description: description,
          category_id: categoryId,
          funds: funds,
          ends_at: endsAt,
          title_img: titleImg,
          img1: img1,
          img2: img2,
          img3: img3,
        },
        {
          header: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.data);
        return alert("Berhasil Membuat Galang Dana");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        return alert("Gagal Membuat Galang Dana");
      });
  };

  return (
    <>
      <div className="px-40">
        <DashboardNav />
        <HeaderTitle
          content={{
            titlePrimary: "GALANG",
            titleSecondary: "DANA",
          }}
        />
        <div className="px-40 py-10">
          <form onSubmit={handleSubmit}>
            <InputField
              content={{
                label: "Masukkan Judul :",
                type: "text",
              }}
            />
            <InputField
              content={{
                label: "Masukkan Deskripsi atau Cerita :",
                type: "text",
              }}
            />
            <CategorySelect />
            <InputField
              content={{
                label: "Masukkan Jumlah Dana yang Dibutuhkan :",
                type: "text",
              }}
            />
            <WeekSelect />
            <div className="flex flex-row gap-20">
              <FileInput
                content={{
                  label: "Masukkan Foto Judul :",
                }}
              />
              <FileInput
                content={{
                  label: "Masukkan Foto 1 :",
                }}
              />
            </div>
            <div className="flex flex-row gap-20">
              <FileInput
                content={{
                  label: "Masukkan Foto 2 :",
                }}
              />
              <FileInput
                content={{
                  label: "Masukkan Foto 3 :",
                }}
              />
            </div>
            <ButtonSubmit
              content={{
                button: "POST",
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PostRaiseFund;
