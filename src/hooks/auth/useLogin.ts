import { userKeys } from "../queryKeys";
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

      queryClient.invalidateQueries(userKeys.me());
      router.push("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export default useLogin;
