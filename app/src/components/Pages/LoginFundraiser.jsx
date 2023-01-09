import React, { useState } from "react";
import FormInput from "../login/FormInput";
import emailIcon from "../../assets/svg/email.svg";
import lockIcon from "../../assets/svg/lock.svg";
import googleLogo from "../../assets/svg/logogoogle.svg";
import ButtonSubmit from "../login/ButtonSubmit";
import GoogleButton from "../login/GoogleButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter a valid email and password");
      return;
    }

    axios
      .post(
        `http://localhost:8001/api/fundraiser/login`,
        {
          email: email,
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
        console.log("data: ", response.data);
        localStorage.setItem("token", response.data.token);
        return navigate("/fundraiser/dashboard");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        return alert(`Gagal Login! ${error.response.data.message}`);
      });

    setEmail("");
    setPassword("");
    setError(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full font-poppins">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover bg-[url('assets/img/login.png')] bg-no-repeat bg-cover" />
      </div>

      <div className="bg-white flex flex-col justify-center rounded-md shadow-xl">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
            <h1 className="text-5xl font-bold text-center text-accent">
              Galang <span className="text-secondary">Dana</span>
            </h1>
            <h1 className="text-3xl mt-3 font-bold text-center text-black">Masuk ke Akun Anda</h1>
            <form onSubmit={handleSubmit} className="mt-6">
              <FormInput
                content={{
                  icon: emailIcon,
                  fieldName: "Email",
                  name: "email",
                }}
                handleInput={setEmail}
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
                  button: "Masuk",
                }}
              />
              <div className="flex items-center justify-between mt-3">
                <label className="flex items-center text-sm text-gray-600">
                  <input className="form-checkbox" type="checkbox" />
                  <span className="ml-2">Ingat saya</span>
                </label>
                <a className="inline-block align-baseline font-semibold text-sm text-green-500 hover:text-green-800" href="#">
                  Lupa Password?
                </a>
              </div>
            </form>
            <div className="relative flex items-center justify-center w-full mt-6 border border-t">
              <div className="absolute px-5 bg-white">Atau</div>
            </div>
            <div className="flex mt-4 gap-x-2">
              <GoogleButton
                content={{
                  icon: googleLogo,
                }}
              />
            </div>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {" "}
              Baru di PeduliHub?{" "}
              <Link to="/fundraiser/register" className="font-medium text-green-600 hover:underline">
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
