import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type Response = {
  users: User[];
  totalCount: number;
};

const getUsers = async (page: number): Promise<Response> => {
  const { data, headers } = await api.get("users", { params: { page } });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((e) => ({
    ...e,
    createdAt: new Date(e.createdAt).toLocaleDateString("pt-Br", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));

  return {
    users,
    totalCount,
  };
};
export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5,
  });
}
