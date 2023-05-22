"use client";

import { StateContext } from "@/app/GlobalStateProvider/GlobalStateProvider";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useRef } from "react";

function StatePreloader({ results }: { results?: any }) {
  //   console.log("StatePreloader  results:", results);
  const pathname = usePathname();

  const loaded = useRef(false);
  const { globalData, setGlobalData, userData, setUserData, isLoggedIn } = useContext(StateContext);
  // console.log("StatePreloader  isLoggedIn:", isLoggedIn);
  // console.log("StatePreloader  user:", userData);

  // if (!isLoggedIn) {
  //   redirect("/login");
  // }

  const onClick = () => {
    // setGlobalData("Poly");
    setGlobalData("Mango");
    setUserData({
      email: "Kiwi@mail.de",
      firstName: "Poly",
      balance: 2500,
    })
  };


    // useEffect(() => {
    //   // if (results.length === 0) {
    //   //     return
    //   // }
    //   setGlobalData(results);
    // },[results, setGlobalData])

  //   if (!loaded.current) {
  //   setGlobalData(results);
  //     console.log("StatePreloader  globalData:", globalData);
  //     loaded.current = true;
  //   }

  // return null;

  return (
    <>
      <p>Current pathname: {pathname}</p>
      <h1>{globalData}</h1>
      <button type="button" onClick={onClick}>CLICK</button>
    </>
  );
}

export default StatePreloader;
