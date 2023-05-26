// "use client"

import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";
// import { useSession } from "next-auth/react";
// import { redirect, usePathname } from "next/navigation";

export default function LoginPage() {
  // const pathname = usePathname();
  // const session = useSession();

  // if (pathname === "/login" && session) {
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
