import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { api, createSession, createAppointment } from "../api/api";
import { presentDay } from "../utils/date";
import toast from "react-hot-toast";

const Context = createContext();

const StateContext = ({ children }) => {
  // Login USER INPUT
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // info USER/ STATUS/ LOADING
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // post appointment
  const [getService, setGetService] = useState("");
  const [getBarber, setGetBarber] = useState("");
  const [getDateService, setGetDateService] = useState(presentDay);
  const [getHour, setGetHour] = useState("");
  const [movPhases, setMovPhases] = useState(0);

  // LOGIN ACCOUNT

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }, []);

  const loginAccount = async (email, password, loading) => {
    try {
      loading(true);
      let response;

      await createSession(email, password)
        .then((resp) => {
          response = resp;
          loading(false);
        })
        .catch((error) => {
          console.log(error);
          loading(false);
        });

      if (response) {
        loading(false);
      }

      const loggerUser = response.data.user;
      const token = response.data.token;
      // const statusApi = response.status;

      localStorage.setItem("user", JSON.stringify(loggerUser));
      localStorage.setItem("token", token);

      api.defaults.headers.Authorization = `Bearer ${token}`;
      window.location.reload(true);
      setUser(loggerUser);
      navigate("/");
    } catch (erro) {
      setStatus({
        type: "error",
        message: "Email ou senha ínvalido",
      });
    }
  };

  // desconected user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;
    window.location.reload(true);
    setEmail("");
    setPassword("");
    setStatus({
      type: "",
      message: "",
    });
    navigate("/ ");
  };

  // Appointment

  let buttonContinue = false;

  if (getService && getBarber && getHour && getDateService) {
    buttonContinue = true;
  }

  const booking = () => {
    if (!getService || !getBarber || !getHour || !getDateService) {
      return setStatus({
        type: "Err",
        message: "Necessário selecionar todas as etapas!",
      });
    }

    createAppointment(getService, getBarber, getDateService, getHour);
  };

  // sucess appointment
  const AppointmentSucess = () => {
    toast("Horário reservado com Sucesso!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    setGetBarber("");
    setGetDateService(presentDay);
    setGetHour("");
    setGetService();
    setMovPhases(0);
  };

  return (
    <Context.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        loginAccount,
        authenticated: !!user,
        user,
        status,
        setStatus,
        logout,
        navigate,
        getService,
        setGetService,
        getBarber,
        setGetBarber,
        getDateService,
        setGetDateService,
        getHour,
        setGetHour,
        booking,
        AppointmentSucess,
        movPhases,
        setMovPhases,
        buttonContinue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
