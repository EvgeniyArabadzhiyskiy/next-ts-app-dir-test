"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setPokemonList } from "@/redux/slices/pokemonSlice";
import PokemonTable from "../PokemonTable/PokemonTable";

const dataPokemonNew = [
  { name: "Poly" },
  { name: "Djon" },
  { name: "Ajax" },
  { name: "Kiwi" },
  { name: "John" },
  { name: "Bob" },
  { name: "Bill" },
  { name: "Alex" },
];

const PokemonClient = () => {
  const dispatch = useAppDispatch();
  const startupPokemon = useAppSelector((state) => state.pokemons.pokemonsList);

  const onClick = () => {
    dispatch(setPokemonList(dataPokemonNew));
  };

  return (
    <div>
      <PokemonTable pokemons={startupPokemon} />
      <button type="button" onClick={onClick}>
        CLICK
      </button>
    </div>
  );
};

export default PokemonClient;
