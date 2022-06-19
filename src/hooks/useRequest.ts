import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AuthService, UserService } from "../services";
import { SignupAgreements } from "../services/auth.service";

interface ILoginData {
  email: string;
  password: string;
}

interface ISignupData extends ILoginData {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  agreements: SignupAgreements;
}

export const useMe = () => {
  return useQuery("me", UserService.me);
};

export const useRead = (id: number) => {
  // queryKey 에 id를 넣어 유저별로 고유한 키로 캐싱
  return useQuery(["user", id], () => UserService.read(id));
};

export const useLogin = () => {
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
    AuthService.login(loginData.email, loginData.password)
  );
  // mutate 함수를 트리거 할수있는 함수와 isLoading을 리턴
  return { login, isLoading };
};

export const useSignup = () => {
  const router = useRouter();

  // 트리거 함수 실행시 mutate 함수 실행
  const signup = (userData: ISignupData) => {
    mutate(userData, {
      onSuccess: () => {
        alert("회원가입에 성공하였습니다.");
        router.push("/login");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const { mutate, isLoading } = useMutation((userData: ISignupData) =>
    AuthService.signup(
      userData.email,
      userData.password,
      userData.name,
      userData.phoneNumber,
      userData.agreements
    )
  );
  // mutate 함수를 트리거 할수있는 함수와 isLoading을 리턴
  return { signup, isLoading };
};
