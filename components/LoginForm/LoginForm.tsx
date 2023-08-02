"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { setCookie } from "nookies";
import React, { useEffect } from "react";

const login = async (credentials: any) => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const USER_LOGIN = "/users/login";

  const { data: user } = await axios.post(
    `${BASE_URL}${USER_LOGIN}`,
    credentials
  );

  return user;
};

function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signInUser, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      const { token, ...rest } = data;

      setCookie(null, "authToken", `${token}`, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      router.push("/");
      setTimeout(() => location.reload(), 200);
    },
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    signInUser({ email, password });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        return;

      case "password":
        setPassword(value);
        return;

      default:
        return;
    }
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <form onSubmit={onSubmit}>
        <input type="text" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default LoginForm;
