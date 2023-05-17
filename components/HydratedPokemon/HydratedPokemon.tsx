"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getPokemonInfo } from "@/helpers/getPokemonInfo";
import PokemonTable from "../PokemonTable/PokemonTable";

export default function HydratedPokemon() {
  const { data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: getPokemonInfo,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Link href="/">HOME</Link>

      <PokemonTable pokemons={data} />
    </>
  );
}
