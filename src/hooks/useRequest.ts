import { useQuery } from "react-query";
import { UserService } from "../services";

export const useMe = () => {
  return useQuery("me", UserService.me, {
    refetchInterval: 500,
  });
};

export const useRead = (id: number) => {
  return useQuery(["user", id], () => UserService.read(id));
};
