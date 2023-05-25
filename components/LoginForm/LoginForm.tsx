"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any)  => {
    e.preventDefault()
    // console.log({email, password});

    const sss = await signIn("credentials", {
        email: email,
        password: password,
        // redirect: false,
        // redirect: true,
        // callbackUrl: '/about'
    })
    
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default LoginForm;
