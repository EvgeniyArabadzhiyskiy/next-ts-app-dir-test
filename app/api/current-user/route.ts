import { NextResponse } from "next/server";

export async function GET(req: any) {
  //   console.log("GET  req:", req);

//   const requestHeaders = new Headers(req.headers);
//   requestHeaders.set("x-url", req.url);

  // const { searchParams } = new URL(req.url);
  // const userName = searchParams.get("name");
  // console.log("GET  userName:", userName);

  //   return NextResponse.json({ name: "userName" });

  return NextResponse.json({ name: 'userName' });
}
