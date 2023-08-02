import { getUser } from "@/helpers/getUser";
import getQueryClient from "@/react-query/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthServerProvider({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  // await new Promise(res => setTimeout(() => res(777), 15000))

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["User"], () => getUser(authToken));
  const dehydratedState = dehydrate(queryClient);
  const currenUser = queryClient.getQueryData<any>(["User"]);
  // console.log("AuthServerProvider  currenUser:", currenUser);

  // const isLoggedIn = !!currenUser?.email
  // console.log("AuthServerProvider  isLoggedIn:", isLoggedIn);

  // if (!isLoggedIn ) {
  //   redirect("/login",);
  // }

  // if (isLoggedIn) {
  //   redirect("/home");
  // }

  return (
    <>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </>
  );
}
