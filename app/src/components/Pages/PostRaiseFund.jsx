import React from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import InputField from "../dashboardFundraiser/InputField";
import ButtonSubmit from "../login/ButtonSubmit";
import CategorySelect from "../dashboardFundraiser/CategorySelect";
import WeekSelect from "../dashboardFundraiser/WeekSelect";
import FileInput from "../dashboardFundraiser/FileInput";
import HeaderTitle from "../dashboardFundraiser/HeaderTitle";

const PostRaiseFund = () => {
  return (
    <>
      <div className="px-40">
        <DashboardNav />
        <HeaderTitle content={{
          titlePrimary: 'GALANG',
          titleSecondary: 'DANA',
        }}/>
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
