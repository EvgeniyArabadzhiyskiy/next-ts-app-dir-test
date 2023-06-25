// 'use client'

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
import TransactionList from "@/components/TransactionList/TransactionList";
import UserBox from "@/components/UserBox";
import { getAllTransactions } from "@/helpers/getAllTransactions";
import { getPokemonInfo } from "@/helpers/getPokemonInfo";
import { Suspense } from "react";
import { getTodo } from "@/helpers/getTodo";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}


const getPokemonInfo2 = async (): Promise<any> => {
  await new Promise(res => setTimeout(() => res(777), 5000))

  const req = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=10&limit=10`,
  // {cache: 'no-store'}
  );
  const data = (await req.json()) as any;

  return data.results;
};

export default async function AboutPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;


  // const todoData = await getTodo(1);
  // console.log("AboutPage  todoData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>:", todoData);

  // const transData = await getPokemonInfo2();
  // console.log("AboutPage  transData:++++++++++++++++++++++++++++++", transData);

  // const userCurrent = await getUser(authToken);

  // === Авторизация Через React-query ===
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["User"], () => getUser(authToken));
  const dehydratedState = dehydrate(queryClient);
  const currenUser = queryClient.getQueryData<Partial<UserData>>(["User"]);
  
  return (
    <Hydrate state={dehydratedState}>
      <>
        <main>
          <Link href="/">Home</Link>
          <Header currentUser={currenUser} />
          <h1>About Page</h1>
          {/* <Providers> */}
          {/* <UserBox /> */}
          {/* <TransactionList /> */}
          {/* <Suspense fallback={<h1>Pokemon Loading...</h1>} > */}
          <AboutComp />
          {/* </Suspense> */}
          {/* </Providers> */}
          {/* {JSON.stringify(user)} */}
          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </main>
      </>
     </Hydrate>
  );
}
