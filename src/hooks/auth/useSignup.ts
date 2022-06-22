import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { ISignupData } from "../../interfaces/auth";
import { AuthService } from "../../services";

const useSignup = () => {
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
    AuthService.signup(userData)
  );
  // mutate 함수를 트리거 할수있는 함수와 isLoading을 리턴
  return { signup, isLoading };
};

export default useSignup;
