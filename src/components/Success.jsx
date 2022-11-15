import React from "react";
import { useStateContext } from "../context/StateContext";

const Success = ({ sucess }) => {
  const { navigate } = useStateContext();

  const autoReload = () => {
    document.location.reload(true);
    navigate("/login");
  };

  return (
    <div className="relative -top-18 mx-auto p-5 border w-full sm:w-96 hadow-lg rounded-md bg-white">
      <div className="mt-3 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100">
          <svg
            className="h-6 w-6 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlnx="http://www.w.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">Sucesso</h3>
        <div className="mt-2 px-7 py-3">
          <p className="text-sm text-gray-500">{sucess}</p>
        </div>
        <div className="items-center px-4 py-3">
          <button
            id="ok-btn"
            className="px-4 py-2 bg-yellow-500 text-white 
                    text-base font-medium rounded-md w-full 
                    shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
            onClick={() => autoReload()}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
