import React from "react";
import ButtonText from "./ButtonText";
import InputText from "./InputText";
import { schema } from "../utils/validations";
import { useFormik } from "formik";
import { useStateContext } from "../context/StateContext";
import MessageError from "./MessageError";
import Success from "./Success";
import { createUser } from "../api/api";
import { useState } from "react";

const Register = () => {
  const { status, setStatus } = useStateContext();
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    let name = values.name;
    let email = values.email;
    let password = values.password;
    let username = values.username;
    if (!schema) return;
    setLoading(true);

    createUser(name, username, email, password)
      .then((resp) => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Registrou-se com sucesso!",
        });
      })
      .catch(() => {
        setLoading(false);
        setStatus({
          type: "error",
          message: "erro ao cadastrar",
        });
      });
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

  if (status.type === "success") {
    values.name = "";
    values.email = "";
    values.username = "";
    values.confirmPassword = "";
    values.password = "";
  }

  return (
    <div className="p-2 relative">
      <h1 className="text-2xl text-center">
        Criar <span className="text-yellow-500">Conta</span>
      </h1>

      {status.type === "error" && <h1>{status.message}</h1>}
      {status.type === "success" && <Success sucess={status.message} />}

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
          <ButtonText type="submit" text="Cadastrar" loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default Register;
