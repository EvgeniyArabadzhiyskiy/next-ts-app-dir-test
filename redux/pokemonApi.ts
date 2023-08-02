// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"; // без хуков
import { HYDRATE } from "next-redux-wrapper";

interface IPokemon {
  name: string;
  url: string;
}

interface IPokemonResponse {
  count: number;
  next: string | null;
  previous: null | string;
  results: IPokemon[];
}

export const TAGS_TYPES = {
  pokemon: "Pokemon",
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),

  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === HYDRATE) {
  //     return action.payload[reducerPath];
  //   }
  // },

  tagTypes: ["Pokemon"],

  endpoints: (builder) => ({
    // getPokemonByName: builder.query<any, string>({
    //   query: (name) => `pokemon/${name}`,

    //   transformResponse: (response: any) => {
    //     return {
    //       species: response.species,
    //       sprites: response.sprites,
    //     };
    //   },

    //   providesTags: ["Pokemon"],
    // }),

    getPokemonList: builder.query<IPokemon[], null>({
      query: () => {
        return `pokemon?offset=0&limit=10`;
      },

      transformResponse: (response: IPokemonResponse) => response.results,
      providesTags: ["Pokemon"],
    }),
  }),
});

// export const {
//   // useGetPokemonByNameQuery,
//   // useGetPokemonListQuery,
//   util: { getRunningQueriesThunk },
// } = pokemonApi;

export const {
  //  getPokemonByName,
  getPokemonList,
} = pokemonApi.endpoints;
