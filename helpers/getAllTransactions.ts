import axios from "axios";

// export const getAllTransactions = async (authToken: any, pageNum: number) => {
//     const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
//     const TRANSACTIONS = "/transactions";
  
//     const options = {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     };
  
//     try {
//       const { data } = await axios(`${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`, options);
  
//       return data;
//     } catch (error) {
//       throw error
//     }
//   };

// export const dynamic = 'force-dynamic';

export const getAllTransactions = async (authToken: any, pageNum: number) => {
  const BASE_URL = "https://wallet-backend-xmk0.onrender.com/api";
  const TRANSACTIONS = "/transactions";

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    // cache: "no-store",
    // next: {revalidate: 10}
  };

  try {
    const res = await fetch(`${BASE_URL}${TRANSACTIONS}?page=${pageNum}&limit=10`, options);
    
    const data = await res.json()
    return data;
  } catch (error) {
    throw error
  }
};