import Link from "next/link";
import axios from "axios";
import React from "react";
import { store } from "@/redux/store";
import { setPokemonList } from "@/redux/slices/pokemonSlice";
import Providers from "@/redux/provider";
import PokemonTable from "@/components/PokemonTable/PokemonTable";

interface IPokemon {
  name: string;
  url: string;
}

export default async function HomePage() {
    const res = await fetch( `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
    const data = await res.json()
    // console.log("HomePage  data:", data.results);

    // store.dispatch(setPokemonList(data.results))
    // console.log("HomePage  store:", store);

    return (
    <>
      <h1>SSR PAGE</h1>
      <Link href="/">HOME</Link>

      <Providers>
        <PokemonTable pokemons={data.results} />
      </Providers>

      {/* <ul>
        {data &&
          data.results.map((pokemon: IPokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
      </ul> */}
    </>
  );
}
