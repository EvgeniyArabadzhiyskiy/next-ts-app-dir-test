"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllTransactions } from "@/helpers/getAllTransactions";
import { parseCookies } from "nookies";

const TransactionList = ({ authToken }: { authToken?: any }) => {
  // console.log("TransactionList  authToken:", authToken);
  const {authToken: token} = parseCookies()
  // console.log("TransactionList  token:", token);
  const queryClient = useQueryClient();
  
  const [pageNum, setPageNum] = useState(1);
  const [trans, setTrans] = useState(authToken);
  
  const { data, isFetching } = useQuery({
    queryKey: ["Transactions", pageNum],
    queryFn: () => getAllTransactions(token, pageNum),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    // enabled: !!authToken,
    // onSuccess: (data) => {
    //   // console.log("TransactionList  data:", data.transactions);
    //   setTrans((prev: any) => [...prev, ...data.transactions])
    // }
  });
  // console.log("TransactionList  data:", data);

//   const queryUserData = queryClient.getQueriesData<any>(["Transactions"]);
//   console.log("Header  queryUserData:", queryUserData);

  // if (isFetching) {
  //   return <h1>Loading Transactions...</h1>;
  // }

  return (
    <>
      <h1>HOME PAGE</h1>
      <Link href="/">HOME</Link>

      {data &&
        data?.transactions?.map((item: any) => {
          return <li key={item._id}>{item.category}</li>;
        })}
    </>
  );
};

export default TransactionList;
