import React from "react";
import bookImg from "../assets/booking.jpg";
import ButtonText from "./ButtonText";
import { useState } from "react";
import BookAppointment from "./BookAppointment ";

const Booking = () => {
  const [openBook, setOpenBook] = useState(false);

  return (
    <section name="booking" className="w-full mt-10 flex flex-col items-center">
      <h1 className="text-white text-2xl lg:text-4xl font-semibold  ">
        AGENDE UM <span className="text-yellow-500">HORÁRIO</span>
      </h1>
      <div className="w-full flex items-center justify-center mt-5 relative">
        <div className="  p-2 text-center flex flex-col items-center justify-center space-y-2 absolute bottom-18">
          <h5 className="text-secondary-300 text-xl sm:text-2xl lg:text-3xl ">
            Reserve uma cadeira
          </h5>
          <ButtonText
            type="button"
            text="Agendar"
            onClick={() => setOpenBook(true)}
          />
        </div>
        <img src={bookImg} alt="cadeira de barbearia" />
      </div>
      {openBook && <BookAppointment close={setOpenBook} />}
    </section>
  );
};

export default Booking;
