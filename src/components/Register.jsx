import React from "react";
import ButtonText from "./ButtonText";
import InputText from "./InputText";
import { schema } from "../utils/validations";
import { useFormik } from "formik";
import { useStateContext } from "../context/StateContext";
import MessageError from "./MessageError";
import Success from "./Success";
import { api } from "../api/api";

const Register = () => {
  const { status, setStatus } = useStateContext();

  const createAccount = () => {
    api
      .post("users", {
        name: values.name.toLowerCase().trim(),
        username: values.username,
        email: values.email.toLowerCase(),
        password: values.password,
        avatar: "#",
        background: "#",
      })
      .then((resp) => resp)
      .catch((err) => console.log(err));
  };

  const onSubmit = () => {
    if (!schema) return;

    createAccount();

    if (createAccount) {
      setStatus({
        type: "sucess",
        message: "Registrou-se com sucesso!",
      });
      values.name = "";
      values.email = "";
      values.password = "";
      values.confirmPassword = "";
      values.username = "";
    } else {
      setStatus({
        type: "Error",
        message: "Erro ao cadastrar usuário.",
      });
      values.email = "";
    }
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    <div className="  p-2    relative">
      <h1 className="text-2xl text-center">
        Criar <span className="text-yellow-500">Conta</span>
      </h1>

      {status.type === "error" && <h1>{status.message}</h1>}
      {status.type === "sucess" && <Success sucess={status.message} />}

      <form
        autoComplete="off"
        className="flex flex-col items-center justify-center "
        onSubmit={handleSubmit}
      >
        <InputText
          label="Nome"
          type="text"
          placeholder="nome completo"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && touched.name && <MessageError error={errors.name} />}

        <InputText
          label="username"
          type="text"
          placeholder="Nome de usuário"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && touched.username && (
          <MessageError error={errors.username} />
        )}

        <InputText
          label="Email"
          type="email"
          placeholder="teste@exemplo.com"
          name="email"
          value={values.email.trim()}
          onChange={handleChange}
        />
        {errors.email && touched.email && <MessageError error={errors.email} />}

        <InputText
          label="Senha"
          type="password"
          name="password"
          placeholder="*****"
          value={values.password}
          onChange={handleChange}
        />

        {errors.password && touched.password && (
          <MessageError error={errors.password} />
        )}

        <InputText
          label="Confirmar Senha"
          type="password"
          name="confirmPassword"
          placeholder="*****"
          value={values.confirmPassword}
          onChange={handleChange}
        />

        {errors.confirmPassword && touched.confirmPassword && (
          <MessageError error={errors.confirmPassword} />
        )}

        <div className="w-full flex flex-col items-center mt-5 space-y-2">
          <ButtonText type="submit" text="Cadastrar" />
        </div>
      </form>
    </div>
  );
};

export default Register;
