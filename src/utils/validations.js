import * as yup from "yup";
export const phoneRegex = /\+\d{2,}\d{2,}\d{4,}\d{4}/g;
export const nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\-', ""]+$/;

export const schema = yup.object().shape({
  password: yup
    .string("Senha invalida")
    .required(" Necessário preencher campo senha"),
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required(" Necessario preencher campo e-mail"),
  name: yup
    .string("Nome invalido")
    .matches(nameRegex, {
      message: "Digite seu nome completo",
    })
    .required("Necessário preencher campo nome")
    .trim(),
  username: yup.string().required("Necessário preencher campo username"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas não conferem.")
    .required(" Necessário preencher campo senha"),
});
