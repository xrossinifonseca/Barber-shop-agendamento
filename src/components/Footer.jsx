import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full mt-10 flex flex-col items-center ">
      <div className="w-[80%]  h-auto text-center sm:h-[100px] sm:flex sm:justify-between items-center  border-2 border-transparent border-t-yellow-500 ">
        <h1 className="text-white font-semibold mt-5 sm:mt-0 ">
          BARBER <span className="text-yellow-500">SHOP</span>
        </h1>
        <span>
          <h2 className=" text-white font-normal text-[15px]">ABERTO</h2>
          <h5 className=" text-secondary-300 text-[12px] ">
            Segunda - Sexta <br />
            8AM - 6PM
          </h5>
        </span>

        <span>
          <h2 className=" text-white text-[15px]">NOSSO ENDEREÇO</h2>
          <h5 className=" text-secondary-300 text-[12px]">
            Icaraí 233, Niteroi, RJ 24466-222
          </h5>
        </span>

        <span>
          <h2 className=" text-white text-[15px]">SIGA-NOS NAS REDES</h2>
          <span className="flex justify-center space-x-2 text-white">
            <AiOutlineFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </span>
        </span>
      </div>
      <div className="w-full h-auto bg-color-secondary text-center mt-5 pt-2">
        <h5 className="text-secondary-300 text-[12px] sm:text-[15px]">
          Copyright &copy; 2022 Barber Shop - Todos Os Direitos Reservados
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
