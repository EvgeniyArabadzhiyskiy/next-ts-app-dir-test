// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/home", "/about"],
// };

// =================================================================

import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    const isLoggedIn = !!req.nextauth.token;
    console.log("========================", isLoggedIn);

    // if (!isLoggedIn && req.nextUrl.pathname.startsWith("/about")) {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // }

    if (isLoggedIn && req.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  },

  {
    callbacks: {
      authorized: ({ token, req }) => {
        return !!token

        return false;
      },
    },
  }
);

export const config = { matcher: ["/about",
 "/login"
] };

// ========= Авторизация на сервере и приват редирект =================
// import { NextResponse } from "next/server";
// import getQueryClient from "./react-query/getQueryClient";
// import { getPokemonInfo } from "./helpers/getPokemonInfo";
// import { dehydrate } from "@tanstack/react-query";

// const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
// const USER_CURRENT = "/users/current";

// const privateRoutes = [ "/about", "/hydrate", "/pokemons"];

// const getPrivate = (req: any) => {
//   for (let i = 0; i < privateRoutes.length; i += 1) {
//     const path = privateRoutes[i];

//     if (req.nextUrl.pathname.startsWith(path)) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }
// };

// export async function middleware(req: any) {
//   const cookies = req.cookies;
//   const authToken = cookies.get("authToken")?.value;

//   if (!authToken) {
//     return NextResponse.next();
//   }

//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   };

//   const resFetch = await fetch(`${BASE_URL}${USER_CURRENT}`, options);
//   const user = (await resFetch.json()) as any;
//   const isLoggedIn = !!user?.email;

//   if (req.nextUrl.pathname.startsWith("/about") && !isLoggedIn) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (!isLoggedIn) {
//     return getPrivate(req)
//   }
// }

// export const config = {
//   matcher: [
//     "/hydrate",
//     "/",
//     "/home",
//     "/about",
//     "/pokemons/:path*"
//   ],
// };

// ==================Всякое чепуха========================================
// export async function middleware(req: any) {
//     // const pathname  = req.nextUrl.pathname;
//   // const requestHeaders = new Headers(req.headers);
//   // requestHeaders.set("x-url", pathname);

//   const cookies = req.cookies;
//   const authToken = cookies.get("authToken")?.value;
//   // console.log("middleware  authToken:", authToken);

//   // const requestHeaders = new Headers(req.headers);

//   if (authToken) {
//     // requestHeaders.set("authorization", `Bearer ${authToken}`);
//   }

//   const options = {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   };

//   const resFetch = await fetch(`${BASE_URL}${USER_CURRENT}`, options);
//   const user = (await resFetch.json()) as any;

//   console.log("middleware  user:", user);

//   const isLoggedIn = !!user?.email;

//   if (req.nextUrl.pathname.startsWith('/about') && isLoggedIn) {
//     return NextResponse.redirect(new URL('/home', req.url));
//   }

//   // return NextResponse.next({
//   //   request: {
//   //     headers: requestHeaders,
//   //   },
//   // });
// }
