import { getCurrent } from "../layout";
import getQueryClient from "@/react-query/getQueryClient";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getPokemonInfo } from "@/helpers/getPokemonInfo";
import { getUser } from "@/helpers/getUser";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}

export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await new Promise(res => setTimeout(() => res(777), 5000))  // Root Loading
  // const user = await getCurrent();
  // console.log("AboutPage>>>>>>>>>>>>>>>>>>>>>>>>>>  user:", user);

  // const isLoggedIn = !!user.email

  // if (!isLoggedIn) {
  //     redirect('/home')
  // }

  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(["User"], getUser);
  // const dehydratedState = dehydrate(queryClient);
  //   console.log("AboutLayout  dehydratedState:", dehydratedState.queries[0].state.data);

  // const queryUserData: UserData | undefined = queryClient.getQueryData(["User"]);
  // const queryUserData = queryClient.getQueryData<UserData | undefined>(["User"]);

  // const queryUserData = queryClient.getQueryData<Partial<UserData>>(["User"]);

  // const isLoggedIn = !!queryUserData?.email;

  // if (isLoggedIn) {
  //   redirect("/login");
  // }

  return (
    <div>
      {/* <Hydrate state={dehydratedState}> */}
      {children}
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      {/* </Hydrate> */}
    </div>
  );
}
