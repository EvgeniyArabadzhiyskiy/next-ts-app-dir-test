import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IPokemon {
  name: string;
  url: string;
}


interface IState  {
  pokemonsList: IPokemon[]
}

const initialState = {
  pokemonsList: [],
  city: 'Lvov'
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<any>) => {
      state.pokemonsList = action.payload;
    },
  },
});

export const { setPokemonList } = pokemonSlice.actions;

export const pokemonReducer = pokemonSlice.reducer;
