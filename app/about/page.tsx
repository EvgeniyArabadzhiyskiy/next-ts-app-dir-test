'use client'

import AboutComp from "@/components/AboutComp/AboutComp";
import Providers from "@/redux/provider";
// import { cookies, headers } from "next/headers";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getCurrent } from "../layout";
import { getCurrentUser } from "../GlobalStateProvider/GlobalStateProvider";
import Header from "@/components/Header/Header";

import getQueryClient from "@/react-query/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { getUser } from "@/helpers/getUser";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { useUser } from "@/hooks/useUser";

interface UserData {
  email: string;
  firstName: string;
  balance: number;

}

export default  function AboutPage() {
  // await new Promise(res => setTimeout(() => res(777), 2000))   // About Page Loading

  // const cookieStore = cookies();
  // const authToken = cookieStore.get("authToken")?.value;
  
  // const queryUserData = await  getUser(authToken)

  // const headersList = headers();
  // const authToken = headersList.get('authorization') || "";
  // console.log("RootLayout  authToken:", authToken);

  // const cookieStore = cookies();
  // const authToken = cookieStore.get("authToken")?.value;
  // console.log("AboutPage  authToken:", authToken);

  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["User"], getUser);
  // const dehydratedState = dehydrate(queryClient);

  // const queryUserData = queryClient.getQueryData<Partial<UserData>>(["User"]);
  // console.log("AboutPage  queryUserData:*******************************", queryUserData);

  // const isLoggedIn = !!queryUserData?.email;

  // if (isLoggedIn) {
  //   redirect("/login");
  // }

  // const { data, isLoggedIn, isFetching } = useUser("/home", false);

  // if (isFetching) {
  //   return <h1>Loading...</h1>;
  // }


  return (
    // <Hydrate state={dehydratedState}>
    <>
      <Header 
        // currentUser={queryUserData}
      />
        
      <main>
        <Link href="/">Home</Link>
        <h1>About Page</h1>
        {/* <Providers> */}
        {/* <AboutComp /> */}
        {/* </Providers> */}
        {/* {JSON.stringify(user)} */}
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </main>
    </>
    // </Hydrate>
  );
}
