import { HomeWrapper } from "@/components/Statistic/Statistic.styled";
import stl from "./Myhome.module.css";
import { Hydrate, dehydrate } from "@tanstack/react-query";
import getQueryClient from "@/react-query/getQueryClient";
import { getUser } from "@/helpers/getUser";
import { getAllTransactions } from "@/helpers/getAllTransactions";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// export const metadata = {
//   title: "Home Page",
//   description: "Generated by Next.js",
// };

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  // === Авторизация Через функцию getUser напрямую ===
  const currenUser = await getUser(authToken);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["Transactions", 1], () =>
    getAllTransactions(authToken, 1)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <>
      <Hydrate state={dehydratedState}>
        <HomeWrapper>{children}</HomeWrapper>
      </Hydrate>
    </>
  );
  // return <div className={stl.container}>{children}</div>;
}

// ==============================================================================

// // import styles from "@/styles/Home.module.css";
// import styles from "../styles/Home.module.css"
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <main className={styles.main}>
//         <div className={styles.description}>
//           <Link href="/home">HOME PAGE</Link>
//           {/* <Link href="/pokemons/proba">Pokemons Proba</Link>
//           <Link href="/blog">Go Blog</Link>
//           <Link href="/pixabay">PIXABAY</Link>
//           <Link href="/server">Server</Link>
//           <Link href="/login">LOGIN</Link>
//           <Link href="/pokemons/raiting">RAITING</Link> */}
//           <p>
//             Get started by editing&nbsp;
//             <code className={styles.code}>pages/index.js</code>
//           </p>
//         </div>
//       </main>
//     </>
//   );
// }

// ======================app layout ================================
// import StyledComponentsRegistry from '@/lib/registry';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       {/* <head>
//         <link rel="icon" href="/next.svg" />
//       </head> */}
//       <body>
//         <h1>ROOT LAYOUT</h1>
//         <>{children}</>
//       </body>
//     </html>
//   )
// }