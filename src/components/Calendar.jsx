import React from "react";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ChoseTime from "../components/ChoseTime";
import {
  weekDays,
  months,
  renderCalendar,
  dateTime,
  openingHours,
  presentDay,
} from "../utils/date.js";
import { useEffect } from "react";
import { getBooking } from "../api/api";
import { useStateContext } from "../context/StateContext";

const Calendar = () => {
  const [dateMonth, setDateMonth] = useState(dateTime.getMonth());
  const [booking, setBooking] = useState([]);
  const [messageLoading, setMessageLoading] = useState(true);
  const [changeColor, setChangeColor] = useState();

  const { getDateService, setGetDateService } = useStateContext();

  let currYear = dateTime.getFullYear().toString();
  let currentDate = `${months[dateMonth]} ${currYear}`;

  const lastDate = [];
  const days = [];
  const nextMonthDay = [];

  // logica calendario
  renderCalendar(
    dateMonth,
    lastDate,
    days,
    nextMonthDay,
    setDateMonth,
    currYear
  );

  useEffect(() => {
    (async () => {
      const response = await getBooking();
      setBooking(response.data);
      setMessageLoading(false);
    })();
  }, []);

  const choseDay = (day, currentMonth) => {
    let current = `${months[dateTime.getMonth()]} ${currYear}`;
    let dayAndMonth = `${day} ${currentMonth}`;

    if (day < dateTime.getDate() && currentMonth === current) {
      return;
    }

    setChangeColor(day);

    return setGetDateService(dayAndMonth);
  };

  const validHours = () => {
    let unavailableHours = [];

    booking.find((booking) => {
      if (booking.date === getDateService) {
        unavailableHours.push(booking.hour);
      }
    });

    let availableTime = [];

    openingHours.filter((items) => {
      const reservedTime = unavailableHours.find((hour) => hour === items);
      if (items !== reservedTime) {
        availableTime.push(items);
      }
    });

    let hourNow = `${dateTime.getHours()}:00`;

    if (presentDay === getDateService) {
      return availableTime.filter((hour) => hour > hourNow);
    }

    return availableTime;
  };

  return (
    <div className="w-full  h-[80%] mt-5 overflow-auto">
      <h1 className="text-white text-xl font-medium">
        Selecione a data e a hora de sua preferência
      </h1>
      <div className="w-full flex flex-col sm:flex-row justify-center">
        <div className=" mt-5 w-full sm:w-1/2  sm:border border-primary-200 p-2  text-white ">
          <div className=" flex justify-between border-b border-primary-200 ">
            <h3 className=" text-xl font-regular">{currentDate}</h3>

            <span className="flex font-bold  text-2xl ">
              <IoIosArrowBack
                onClick={() => setDateMonth((prev) => prev - 1)}
                className="lg:hover:cursor-pointer"
              />
              <IoIosArrowForward
                onClick={() => setDateMonth((prev) => prev + 1)}
                className="lg:hover:cursor-pointer"
              />
            </span>
          </div>

          <div className="   grid grid-cols-7  gap-x-2 gap-y-2  text-center   font-ligth ">
            {weekDays.map((week) => (
              <span
                key={week}
                className="w-10 flex items-center justify-center h-10 text-base   "
              >
                {week}
              </span>
            ))}

            {lastDate.map((last) => (
              <span
                key={last}
                className="w-10 flex items-center justify-center h-10 text-base  opacity-70 "
              >
                {last}
              </span>
            ))}
            {days.map((day) => (
              <span
                key={day}
                className={`w-10 flex items-center justify-center h-10 text-base lg:hover:cursor-pointer hover:opacity-30 ${
                  day === dateTime.getDate() &&
                  months[dateMonth] === months[dateTime.getMonth()]
                    ? " bg-primary-200"
                    : "bg-trasparent"
                } border border-primary-200  rounded-full ${
                  changeColor === day ? "bg-yellow-500" : ""
                } `}
                onClick={() => choseDay(day, currentDate)}
              >
                {day}
              </span>
            ))}

            {nextMonthDay.map((first) => (
              <span
                key={first}
                className="w-10 flex items-center justify-center h-10 text-base opacity-70 "
              >
                {first}
              </span>
            ))}
          </div>
        </div>

        <div className=" sm:w-1/2 p-2 text-secondary-300 flex flex-col items-center">
          <h5 className=" ">Disponível em {getDateService} </h5>
          {messageLoading === true ? (
            <h1>Cerregando horários...</h1>
          ) : (
            <ChoseTime choseHours={validHours} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
