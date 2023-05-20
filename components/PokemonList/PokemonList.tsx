import { store } from "@/redux/store";
import React from "react";

export default function PokemonList({ name }: { name: string }) {
  // const pokemons = store.getState().pokemons.pokemonsList;
  // console.log("PokemonList  pokemons:", pokemons);

  return (
    <>{name}</>
    // <ul>
    //   {data &&
    //     data.results.map((pokemon: IPokemon) => {
    //       return <li key={pokemon.name}>{pokemon.name}</li>;
    //     })}
    // </ul>
  );
}
