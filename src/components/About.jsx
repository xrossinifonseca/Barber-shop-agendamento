import React from "react";
import barbershop from "../assets/barbershop.jpg";

const About = () => {
  return (
    <section className="w-full h-auto mt-10 ">
      <div className="w-full p-4 flex flex-col  items-center sm:flex-row justify-center sm:space-x-4 lg:space-x-8">
        <div className="w-[250px] flex h-[150px]  justify-center  relative border-2 border-yellow-500 lg:w-[400px] lg:h-[250px]">
          <img src={barbershop} className="absolute -left-4 top-4   w-full " />
        </div>
        <div className=" space-y-2  sm:w-1/2 flex flex-col items-center mt-10 sm:mt-0 lg:w-[30%]  lg:items-start">
          <h1 className="text-white font-bold text-2xl lg:text-4xl">
            SEU <span className="text-yellow-500">NOVO</span> <br /> ESTILO
            PERFEITO
          </h1>
          <p className="text-secondary-300 font-regular text-justify">
            Dois amigos, desde adolescentes, adoravam fazer fades e vários
            cortes de cabelo para os amigos. Depois de alguns anos de
            experiência trabalhando para barbearias em todo o Rio de Janeiro,
            eles decidiram abrir sua própria barbearia. Eles oferecem todos os
            tipos de serviços de cabelo, barba e bigode, além de sprays e cremes
            de marca própria para os clientes que desejam continuar com os
            cuidados em casa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
