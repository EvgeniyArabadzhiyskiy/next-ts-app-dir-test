"use client";

import { useQueryClient } from "@tanstack/react-query";

const UserBox = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<any>(["User"]);

  return <>{JSON.stringify(user, null, 2)}</>;
};

export default UserBox;
