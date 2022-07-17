import { useForm } from "react-hook-form";
import Input from "../../src/components/input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../src/components/button/Button";
import CheckBox from "../../src/components/checkBox";
import {
  GroupWrapper,
  InputWrapper,
  Separate,
  SubTitle,
  Wrapper,
} from "../../styles/styles";
import { useRouter } from "next/router";
import { agreementList } from "../../src/components/data/signupField";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/;

export interface IFormData {
  email: string | false;
  password: string | false;
  passwordCheck: string | false;
  name: string | false;
  phone: string | false;
  ads: string | false;
  fourteen: string | false;
  service: string | false;
  commerce: string | false;
  privacy: string | false;
  collect: string | false;
  adEmail: string | false;
  adSms: string | false;
  adPush: string | false;
  requiredAgreement: string | false;
}

export default function SignupPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IFormData>({ mode: "onBlur" });

  const onValid = (data: any) => {
    alert(`${data.email} 님 가입을 환영합니다.`);
    router.push("/");
  };

  const onInvalid = (errors: any) => {
    console.log(errors);
    const errorAgreement = Object.keys(errors);
    const missingAgreement = agreementList
      .filter((agreement) => agreement.required)
      .map((agreement) => agreement.id)
      .filter((agreement) => errorAgreement.includes(agreement));

    missingAgreement.length > 0
      ? setError("requiredAgreement", { message: "약관에 동의해주세요." })
      : clearErrors("requiredAgreement");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <SubTitle>회원정보를 입력해주세요</SubTitle>
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
          <Input
            placeholder="비밀번호 확인"
            type="password"
            icon={<FontAwesomeIcon icon={faLock} />}
            register={register("passwordCheck", {
              required: "확인을 위해 비밀번호를 다시 입력해주세요.",
              validate: (value) =>
                value === watch("password") || "비밀번호가 일치하지 않습니다.",
            })}
            errMessage={
              errors.passwordCheck && String(errors.passwordCheck?.message)
            }
          />
          <Input
            placeholder="이름"
            icon={<FontAwesomeIcon icon={faUser} />}
            register={register("name", {
              required: "이름을 입력해 주세요.",
            })}
            errMessage={errors.name && String(errors.name?.message)}
          />
          <Input
            placeholder="휴대폰 번호"
            icon={<FontAwesomeIcon icon={faMobileScreen} />}
            register={register("phone", {
              required: "휴대폰 번호를 입력해주세요.",
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "휴대폰 번호를 올바르게 입력해주세요.",
              },
            })}
            errMessage={errors.phone && String(errors.phone?.message)}
          />
        </InputWrapper>

        <Separate />

        <SubTitle>쿠팡 서비스약관에 동의해주세요</SubTitle>

        <CheckBox.Group>
          <CheckBox.AllCheckItem
            setValue={setValue}
            label="모두 동의합니다."
            description="동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이 가능합니다."
            errMessage={
              errors.requiredAgreement &&
              String(errors.requiredAgreement?.message)
            }
          />
          <GroupWrapper>
            {agreementList.map((agreement) => (
              <CheckBox
                key={agreement.id}
                value={agreement.id}
                label={agreement.label}
                description={agreement.description}
                parentId={agreement.parentId}
                register={register(agreement.id, {
                  required: agreement.required ? true : undefined,
                })}
                indentLevel={
                  ["adEmail", "adSms", "adPush"].includes(agreement.id) ? 1 : 0
                }
              />
            ))}
          </GroupWrapper>
        </CheckBox.Group>
        <Button theme="default" type="submit">
          동의하고 가입하기
        </Button>
      </form>
    </Wrapper>
  );
}
