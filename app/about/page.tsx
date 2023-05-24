import AboutComp from "@/components/AboutComp/AboutComp";
import Providers from "@/redux/provider";
import { cookies, headers } from "next/headers";

export default function AboutPage() {
  // const headersList = headers();
  // const authToken = headersList.get('authorization') || "";
  // console.log("RootLayout  authToken:", authToken);

  // const cookieStore = cookies();
  // const authToken = cookieStore.get("authToken")?.value;
  // console.log("AboutPage  authToken:", authToken);

  return (
    <main>
      {/* <h1>About Page</h1> */}
      {/* <Providers> */}
        <AboutComp />
      {/* </Providers> */}
    </main>
  );
}
