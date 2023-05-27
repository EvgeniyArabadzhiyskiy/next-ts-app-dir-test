"use client";

import ProtectedRoutes from "@/components/ProtectedRoutes/ProtectedRoutes";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { parseCookies } from "nookies";
import React, { createContext, useEffect, useState } from "react";

export const getCurrentUser = async () => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const USER_CURRENT = "/users/current";

  const { authToken } = parseCookies();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  const resFetch = await fetch(`${BASE_URL}${USER_CURRENT}`, options);
  const user = (await resFetch.json()) as IUser;

  return user;
};

export const StateContext = createContext<any | undefined>(undefined);

interface IUser {
  email?: string;
  firstName?: string;
  balance?: number;
  message?: string;
}

interface IProps {
  children: React.ReactNode;
  isLoggedIn: boolean;
  user: IUser;
}

const privateRoutes = ["/about", "/hydrate", "/pokemons"];
const limitedRoutes = ["/home", "/register"];

function GlobalStateProvider({ children, isLoggedIn = false, user }: IProps) {
  // const pathname = usePathname();
  // const { authToken } = parseCookies();
  // console.log("GlobalStateProvider  authToken:", !!authToken);

  
  // const [userData, setUserData] = useState<IUser>(user);



  // const { data, isFetched, isLoading, isFetching, isFetchedAfterMount } =
  // useQuery({
  //   queryKey: ["currentUser"],
  //   queryFn: getCurrentUser,
  //   staleTime: Infinity,
  //   // enabled: !!authToken,
  // });


  // console.log("GlobalStateProvider  data:", !data);
  // console.log("isFetchedAfterMount  :", isFetching);
  // console.log("GlobalStateProvider  isFetching:", isFetching);
  // console.log("GlobalStateProvider  isLoading:", isLoading );
  // console.log("GlobalStateProvider  data:", !!data?.email);

  // const fff = !!data?.email;

  return (
    <>
      {/* <StateContext.Provider value={{ isLoggedIn, userData, setUserData }}> */}
      {(false) ? (
        <>
          <h1>User Loading ...</h1>
          {/* <h1>{JSON.stringify(fff)}</h1> */}
        </>
      ) : (
        <>
          <ProtectedRoutes
            pathname={'/'}
            isLoggedIn={true}
            privateRoutes={privateRoutes}
            limitedRoutes={limitedRoutes}
          >
            {/* <h1>{JSON.stringify(!!data?.email)}</h1> */}
            {children}
          </ProtectedRoutes>
        </>
      )}
      {/* </StateContext.Provider> */}
    </>
  );
}

export default GlobalStateProvider;
