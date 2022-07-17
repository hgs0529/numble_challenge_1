import { userKeys } from "../queryKeys";
import { useQuery } from "react-query";
import { UserService } from "../../services";

const useUser = (id: number) => {
  return useQuery(userKeys.user(id), () => UserService.read(id));
};

export default useUser;
