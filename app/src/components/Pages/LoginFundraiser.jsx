import React, { useState } from "react";
import FormInput from "../login/FormInput";
import emailIcon from "../../assets/email.svg";
import lockIcon from "../../assets/lock.svg";
import googleLogo from "../../assets/logogoogle.svg";
import ButtonSubmit from "../login/ButtonSubmit";
import GoogleButton from "../login/GoogleButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form values
    if (!email || !password) {
      setError("Please enter a valid email and password");
      return;
    }

    // Perform login logic here (e.g. make a request to a server)
    // ...

    // Reset form values and error message
    setEmail("");
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
            <h1 className="text-3xl mt-3 font-bold text-center text-black">Masuk ke Akun Anda</h1>
            <form onSubmit={handleSubmit} className="mt-6">
              <FormInput
                content={{
                  icon: emailIcon,
                  fieldName: "Email",
                }}
              />
              <FormInput
                content={{
                  icon: lockIcon,
                  fieldName: "Password",
                }}
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
              <a href="" className="font-medium text-green-600 hover:underline">
                Daftar Sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
