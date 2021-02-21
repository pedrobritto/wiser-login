import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, digite seu email.")
    .email("E-mail inválido. Seu e-mail deve seguir o formato nome@email.com.")
    .max(256, "Desculpe, esse e-mail é muito longo."),
  password: yup
    .string()
    .required("Por favor, digite sua senha.")
    .min(8, "Sua senha precisa ter no mínimo 8 caracteres."),
});

export const formFields = {
  email: {
    name: "email",
    label: "E-mail",
    placeholder: "",
  },
  password: {
    name: "password",
    label: "Senha",
    placeholder: "",
  },
};

export type FormType = {
  email: string;
  password: string;
};
