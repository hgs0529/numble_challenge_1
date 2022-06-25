import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { ISignupData } from "../../types/auth";
import { AuthService } from "../../services";

const useSignup = () => {
  const router = useRouter();

  return useMutation((userData: ISignupData) => AuthService.signup(userData), {
    onSuccess: () => {
      alert("회원가입에 성공하였습니다.");
      // router.push("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export default useSignup;
