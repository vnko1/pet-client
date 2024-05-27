import React from "react";
import { AuthForm } from "../ui";

const fields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    fieldValidation: false,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    fieldValidation: false,
  },
];

function LoginPage() {
  return <AuthForm fields={fields} path="login" />;
}

export default LoginPage;
