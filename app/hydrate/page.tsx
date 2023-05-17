import HydratedPokemon from "@/components/HydratedPokemon/HydratedPokemon";
import { getPokemonInfo } from "@/helpers/getPokemonInfo";
import getQueryClient from "@/react-query/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";

export default async function HydratedPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["pokemon"], getPokemonInfo);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HydratedPokemon />
    </Hydrate>
  );
}
