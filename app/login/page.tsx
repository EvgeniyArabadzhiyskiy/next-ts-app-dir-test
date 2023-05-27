"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LoginForm from "@/components/LoginForm/LoginForm";

export default  function LoginPage() {
  // const session = await getServerSession(authOptions);
  // if (session) redirect("/home");

  const session = useSession();
  console.log("LoginForm  session:", session.status);

  if (session.status === "loading") {
    return <h1>Session loading ...</h1>;
  }

  if (session.status === "authenticated") {
    redirect("/home");
  }

  return (
    <>
      <Link href="/">HOME</Link>
      <h1>Login Page</h1>

      <LoginForm />
    </>
  );
}
