import React from "react";
import { barbers } from "../constants";
import { useStateContext } from "../context/StateContext";
const Barbers = () => {
  const { setGetBarber, setMovPhases } = useStateContext();

  const choseBarber = (barber) => {
    setGetBarber(barber);

    setMovPhases((prev) => prev + 1);
  };

  return (
    <>
      <div className="w-full h-[80%] mt-5 overflow-auto">
        <h1 className="text-white text-xl font-medium">Selecione o Barbeiro</h1>
        <div className="w-full h-auto space-y-5 mt-5 ">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="relative w-full flex items-center space-x-2  border-b border-primary-200 h-auto p-2 lg:cursor-pointer lg:hover:border-yellow-500"
              value={barber.name}
            >
              <img
                src={barber.avatar}
                className="rounded-full w-[20%] sm:w-[8%]"
              />
              <h1 className="text-white">{barber.name}</h1>

              <span
                className="absolute right-5 bottom-14 text-yellow-500  sm:cursor-pointer hover:opacity-20"
                onClick={() => choseBarber(barber.name)}
              >
                Selecionar
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Barbers;
