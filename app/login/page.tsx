// "use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  // const session = useSession();

  // if (session.status === "loading") {
  //   return <h1>Session loading ...</h1>;
  // }

  // if (session.status === "authenticated") {
  //   redirect("/home");  ??? может лучше // const router = useRouter(); router.push("/home");
  // }

  return (
    <>
      <h1>Login Page</h1>
      <Link href="/">HOME</Link>

      <LoginForm />
    </>
  );
}
