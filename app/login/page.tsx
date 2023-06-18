"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/helpers/getUser";
import { parseCookies } from "nookies";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // const { authToken } = parseCookies();
  // const router = useRouter();

  // const session = await getServerSession(authOptions);
  // if (session) redirect("/home");

  // const session = useSession();
  // console.log("LoginForm  session:", session.status);

  // if (session.status === "loading") {
  //   return <h1>Session loading ...</h1>;
  // }

  // if (session.status === "authenticated") {
  //   redirect("/home");
  // }

  // const isLoggedIn = useUser("/home", true);
  // console.log("LoginPage  isLoggedIn:", isLoggedIn);

  // console.log("LoginPage  isFetching:", isFetching);
  // console.log("LoginPage  isLoggedIn:", isLoggedIn);
  // console.log("LoginPage  data:", data);

  // const { data, error, isError, isFetching } = useQuery({
  //   queryKey: ["User"],
  //   queryFn: () => getUser(authToken),
  //   staleTime: Infinity,
  // });
  // console.log("LoginPage  data:", data);

  // const isLoggedIn = !!data?.email;

  // useEffect(() => {
  //   console.log("LoginPage  isLoggedIn:", isLoggedIn);
  //   if (!isLoggedIn) {
  //     return
  //   }
  //   router.push("/home");
  // }, [isLoggedIn, router]);

  // console.log("re-render");

  // if (isFetching) {
  //   return <h1>Loading...</h1>;
  // }

  // if (isLoggedIn) {
  //   redirect("/home");
  // }



  return (
    <>
      <Link href="/">HOME</Link>
      <h1>Login Page</h1>

      <LoginForm />
    </>
  );
}
