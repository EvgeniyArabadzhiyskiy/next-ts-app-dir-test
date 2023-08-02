import { getUser } from "@/helpers/getUser";
import { useQuery } from "@tanstack/react-query";
import { redirect, useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useEffect } from "react";

export const useUser = (redirectTo: string, restricted: boolean) => {
  const router = useRouter();
  const { authToken } = parseCookies();
  //   const  authToken  = undefined;

  const data = useQuery({
    queryKey: ["User"],
    queryFn: () => getUser(authToken),
    staleTime: Infinity,
    retry: false,
  });

  const isLoggedIn = !!data.data;

  useEffect(() => {
    if (isLoggedIn && restricted) {
      router.push(redirectTo);
    }
  }, [isLoggedIn, redirectTo, restricted, router]);

  const currentUser = {
    ...data,
    isLoggedIn,
  };

  return currentUser;
};

//   if (!isLoggedIn) {
//       // console.log("WWWWWWWWWWWWWWWWWWWWW");

//       router.push("/login");
//   }
