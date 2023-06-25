// "use client";

import ProtectedRoutes from "@/components/ProtectedRoutes/ProtectedRoutes";
import { getUser } from "@/helpers/getUser";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { parseCookies } from "nookies";
import React, { createContext, useEffect, useState } from "react";

interface IUser {
  email?: string;
  firstName?: string;
  balance?: number;
  message?: string;
}

interface IProps {
  children: React.ReactNode;
}

const privateRoutes = ["/about", "/hydrate", "/pokemons"];
const limitedRoutes = ["/home", "/register"];

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

  try {
    // const res = await fetch(`${BASE_URL}${USER_CURRENT}`, options);

    // if (!res.ok) {
    //   throw new Error("NEW User  Unauthorized");
    // }

    // const user = (await res.json()) as IUser;
    // return user;

    const { data } = await axios(`${BASE_URL}${USER_CURRENT}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    // console.log("getCurrentUser  data:", data);
    return data;
  } catch (error) {
    // console.log("getCurrentUser  error:", error);
    throw error;
  }
};

// if (user.message === "Unauthorized") {
//   throw new Error("User Unauthorized");
// }

// export const StateContext = createContext<any | undefined>(undefined);

export default function GlobalStateProvider({ children }: IProps) {
  // const pathname = usePathname();
  // const { authToken } = parseCookies();

  // getCurrentUser().then(data => {
  //   console.log("DATA_USER", data);
  // }).catch(err => {
  //   console.log("getCurrentUser  err:", err);
  // })

  // const [userData, setUserData] = useState<IUser>(user);

  // const { data, error, isError, isFetching } = useQuery({
  //   queryKey: ["currentUser"],
  //   queryFn: getCurrentUser,
  //   staleTime: Infinity,
  //   retry: false,
  //   // retryDelay: 10000,
  //   // retryOnMount: false,
  //   onError: (err) => {
  //     // console.log("GlobalStateProvider  err:", err);
  //   },
  // });
  // console.log("GlobalStateProvider  error:", error);
  // console.log("GlobalStateProvider  data:", data);

  // const isLogge = !!data?.email

  // console.log("isFetchedAfterMount  :", isFetching);
  // console.log("GlobalStateProvider  isFetching:", isFetching);
  // console.log("GlobalStateProvider  isLoading:", isLoading );
  // console.log("GlobalStateProvider  data:", !!data?.email);

  // const fff = !!data?.email;

  // if (isFetching) {
  //   // redirect('/login')
  //   return <>
  //   <h1>Loading Auth..</h1>
  //   </>
  // }

  // if (isError) {
  //   // redirect('/home')
  //   // return <>
  //   // <Link href='/login'>Login</Link>
  //   // <h1>Error Auth</h1>
  //   // </>
  // }

  return (
    <>
      {/* <StateContext.Provider value={{ isLoggedIn, userData, setUserData }}> */}
      {
        <>
          <ProtectedRoutes
            pathname={"/"}
            isLoggedIn={true}
            privateRoutes={privateRoutes}
            limitedRoutes={limitedRoutes}
          >
            {/* <h1>{JSON.stringify(!!data?.email)}</h1> */}
            {children}
          </ProtectedRoutes>
        </>
      }
      {/* </StateContext.Provider> */}
    </>
  );
}
