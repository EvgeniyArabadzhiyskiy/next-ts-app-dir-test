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

        const { email, password } = credentials as any;

        const res = await fetch(
          "https://wallet-backend-xmk0.onrender.com/api/users/login",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();

        if (!res.ok || !user.user.email) {
          return null;
        }

        return user;
        
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user, account }) => {
      // console.log("user========================",user);
      return { ...token, ...user };

      // if (user) {
      //   const u = user as unknown as any;
      //   const result = {
      //     ...token,
      //     token: u.token,
      //     user: u.user,
      //   };
      //   console.log("result***********фффффффффф", result);
      //   return result
      // }
      //  else { return token; }
    },
    session: ({ session, token }) => {
      // session.user = token
      // return session

      return {
        ...session,

        user: {
          ...session.user,
          token: token.token,
          user: token.user,
        },
      };
    },

  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
};


//===============================================
// const  JWT Callback = {
//   token: {
//     name: 'Pol',
//     email: 'user100@mail.com',
//     picture: 'https://lh3.googleusercontent.com/a/AGNmyxaH1ShEcTREU_Cw3r0hkMjLydj7y1BX30KyZ1ga=s96-c',
//     sub: 'Test-ID',
//     iat: 1684743424,
//     exp: 1687335424,
//     jti: '1a1ae5cd-6a04-451f-ae91-1a8768154e90'
//   },
//   user: undefined
// }
