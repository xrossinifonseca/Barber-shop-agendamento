import React from "react";
import { useStateContext } from "../context/StateContext";

const ChoseTime = ({ choseHours }) => {
  const { setGetHour, getHour } = useStateContext();

  const morningHours = (hour) => {
    return hour.filter((item) => item < "12:00");
  };

  const afternoonHours = (hour) => {
    return hour.filter((item) => item > "12:00");
  };

  const choseHour = (hour) => {
    setGetHour(hour);
  };

  return (
    <div className=" flex flex-col font-light   mt-5 p-2  ">
      <h1>Manhã</h1>
      <div className="flex flex-wrap bg">
        {/* {choseHour().length <= 0 && <p>Sem horário disponivel.</p>} */}

        {morningHours(choseHours()).map((hour) => (
          <span
            key={hour}
            className={`${
              getHour === hour ? "bg-primary-200" : "bg-yellow-500"
            }  w-24 h-8 m-1 pt-1 text-center rounded-lg text-white lg:cursor-pointer lg:hover:opacity-50`}
            onClick={() => choseHour(hour)}
          >
            {hour}
          </span>
        ))}
      </div>

      <h1>Tarde</h1>
      <div className="flex flex-wrap bg">
        {afternoonHours(choseHours()).map((hour) => (
          <span
            key={hour}
            className={`${
              getHour === hour ? "bg-primary-200" : "bg-yellow-500"
            }  w-24 h-8 m-1 pt-1 text-center rounded-lg text-white lg:cursor-pointer lg:hover:opacity-50`}
            onClick={() => setGetHour(hour)}
          >
            {hour} pm
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChoseTime;
