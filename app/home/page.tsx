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
// import {
//   getPokemonList,
//   getRunningQueriesThunk,
//   useGetPokemonListQuery,
// } from "@/redux/pokemonApi";

interface IPokemon {
  name: string;
  url: string;
}

interface UserData {
  email: string;
  firstName: string;
  balance: number;

}

export default async function HomePage({ params }: any) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;
  
  const queryUserData = await  getUser(authToken)
  // console.log("HomePage  queryUserData:>>>>>>>>>>>>>>>>>>>>>>>>>>>", queryUserData);


  // const { data: pokemons, isLoading } = useGetPokemonListQuery(null);
  // console.log("HomePage  pokemons:", pokemons);

  


  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["User"], getUser);
  // const dehydratedState = dehydrate(queryClient);

  // const queryUserData = queryClient.getQueryData<Partial<UserData>>(["User"]);
  // console.log("HomePage  queryUserData:<<<<<<<<<<<<<<>>>>>>>>>>>>>>", queryUserData);

  const isLoggedIn = !!queryUserData?.email;


  // if (isLoggedIn) {
  //   redirect("/login");
  // }

  return (
    // <Hydrate state={dehydratedState}>
    <>
    <Header
      currentUser={queryUserData}
    />
      <div className={stl.container}>
        <h1>HOME PAGE</h1>
        <Link href="/">HOME</Link>
        <h2>Container</h2>
      </div>
      ;{/* <Statistic /> */}
      {/* <ul>
        {pokemons &&
          pokemons.map((pokemon: IPokemon) => {
            return (
              // <Link key={pokemon.name} href={`/pokemons/new/${pokemon.name}`}>
              <li key={pokemon.name}>{pokemon.name}</li>
              // </Link>
            );
          })}
      </ul> */}
    </>
    // </Hydrate>
  );
}
