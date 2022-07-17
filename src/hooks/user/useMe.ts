import { userKeys } from "../queryKeys";
import { useQuery } from "react-query";
import { UserService } from "../../services";

const useMe = () => {
  return useQuery(userKeys.me(), () => UserService.me());
};

export default useMe;
