import { useQuery } from "react-query";

type Options = {
  refetchInterval?: number;
  enabled?: boolean;
};

export const useRequest = <T>(
  queryKey: string | string[],
  request: () => Promise<T>,
  options?: Options
) => {
  return useQuery(queryKey, request, { ...options });
};
