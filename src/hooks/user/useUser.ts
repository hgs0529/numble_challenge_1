import { useQuery } from "react-query";
import { UserService } from "../../services";

const useUser = (id: number) => {
  // queryKey 에 id를 넣어 유저별로 고유한 키로 캐싱
  return useQuery(["user", id], function () {
    return UserService.read(id);
  });
};

export default useUser;
