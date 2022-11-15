import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getBooking } from "../api/api";
import loadingsvg from "../assets/loading.svg";
import { deleteAppoitment } from "../api/api";
import DeleteAppointment from "./DeleteAppointment";
const SideProfile = ({ close }) => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const { user, logout } = useStateContext();

  useEffect(() => {
    (async () => {
      const response = await getBooking();
      setBooking(response.data);
      setLoading(false);
    })();
  }, []);

  const myBooking = (booking) => {
    return booking.filter((book) => {
      return book.user === user._id;
    });
  };

  const cancelAppointment = (id, booking) => {
    deleteAppoitment(id);
    const diferentId = booking.filter((book) => book._id !== id);
    setBooking(diferentId);
    setOpenModal(false);
  };

  return (
    <div className="w-screen min-h-screen fixed top-0 z-60 sm:w-[40%] lg:[w-30%] sm:left-none right-0  bg-primary-200 space-y-2">
      <div className="w-full flex flex-col items-center justify-center space-y-2 bg-color-secondary p-2 ">
        <div className="w-full flex justify-between items-center h-10">
          <AiOutlineArrowLeft
            onClick={() => close(false)}
            className="lg:hover:cursor-pointer ml-2"
          />
          <h1 className="text-center text-white">
            Meus <span className="text-yellow-500"> Agendamentos</span>
          </h1>

          <span className=""></span>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center ">
          <img src={loadingsvg} className="w-[20%]" alt="loading" />
        </div>
      ) : (
        <div className="w-full h-auto  p-2">
          {myBooking(booking).length <= 0 ? (
            <div className="text-center">
              <p>Você não possui nenhum agendamento.</p>
            </div>
          ) : (
            <div className="space-y-4 overflow-auto h-[350px]">
              {myBooking(booking).map((book) => (
                <div
                  key={book._id}
                  className="bg-color-secondary  rounded font-light p-2 text-[14px] text-white shadow-lg "
                >
                  <h5>
                    Dia: <span className="text-secondary-300">{book.date}</span>
                  </h5>
                  <h5>
                    Hora:{" "}
                    <span className="text-secondary-300">{book.hour}</span>
                  </h5>
                  <h5>
                    Serviço:{" "}
                    <span className="text-secondary-300">{book.service}</span>
                  </h5>
                  <h5>
                    Barbeiro:{" "}
                    <span className="text-secondary-300">{book.barber}</span>
                  </h5>
                  <div className="w-full flex justify-end">
                    <button
                      type="button"
                      className="bg-red-500 w-14 rounded text-[13px]"
                      onClick={() => setOpenModal(true)}
                    >
                      Cancelar
                    </button>
                  </div>
                  {openModal && (
                    <DeleteAppointment
                      close={setOpenModal}
                      cancel={cancelAppointment}
                      bookId={book._id}
                      booking={booking}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="w-full absolute bottom-2 flex items-center justify-center">
        <button
          type="button"
          className="bg-red-500 w-1/2 h-10 rounded  "
          onClick={() => logout()}
        >
          Desconectar
        </button>
      </div>
    </div>
  );
};

export default SideProfile;
