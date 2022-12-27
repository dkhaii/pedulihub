import React from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import InputField from "../dashboardFundraiser/InputField";
import ButtonSubmit from "../login/ButtonSubmit";
import CategorySelect from "../dashboardFundraiser/CategorySelect";
import WeekSelect from "../dashboardFundraiser/WeekSelect";
import FileInput from "../dashboardFundraiser/FileInput";

const PostRaiseFund = () => {
  return (
    <>
      <div className="px-40">
        <DashboardNav />
        <div className="flex justify-center items-center pt-10">
          <h1 className="text-4xl font-bold text-accent">
            GALANG <span className="text-secondary">DANA</span>
          </h1>
        </div>
        <div className="px-40 py-10">
          <form action="">
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
