import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ButtonText from "./ButtonText";
import { Barbers, Services, Calendar, ConfirmAppointment } from ".";
import { useStateContext } from "../context/StateContext";
import { AiOutlineArrowLeft } from "react-icons/ai";

const BookAppointment = ({ close }) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    booking,
    movPhases,
    setMovPhases,
    AppointmentSucess,
    navigate,
    buttonContinue,
  } = useStateContext();

  const closeAppointment = () => {
    close(false);
  };
  const token = localStorage.getItem("token");
  const handleSubmit = (e) => {
    e.preventDefault();

    booking();
    if (booking) {
      setOpenModal(false);
      close(false);
      return AppointmentSucess();
    }
  };

  const phases = [<Services />, <Barbers />, <Calendar />];

  const backPhases = () => {
    setMovPhases((prev) => prev - 1);
    if (movPhases <= 0) {
      setMovPhases(0);
    }
  };

  return (
    <section className="w-full min-h-screen fixed  top-0 z-50 flex items-center justify-center ">
      <div className="absolute top-0 w-full min-h-full bg-primary-200 opacity-60 z-20"></div>

      <div className="abolute z-50 w-full  lg:w-[70%] h-[500px] bg-color-secondary rounded-l-xl rounded-r-xl p-4 ">
        <div className="w-full  flex items-center justify-between text-white  text-[30px]">
          <h1 className="text font-semibold text-[15px] sm:text-xl ">
            BARBER <span className="text-yellow-500">SHOP</span>
          </h1>
          <AiOutlineCloseCircle
            className="lg:cursor-pointer"
            onClick={() => closeAppointment()}
          />
        </div>

        {!token ? (
          <div className="w-full flex flex-col items-center justify-center h-full space-y-2 ">
            <h1 className="text-white font-regular text-center sm:text-2xl">
              Faça login para resevar um horário
            </h1>
            <ButtonText
              type="text"
              text="login"
              onClick={() => navigate("/login")}
            />
          </div>
        ) : (
          <form className="w-full h-full" onSubmit={handleSubmit}>
            {openModal && <ConfirmAppointment close={setOpenModal} />}

            {phases[movPhases]}

            <div className="w-full mt-2 p-2 flex items-center justify-between ">
              <AiOutlineArrowLeft
                className={`${
                  movPhases === 0
                    ? "text-secondary-300 opacity-25"
                    : "text-white"
                }  font-semibold text-2xl sm:text-3xl lg:cursor-pointer`}
                onClick={() => backPhases()}
              />

              {buttonContinue && (
                <ButtonText
                  type="button"
                  text="Continue"
                  onClick={() => setOpenModal(true)}
                />
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookAppointment;
