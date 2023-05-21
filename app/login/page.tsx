import LoginForm from "@/components/LoginForm/LoginForm";
import Link from "next/link";
export default function LoginPage() {
  return (
    <>
      <Link href="/">HOME</Link>
      <h1>Login Page</h1>

      <LoginForm />
    </>
  );
}
