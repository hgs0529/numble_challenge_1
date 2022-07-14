import styled from "@emotion/styled";
import {
  faEnvelope,
  faLock,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button from "../../src/components/button/Button";
import CheckBox from "../../src/components/checkBox/CheckBox";
import Input from "../../src/components/input/Input";
import { InputWrapper, Separate, Wrapper } from "../../styles/styles";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/;

interface ILoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onValid = (data: ILoginForm) => {
    alert(`${data.email} 님 환영합니다.`);
    router.push("/");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onValid)}>
        <InputWrapper>
          <Input
            placeholder="아이디(이메일)"
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            register={register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: emailRegex,
                message: "이메일을 올바르게 입력해주세요.",
              },
            })}
            errMessage={errors.email && String(errors.email?.message)}
          />
          <Input
            placeholder="비밀번호"
            icon={<FontAwesomeIcon icon={faLock} />}
            type="password"
            register={register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: passwordRegex,
                message: "문자/숫자 조합으로 8자리 이상 입력해주세요.",
              },
            })}
            errMessage={errors.password && String(errors.password?.message)}
          />
        </InputWrapper>
        <FindAccountWrapper>
          <CheckBox label="자동로그인" value="autoLogin" />
          <FindAccount>
            아이디/비밀번호 찾기 <FontAwesomeIcon icon={faAngleRight} />
          </FindAccount>
        </FindAccountWrapper>

        <Button theme="default" type="submit">
          로그인
        </Button>
        <Separate />
        <Button theme="reverse" type="button" to="signup">
          회원가입
        </Button>
      </form>
    </Wrapper>
  );
}

const FindAccount = styled.span`
  color: #0073e9;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const FindAccountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
