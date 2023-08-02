"use client";

import { useRef } from "react";
import { store } from "@/redux/store";
import { setPokemonList } from "@/redux/slices/pokemonSlice";

let isFirstRemder = true;

function Preloader({ pokemons }: { pokemons?: any } ) {
//   console.log("Preloader  pokemons:", pokemons);
  const loaded = useRef(false);
  // console.log("isFirstRemder:", isFirstRemder);

  // if (!loaded.current) {
  //   store.dispatch(setStartupPokemon(pokemons));
  //   loaded.current = true;
  // }

  // if (isFirstRemder) {
  //   store.dispatch(setPokemonList(pokemons));
  //   isFirstRemder = false;
  // }

  // if (isFirstRemder && pokemons) {
  //   store.dispatch(setPokemonList(pokemons));
  //   isFirstRemder = false;
  // }

  // if (isFirstRemder) {
  //   isFirstRemder = false;
  // }

  return null;
}

export default Preloader;
