import { useQuery } from "react-query";
import { UserService } from "../../services";

const useMe = () => {
  return useQuery("me", function () {
    return UserService.me();
  });
};

export default useMe;
