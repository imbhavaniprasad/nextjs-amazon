import { Metadata } from "next";
import React from "react";
import Form from "./Form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account",
};
async function Signin() {
  return <Form />;
}

export default Signin;
