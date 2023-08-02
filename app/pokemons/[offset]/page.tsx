// "use client";
import Link from "next/link";
import axios from "axios";
import React from "react";

interface IPokemon {
  name: string;
  url: string;
}

interface IProps {
  params: { offset: string };
}

export default async function HomePage({ params }: IProps) {
  // console.log("HomePage  params:", params);

  // const { data } = await axios("http://localhost:3000/api/search?name=kiwi")
  // console.log("HomePage  data:", data.name);${params.offset}

  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=${params.offset}&limit=10`
  );
  // console.log("HomePage  data:", data);

  return (
    <>
      <h1>Pokemon PAGE</h1>
      <Link href="/">HOME</Link>

      <ul>
        {data &&
          data.results.map((pokemon: IPokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
      </ul>
    </>
  );
}
