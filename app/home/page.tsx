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
// import {
//   getPokemonList,
//   getRunningQueriesThunk,
//   useGetPokemonListQuery,
// } from "@/redux/pokemonApi";


interface IPokemon {
  name: string;
  url: string;
}

export default function HomePage({params}: any) {

  // const { data: pokemons, isLoading } = useGetPokemonListQuery(null);
  // console.log("HomePage  pokemons:", pokemons);

  console.log("Home Page Client");
  

  return (
    <>
      <h1>HOME PAGE</h1>
      <Link href="/">HOME</Link>
      <Statistic />

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
  );
}
