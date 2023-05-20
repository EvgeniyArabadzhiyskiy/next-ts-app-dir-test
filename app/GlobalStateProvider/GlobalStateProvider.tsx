"use client";

import ProtectedRoutes from "@/components/ProtectedRoutes/ProtectedRoutes";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { parseCookies } from "nookies";
import React, { createContext, useEffect, useState } from "react";

const getCurrentUser = async () => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const USER_CURRENT = "/users/current";

  const { authToken } = parseCookies();

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };

  if (authToken) {
    const resFetch = await fetch(`${BASE_URL}${USER_CURRENT}`, options);
    const user = (await resFetch.json()) as IUser;

    return user;
  }
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

const privateRoutes = ["/", "/about", "/hydrate", "/pokemons"];
const limitedRoutes = ["/login", "/register"];

function GlobalStateProvider({ children, isLoggedIn = false, user }: IProps) {
  const pathname = usePathname();

  const [globalData, setGlobalData] = useState<string>("Djon");
  const [userData, setUserData] = useState<IUser>(user);

  const { data, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  return (
    <StateContext.Provider
      value={{ globalData, setGlobalData, isLoggedIn, userData, setUserData }}
    >
      {isLoading ? (
        <h1>User Loading ...</h1>
      ) : (
        <ProtectedRoutes
          pathname={pathname}
          isLoggedIn={!!data?.email}
          privateRoutes={privateRoutes}
          limitedRoutes={limitedRoutes}
        >
          {children}
        </ProtectedRoutes>
      )}
    </StateContext.Provider>
  );
}

export default GlobalStateProvider;
