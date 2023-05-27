"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { setCookie } from "nookies";

const login = async (credentials: any) => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const USER_LOGIN = "/users/login";

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  };

  // const resFetch = await fetch(`${BASE_URL}${USER_LOGIN}`, options);
  // const user = await resFetch.json();
  // console.log("login  user:", user);

  const { data: user } = await axios.post(
    `${BASE_URL}${USER_LOGIN}`,
    credentials
  );

  return user;
};

function LoginForm() {
  // const queryClient = useQueryClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const mutation = useMutation({
  //   mutationFn: login,
  //   onSuccess: (data) => {
  //     const { token, ...rest } = data;
  //     queryClient.setQueryData(["currentUser"], rest);

  //     setCookie(null, "authToken", `${token}`, {
  //         maxAge: 30 * 24 * 60 * 60,
  //         path: "/",
  //       });
  //       // const ddd = queryClient.getQueryData(['currentUser'])
  //       // console.log("LoginForm  ddd:", ddd);
  //   },
  // });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sss = await signIn("credentials", {
      email: email,
      password: password,
      // redirect: false,
      redirect: true,
      callbackUrl: "/home",
    });

    // mutation.mutate({ email, password });
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
      <form onSubmit={onSubmit}>
        <input type="text" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default LoginForm;
