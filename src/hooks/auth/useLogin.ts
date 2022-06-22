import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "react-query";
import { ILoginData } from "../../interfaces/auth";
import { AuthService } from "../../services";

const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  // 트리거 함수 실행시 mutate 함수 실행
  const login = (loginData: ILoginData) => {
    mutate(loginData, {
      onSuccess: () => {
        alert("로그인성공");
        // 로그인 성공시 "me"라는 키로 저장되어있는 캐시를 갱신한다. 이후 로직에 따라 삭제할수있음.
        queryClient.invalidateQueries(["me"]);
        router.push("/");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const { mutate, isLoading } = useMutation((loginData: ILoginData) =>
    AuthService.login(loginData)
  );
  // mutate 함수를 트리거 할수있는 함수와 isLoading을 리턴
  return { login, isLoading };
};

export default useLogin;
