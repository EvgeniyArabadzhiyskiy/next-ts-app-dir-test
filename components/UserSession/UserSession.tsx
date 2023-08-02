"use client";

import { useSession } from "next-auth/react";

export const UserSession = () => {
  const { data: session } = useSession();
  // console.log("UserSession  session:", session);

  return (
    <>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};