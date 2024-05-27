import React from "react";
import { AuthForm } from "../ui";

const fields = [
  { name: "name", type: "text", placeholder: "Name", fieldValidation: true },
  { name: "email", type: "email", placeholder: "Email", fieldValidation: true },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    fieldValidation: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
    fieldValidation: true,
  },
];

function RegisterPage() {
  return <AuthForm fields={fields} path="register" />;
}

export default RegisterPage;
