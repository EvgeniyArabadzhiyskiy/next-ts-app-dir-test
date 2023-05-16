import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { pokemonApi } from "./pokemonApi";
import { pokemonReducer } from "./slices/pokemonSlice";
// import { counterReduser } from "./counter/counter";
// import { authReducer } from "./auth/authSlice";
// import { transactionReducer } from "./transactions-slice";
// import { walletApi } from "./walletApiService/walletApi";
// import { userApi } from "./walletApiService/userApi";

const rootReducer = combineReducers({
  //   auth: authReducer,
  //   counter: counterReduser,
  //   transactions: transactionReducer,
  //   [userApi.reducerPath]: userApi.reducer,
  //   [walletApi.reducerPath]: walletApi.reducer,

  [pokemonApi.reducerPath]: pokemonApi.reducer,
  pokemons: pokemonReducer,
});

export const store = configureStore({
  reducer: (state, action) => {
    return rootReducer(state, action);
  },

  middleware: (gDM) =>
    gDM().concat(
      pokemonApi.middleware
      // userApi.middleware,
      //  walletApi.middleware
    ),
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const makeStore = () => {
//   const store = configureStore({
//     reducer: (state, action) => {
//       return rootReducer(state, action)
//     },

//     middleware: (gDM) =>
//       gDM().concat(
//         pokemonApi.middleware,
//         // userApi.middleware,
//         //  walletApi.middleware
//          ),
//   });

//   return store;
// };

// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];

// export const wrapper = createWrapper<AppStore>(makeStore);
