// "use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setPokemonList } from "@/redux/slices/pokemonSlice";
import Link from "next/link";
import PokemonTable from "../PokemonTable/PokemonTable";
import { getPokemonInfo } from "@/helpers/getPokemonInfo";
import { useQuery } from "@tanstack/react-query";
import { parseCookies } from "nookies";
import { usePathname } from "next/navigation";

const dataPokemonNew = [
  {
    id: 14,
    name: "Kakuna",
    type: ["Bug", "Poison"],
    hp: 45,
    attack: 25,
    defense: 50,
    special_attack: 25,
    special_defense: 25,
    speed: 35,
  },
  {
    id: 15,
    name: "Beedrill",
    type: ["Bug", "Poison"],
    hp: 65,
    attack: 90,
    defense: 40,
    special_attack: 45,
    special_defense: 80,
    speed: 75,
  },
  {
    id: 16,
    name: "Pidgey",
    type: ["Normal", "Flying"],
    hp: 40,
    attack: 45,
    defense: 40,
    special_attack: 35,
    special_defense: 35,
    speed: 56,
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    hp: 63,
    attack: 60,
    defense: 55,
    special_attack: 50,
    special_defense: 50,
    speed: 71,
  },
  {
    id: 18,
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    hp: 83,
    attack: 80,
    defense: 75,
    special_attack: 70,
    special_defense: 70,
    speed: 101,
  },
  {
    id: 19,
    name: "Rattata",
    type: ["Normal"],
    hp: 30,
    attack: 56,
    defense: 35,
    special_attack: 25,
    special_defense: 35,
    speed: 72,
  },
];

const AboutComp = async () => {
  // const dispatch = useAppDispatch();
  // const startupPokemon = useAppSelector((state) => state.pokemons.pokemonsList);

  const data = await getPokemonInfo();
  console.log("AboutComp  data>>>>>>>>>>>>>>>>>>>>>>>>>>>>:", data);
  
  // const { data, isFetching } = useQuery({
  //   queryKey: ["pokemon"],
  //   queryFn: getPokemonInfo,
  //   staleTime: Infinity,

  // });

  // if (isFetching) {
  //   return <h1>Client Loading...</h1>
  // }

 

  return (
    <div>
      <Link href="/">HOME</Link>
      <p>Current pathname</p>

      
    
      <PokemonTable pokemons={data} />
    </div>
  );
};

export default AboutComp;
