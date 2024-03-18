import { Metadata } from "next";
import React from "react";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up Page",
};
async function Register() {
  return <Form />;
}

export default Register;
