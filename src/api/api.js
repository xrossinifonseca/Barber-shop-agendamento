import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-barber-app.herokuapp.com/",
});

export const createSession = async (email, password) => {
  return api.post("auth", { email, password });
};

export const getServices = async () => {
  return api.get("services");
};

export const getBooking = async () => {
  return api.get("booking");
};

const token = localStorage.getItem("token");

export const createAppointment = async (service, barber, date, hour) => {
  return api.post(
    "booking",
    { service: service, barber: barber, date: date, hour: hour },
    {
      headers: {
        Authorization: `Berear ${token}`,
      },
    }
  );
};

export const deleteAppoitment = async (id) => {
  api.delete(`booking/${id}`);
};
