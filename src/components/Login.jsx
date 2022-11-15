import React from "react";
// import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import ButtonText from "./ButtonText";
import InputText from "./InputText";
import MessageError from "./MessageError";

const Login = () => {
  const { email, setEmail, password, setPassword, loginAccount, status } =
    useStateContext();

  const handleSumbit = (e) => {
    e.preventDefault();
    loginAccount(email, password);
  };
  return (
    <div className="p-4 space-y-5 ">
      <h1 className="text-2xl text-center">
        Log <span className="text-yellow-500">In</span>
      </h1>
      <form
        onSubmit={handleSumbit}
        className=" flex flex-col items-center justify-center  "
      >
        {status.type === "error" && <MessageError error={status.message} />}
        <InputText
          label="Email"
          type="email"
          placeholder="nome@exemplo.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          label="Senha"
          type="password"
          placeholder="*****"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="w-full flex flex-col items-center mt-5 space-y-2">
          <ButtonText type="submit" text="Entrar" />
          <h4 className="text-[12px] text-white   sm:cursor-pointer  ">
            esqueceu a senha?
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
