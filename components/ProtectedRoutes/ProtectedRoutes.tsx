"use client";

import { getLimitedPath } from "@/helpers/getLimitedPath";
import { getPrivatePath } from "@/helpers/getPrivatePath";
import { redirect } from "next/navigation";
import React from "react";

interface IProps {
  children: React.ReactNode;
  pathname: string | null;
  isLoggedIn: boolean | undefined;
  privateRoutes: string[];
  limitedRoutes: string[];
}

export default function ProtectedRoutes({
  children,
  pathname,
  isLoggedIn,
  privateRoutes,
  limitedRoutes,
}: IProps) {
  // console.log("isLoggedIn:", isLoggedIn);
  // const privatePath = getPrivatePath(pathname, privateRoutes);
  // const limitedPath = getLimitedPath(pathname, limitedRoutes);

  // if (!isLoggedIn && privatePath) {
  //   redirect("/login");
  // }

  // if (isLoggedIn && limitedPath) {
  //   redirect("/about");
  // }

  return <>{children}</>;
}
