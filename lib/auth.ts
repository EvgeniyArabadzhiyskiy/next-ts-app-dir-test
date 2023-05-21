import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "email", type: "text", placeholder: "E-mail" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // console.log("authorize  credentials:", credentials);

        const { email, password } = credentials as any

        const res = await fetch(
          "https://wallet-backend-xmk0.onrender.com/api/users/login",
          {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();
        
        if (!res.ok || !user.user.email) {
          return null;
          
        }

        return {
          email: user.user.email,
          name: user.user.firstName,
          image: "https://lh3.googleusercontent.com/a/AGNmyxaH1ShEcTREU_Cw3r0hkMjLydj7y1BX30KyZ1ga=s96-c",
          id: 'Test-ID',
          randomKey: 'Hey Djon',
        };

      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  // callbacks: {
  //   session: ({ session, token }) => {
  //     console.log("Session Callback", { session, token });
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //         id: token.id,
  //         randomKey: token.randomKey,
  //       },
  //     };
  //   },
  //   jwt: ({ token, user }) => {
  //     console.log("JWT Callback", { token, user });
  //     if (user) {
  //       const u = user as unknown as any;
  //       return {
  //         ...token,
  //         id: u.id,
  //         randomKey: u.randomKey,
  //       };
  //     }
  //     return token;
  //   },
  // },
};
