import React from "react";

import { useStateContext } from "../context/StateContext";

const ConfirmAppointment = ({ close }) => {
  const { getService, getBarber, getDateService, getHour } = useStateContext();

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed   flex items-center justify-center top-0 right-0 left-0 z-50 md:inset-0 h-modal h-full"
    >
      <div
        id="popup-modal"
        tabIndex="-2"
        className="overflow-y-auto overflow-x-hidden fixed bg-color-secondary opacity-60 flex items-center justify-center top-0 right-0 left-0 z-0 md:inset-0 h-modal h-full"
      ></div>
      <div className="relative p-4 w-full max-w-md  h-auto">
        <div className="relative  rounded-lg shadow bg-primary-200">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={() => close(false)}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center text-secondary-300 font-light ">
            <h3 className="mb-5 text-lg font-normal text-white ">
              Confirmar Horário
            </h3>

            <h5>Serviço: {getService}</h5>
            <h5>Barbeiro: {getBarber}</h5>
            <h5>Dia: {getDateService}</h5>
            <h5>Hora: {getHour}</h5>

            <button
              data-modal-toggle="popup-modal"
              type="submit"
              className="text-white bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 mt-2"
            >
              confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppointment;
