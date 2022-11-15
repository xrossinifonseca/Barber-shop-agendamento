import React from "react";
import { useState } from "react";

import bannerlogin from "../assets/bannerLogin.jpg";
import { Login, Register } from "../components";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(true);

  const toggleLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };
  const toggleRegister = () => {
    setOpenLogin(false);
    setOpenRegister(true);
  };

  return (
    <section className="w-full  flex flex-col items-center justify-center  ">
      <nav className="w-full p-4 text-center">
        <Link to="/">
          <h1 className="text-white font-semibold text-[15px] sm:text-xl ">
            BARBER <span className="text-yellow-500">SHOP</span>
          </h1>
        </Link>
      </nav>
      <div className="w-full  sm:w-1/2   bg-color-secondary  text-white flex mt-10">
        <div className="w-1/2 hidden lg:block  ">
          <img src={bannerlogin} className="object-contain" alt="banner-login" />
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center p-4  ">
            <span
              className={`h-8 flex items-center justify-center border rounded-tl-2xl rounded-bl-2xl text-[14px] border-yellow-500 lg:cursor-pointer  text-white  w-16 text-center ${
                openLogin === true ? "bg-yellow-500" : ""
              }  `}
              onClick={() => toggleLogin()}
            >
              Login
            </span>
            <span
              className={`border flex items-center justify-center  rounded-tr-2xl rounded-br-2xl border-l-0 text-[14px] border-yellow-500 lg:cursor-pointer text-white w-16 text-center ${
                openRegister === true ? "bg-yellow-500 " : ""
              }  `}
              onClick={() => toggleRegister()}
            >
              Registrar
            </span>
          </div>

          {openLogin && <Login />}
          {openRegister && <Register />}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
