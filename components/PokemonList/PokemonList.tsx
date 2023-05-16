import { store } from "@/redux/store";

export default function PokemonList() {
  const pokemons = store.getState().pokemons.pokemonsList;
  console.log("PokemonList  pokemons:", pokemons);
  
  return (
    <></>
    // <ul>
    //   {data &&
    //     data.results.map((pokemon: IPokemon) => {
    //       return <li key={pokemon.name}>{pokemon.name}</li>;
    //     })}
    // </ul>
  );
}
