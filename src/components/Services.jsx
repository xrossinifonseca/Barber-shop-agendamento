import React, { useState, useEffect } from "react";
import load from "../assets/loading.svg";
import { useStateContext } from "../context/StateContext";
import { getServices } from "../api/api";
const Services = () => {
  const [openInfo, setOpenInfo] = useState({});
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const { setGetService, setMovPhases } = useStateContext();

  useEffect(() => {
    (async () => {
      const response = await getServices();
      setServices(response.data);
      setLoading(false);
    })();
  }, []);

  const choseService = (service) => {
    setGetService(service);
    setMovPhases((prev) => prev + 1);
  };

  return (
    <>
      {loading === true ? (
        <div className="w-full flex items-center justify-center h-[70%]">
          <img src={load} className="" alt="loading" />
        </div>
      ) : (
        <div className="w-full h-[80%] mt-5 overflow-auto">
          <h1 className="text-white text-xl font-medium">
            Selecione o Serviço
          </h1>
          <div className="w-full h-auto space-y-5 mt-5 ">
            {services.map((service) => (
              <div
                key={service._id}
                className="relative w-full  border-b border-primary-200 h-auto p-2 lg:cursor-pointer  lg:hover:border-b-yellow-500"
              >
                <h1 className="text-white">{service.name}</h1>
                <h5 className="text-secondary-300 font-light mt-2">
                  R${service.price}
                </h5>
                <h5
                  className="text-yellow-500  font-regular lg:cursor-pointer"
                  onClick={() => setOpenInfo(service._id)}
                >
                  Mais Infomação
                </h5>
                {openInfo === service._id && (
                  <p className="text-secondary-300 font-light text-[14px]">
                    {service.info}
                  </p>
                )}

                <button
                  type="button"
                  className="absolute right-5 bottom-14 text-yellow-500  sm:cursor-pointer hover:opacity-20"
                  onClick={() => choseService(service.name)}
                >
                  Selecionar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
