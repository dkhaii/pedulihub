import React from "react";
import DashboardNav from "../dashboardUser/DashboardNav";
import InputField from "../dashboardFundraiser/InputField";
import HeaderTitle from "../dashboardFundraiser/HeaderTitle";
import FileInput from "../dashboardFundraiser/FileInput";
import BankSelect from "../dashboardFundraiser/BankSelect";
import ButtonSubmit from "../login/ButtonSubmit";

const FundraiserDataRegister = () => {
  return (
    <>
      <div className="px-40">
        <DashboardNav />
        <HeaderTitle
          content={{
            titlePrimary: "REGISTRASI",
            titleSecondary: "DATA",
          }}
        />
        <div className="px-40 py-10">
          <form action="">
            <InputField
              content={{
                label: "Masukkan Nama Lengkap :",
                type: "text",
              }}
            />
            <InputField
              content={{
                label: "Masukkan Alamat Lengkap :",
                type: "text",
              }}
            />
            <FileInput
              content={{
                label: "Masukkan Foto Selfie :",
              }}
            />
            <InputField
              content={{
                label: "Masukkan NIK KTP :",
                type: "text",
              }}
            />
            <FileInput
              content={{
                label: "Masukkan Foto KTP :",
              }}
            />
            <InputField
              content={{
                label: "Masukkan No Telepon :",
                type: "text",
              }}
            />
            <BankSelect />
            <FileInput
              content={{
                label: "Masukkan File Kontrak :",
              }}
            />
            <ButtonSubmit content={{ 
              button: 'SUBMIT'
             }}/>
          </form>
        </div>
      </div>
    </>
  );
};

export default FundraiserDataRegister;
