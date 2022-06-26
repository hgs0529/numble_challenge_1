import { userKeys } from "../user/queryKeys";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { ILoginData } from "../../types/auth";
import { AuthService } from "../../services";

const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation((loginData: ILoginData) => AuthService.login(loginData), {
    onSuccess: () => {
      alert("로그인성공");
      // 로그인 성공시 ["users","me"]라는 키로 저장되어있는 캐시를 갱신한다. 이후 로직에 따라 삭제할수있음.
      queryClient.invalidateQueries(userKeys.me());
      router.push("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export default useLogin;
