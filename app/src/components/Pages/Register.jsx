import React, { useState, useEffect } from "react";
import FormInput from "../login/FormInput";
import lockIcon from "../../assets/lock.svg";
import googleLogo from "../../assets/logogoogle.svg";
import userIcon from "../../assets/usericon.svg";
import ButtonSubmit from "../login/ButtonSubmit";
import GoogleButton from "../login/GoogleButton";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !username || !password) {
      setError("Please fill out all fields");
      return;
    }

    axios
      .post(
        `http://localhost:8001/api/donasi/registrasi`,
        {
          name: name,
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        return alert("Berhasil Registrasi, silahkan login :)");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        return alert(`Gagal Registrasi! ${error.response.data.message}`);
      });

    setName("");
    setUsername("");
    setPassword("");
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
              <Link to="/login" className="font-medium text-green-600 hover:underline">
                Masuk
              </Link>
            </p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <FormInput
                content={{
                  icon: userIcon,
                  fieldName: "Full Name",
                  name: "name",
                }}
                handleInput={setName}
              />
              <FormInput
                content={{
                  icon: userIcon,
                  fieldName: "Username",
                  name: "username",
                }}
                handleInput={setUsername}
              />
              <FormInput
                content={{
                  icon: lockIcon,
                  fieldName: "Password",
                  name: "password",
                }}
                handleInput={setPassword}
              />
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
