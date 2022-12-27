import React, { useState, useEffect } from "react";
import FormInput from "../login/FormInput";
import lockIcon from "../../assets/lock.svg";
import googleLogo from "../../assets/logogoogle.svg";
import userIcon from "../../assets/usericon.svg";
import ButtonSubmit from "../login/ButtonSubmit";
import GoogleButton from "../login/GoogleButton";
import axios from "axios";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form values
    if (!fullName || !userName || !password) {
      setError("Please fill out all fields");
      return;
    }
    // if (password !== confirmPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }

    const dataPost = {
      name: fullName,
      username: userName,
      password: password
    }

    axios.post(`http://localhost:8001/api/donasi/registrasi`, {dataPost})
    .then((response) => {
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })

    // Perform registration logic here (e.g. make a request to a server)
    // ...

    // Reset form values and error message
    setFullName("");
    setUserName("");
    setPassword("");
    // setConfirmPassword("");
    setError(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover bg-[url('assets/login.png')]" />
      </div>

      <div className="bg-white flex flex-col justify-center rounded-md shadow-xl">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
            <h1 className="text-2xl mt-3 font-bold text-center text-black">Daftar Akun Baru</h1>
            <div className="flex mt-4 gap-x-2">
              <GoogleButton
                content={{
                  icon: googleLogo,
                }}
              />
            </div>

            <p className="mt-3 text-xs font-light text-center text-gray-700">
              {" "}
              Sudah Punya Akun?{" "}
              <a href="/Login" className="font-medium text-green-600 hover:underline">
                Masuk
              </a>
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <FormInput
                content={{
                  icon: userIcon,
                  fieldName: "Full Name",
                }}
                handleInput={setFullName}
              />
              <FormInput
                content={{
                  icon: userIcon,
                  fieldName: "Username",
                }}
                handleInput={setUserName}
              />
              <FormInput
                content={{
                  icon: lockIcon,
                  fieldName: "Password",
                }}
                handleInput={setPassword}
              />
              {/* <FormInput
                content={{
                  icon: lockIcon,
                  fieldName: "Konfirmasi Password",
                }}
                handleInput={setConfirmPassword}
              /> */}
              {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
              <ButtonSubmit
                content={{
                  button: "Daftar",
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
