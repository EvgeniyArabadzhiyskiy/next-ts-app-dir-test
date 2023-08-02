import styles from "../styles/Home.module.css";

import Link from "next/link";
import { cookies } from "next/headers";
import { store } from "@/redux/store";
import { setPokemonList } from "@/redux/slices/pokemonSlice";
import Providers from "@/redux/provider";
import PokemonTable from "@/components/PokemonTable/PokemonTable";
import SSRPokemonTable from "@/components/SSRPokemonTable/SSRPokemonTable";
import Preloader from "@/components/Preloader/Preloader";
import PokemonClient from "@/components/PokemonClient/PokemonClient";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { UserSession } from "@/components/UserSession/UserSession";

const dataPokemonNew = [
  {
    id: 32,
    name: "Nidoran♂",
    type: ["Poison"],
    hp: 46,
    attack: 57,
    defense: 40,
    special_attack: 40,
    special_defense: 40,
    speed: 50,
  },
  {
    id: 33,
    name: "Nidorino",
    type: ["Poison"],
    hp: 61,
    attack: 72,
    defense: 57,
    special_attack: 55,
    special_defense: 55,
    speed: 65,
  },
  {
    id: 34,
    name: "Nidoking",
    type: ["Poison", "Ground"],
    hp: 81,
    attack: 102,
    defense: 77,
    special_attack: 85,
    special_defense: 75,
    speed: 85,
  },
  {
    id: 35,
    name: "Clefairy",
    type: ["Fairy"],
    hp: 70,
    attack: 45,
    defense: 48,
    special_attack: 60,
    special_defense: 65,
    speed: 35,
  },
  {
    id: 36,
    name: "Clefable",
    type: ["Fairy"],
    hp: 95,
    attack: 70,
    defense: 73,
    special_attack: 95,
    special_defense: 90,
    speed: 60,
  },
  {
    id: 37,
    name: "Vulpix",
    type: ["Fire"],
    hp: 38,
    attack: 41,
    defense: 40,
    special_attack: 50,
    special_defense: 65,
    speed: 65,
  },
  {
    id: 38,
    name: "Ninetales",
    type: ["Fire"],
    hp: 73,
    attack: 76,
    defense: 75,
    special_attack: 81,
    special_defense: 100,
    speed: 100,
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: ["Normal", "Fairy"],
    hp: 115,
    attack: 45,
    defense: 20,
    special_attack: 45,
    special_defense: 25,
    speed: 20,
  },
  {
    id: 40,
    name: "Wigglytuff",
    type: ["Normal", "Fairy"],
    hp: 140,
    attack: 70,
    defense: 45,
    special_attack: 85,
    special_defense: 50,
    speed: 45,
  },
];

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log("Home  session:", session);


  // const res = await fetch(
  //   `http://localhost:3000/api/current-user`
  // );
  // const data = await res.json();
  // console.log("Home  data:", data);

  // const res = await fetch(
  //   `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`
  // );
  // const data = await res.json();

  // store.dispatch(setPokemonList(data.results));

  // store.dispatch(setPokemonList(dataPokemonNew));

  return (
    <>
      {/* <div>
        <Link href="/home">HOME</Link>{" "}
        <br />
        <div style={{marginTop: 20}}></div>
        <Link  href="/about">About</Link>{" "} 
        <br />
        <div style={{marginTop: 20}}></div>
        <Link href="/hydrate">HYDRATE</Link>{" "}
        <br />
        <div style={{marginTop: 20}}></div>
        <pre><Link  href="/login">LOGIN</Link></pre>
      </div> */}

      

      <div>
        {/* <pre>{JSON.stringify(session)}</pre> */}
      </div>
      {/* <UserSession /> */}


      {/* <Providers>
        <PokemonClient />
        <PokemonTable pokemons={data.results} />
        <SSRPokemonTable />
      </Providers> */}
    </>
  );
}
