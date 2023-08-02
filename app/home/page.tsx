// "use client";

import Link from "next/link";
import Statistic from "@/components/Statistic/Statistic";
import stl from "./Myhome.module.css";
import { getUser } from "@/helpers/getUser";
import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";

import getQueryClient from "@/react-query/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import TransactionList from "@/components/TransactionList/TransactionList";
import axios from "axios";
import { getAllTransactions } from "@/helpers/getAllTransactions";
import { getPokemonInfo } from "@/helpers/getPokemonInfo";
import { getTodo } from "@/helpers/getTodo";

interface IPokemon {
  name: string;
  url: string;
}

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}

export default  function HomePage() {
  // const { data: pokemons, isLoading } = useGetPokemonListQuery(null);
  // console.log("HomePage  pokemons:", pokemons);

  // const cookieStore = cookies();
  // const authToken = cookieStore.get("authToken")?.value;

  // === Авторизация Через функцию getUser напрямую ===
  // const currenUser = await getUser(authToken);

  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["Transactions", 1], () =>
  //   getAllTransactions(authToken, 1)
  // );
  // const dehydratedState = dehydrate(queryClient);

  // const transData = await getPokemonInfo();
  // console.log("HomePage  transData:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", transData[0]);

  // const todoData = await getTodo(1);
  // console.log("HomePage  todoData:=============================", todoData);

  return (
    // <Hydrate state={dehydratedState}>
      <>
        {/* <Header currentUser={currenUser} /> */}
        <div className={stl.container}>
          <h1>HOME PAGE</h1>
          <Link href="/">HOME</Link>
        </div>

        {/* <TransactionList authToken={authToken} /> */}
        {/* <TransactionList authToken={transData.transactions} /> */}
      </>
      //  </Hydrate>
  );
}

//===========================================================
// import Statistic from "@/components/Statistic/Statistic";
// import {
//   getPokemonList,
//   getRunningQueriesThunk,
//   pokemonApi,
//   useGetPokemonListQuery,
// } from "@/redux/pokemonApi";
// import Link from "next/link";

// interface IPokemon {
//   name: string;
//   url: string;
// }

// export default function HomePage () {
//   // const { data: pokemons } = pokemonApi.endpoints.getPokemonList.useQuery();
//   const { data: pokemons, isLoading } = useGetPokemonListQuery();
//   // console.log("HomePage  pokemons:", pokemons);

//   return (
//     <>
//       <h1>HOME PAGE</h1>
//       <Link href="/">HOME</Link>
//       <Statistic />

//       <ul>
//         {pokemons &&
//           pokemons.map((pokemon: IPokemon) => {
//             return (
//               <Link key={pokemon.name} href={`/pokemons/new/${pokemon.name}`}>
//                 <li key={pokemon.name}>{pokemon.name}</li>
//               </Link>
//             );
//           })}
//       </ul>
//     </>
//   );
// };
