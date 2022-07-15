import styled from "@emotion/styled";
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
import CheckBox from "../../src/components/checkBox/CheckBox";
import { InputWrapper, Separate, SubTitle, Wrapper } from "../../styles/styles";
import { useRouter } from "next/router";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex = /(?=.*\d)(?=.*[a-z]).{8,}/;

type TRequiredConsent = "fourteen" | "service" | "privacy";
type TOptionalConsent = "email" | "sms" | "marketing";
interface IFormData {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  all: string | boolean;
  ads: string | boolean;
  requiredConsents: TRequiredConsent[];
  optionalConsents: TOptionalConsent[];
}

const consentList = [
  {
    id: "fourteen",
    label: "[필수] 만 14세 이상입니다.",
    description: null,
    parentId: null,
  },
  {
    id: "service",
    label: "[필수] 쿠팡 이용약관 동의",
    description: null,
    parentId: null,
  },
  {
    id: "commerce",
    label: "[필수] 전자금융거래 이용약관 동의",
    description: null,
    parentId: null,
  },
  {
    id: "privacy",
    label: "[필수] 개인정보 수집 및 이용 동의",
    description: null,
    parentId: null,
  },
  {
    id: "collect",
    label: "[선택] 광고성 목적의 개인정보 수집 및 이용 동의",
    description: null,
    parentId: null,
  },
  {
    id: "ads",
    label: "[선택] 광고성 정보 전송에 동의",
    description: null,
    parentId: "collect",
  },
  {
    id: "email",
    label: "[선택] 이메일 수신에 동의",
    description: null,
    parentId: "ads",
  },
  {
    id: "sms",
    label: "[선택] SMS,MMS 수신에 동의",
    description: null,
    parentId: "ads",
  },
  {
    id: "push",
    label: "[선택] 푸시 수신에 동의",
    description: null,
    parentId: "ads",
  },
];

export default function SignupPage() {
  const router = useRouter();

  const ALL_REQUIRED_CONSENTS: TRequiredConsent[] = [
    "fourteen",
    "service",
    "privacy",
  ];
  const ALL_OPTIONAL_CONSENTS: TOptionalConsent[] = [
    "email",
    "sms",
    "marketing",
  ];
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
    if (
      data.requiredConsents &&
      data.requiredConsents.length !== ALL_REQUIRED_CONSENTS.length
    ) {
      setError("requiredConsents", { message: "약관에 동의해주세요." });
      return;
    }

    alert(`${data.email} 님 가입을 환영합니다.`);
    router.push("/");
  };

  const onInvalid = (errors: any) => {
    if (
      !errors.requiredConsents &&
      watch("requiredConsents").length !== ALL_REQUIRED_CONSENTS.length
    ) {
      setError("requiredConsents", { message: "약관에 동의해주세요." });
    }
  };

  const handleAllCheck = (checked: boolean) => {
    setValue("requiredConsents", checked ? ALL_REQUIRED_CONSENTS : []);
    setValue("optionalConsents", checked ? ALL_OPTIONAL_CONSENTS : []);
    setValue("ads", checked ? "ads" : false);
    clearErrors("requiredConsents");
  };

  const handleCheckBoxChange = () => {
    setValue("all", isAllChecked() ? "all" : false);
    function isAllChecked() {
      const requierdConsent = watch("requiredConsents");
      const optionalConsent = watch("optionalConsents");
      return (
        requierdConsent.length === ALL_REQUIRED_CONSENTS.length &&
        optionalConsent.length === ALL_OPTIONAL_CONSENTS.length
      );
    }
  };

  const handleOptionalCheck = (checked: boolean) => {
    setValue("optionalConsents", checked ? ["email", "sms", "marketing"] : []);
  };

  const handleOptionalChange = () => {
    setValue("ads", isAllOptionalUnChecked() ? false : "ads");

    function isAllOptionalUnChecked() {
      const optionalConsent = watch("optionalConsents");
      return optionalConsent ? optionalConsent?.length === 0 : true;
    }
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

        <CheckBox
          register={register("all")}
          label="모두 동의합니다."
          description="동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이 가능합니다."
          value="all"
          bold
          onChange={handleAllCheck}
          errMessage={
            errors.requiredConsents && String(errors.requiredConsents?.message)
          }
        />
        <CheckBox.Group border>
          <CheckBox
            register={register("requiredConsents", {
              required: "약관에 동의해주세요.",
            })}
            value="fourteen"
            label="[필수] 만 14세 이상입니다."
            onChange={handleCheckBoxChange}
          />
          <CheckBox
            register={register("requiredConsents", {
              required: "약관에 동의해주세요.",
            })}
            value="service"
            label="[필수] 쿠팡 이용약관 동의"
            onChange={handleCheckBoxChange}
          />
          <CheckBox
            register={register("requiredConsents", {
              required: "약관에 동의해주세요.",
            })}
            value="privacy"
            label="[필수] 개인정보 취급방침 동의"
            onChange={handleCheckBoxChange}
          />
          <CheckBox
            register={register("ads")}
            value="ads"
            label="[선택] 광고성 정보 수신동의"
            onChange={(isChecked: boolean) => {
              handleOptionalCheck(isChecked);
              handleCheckBoxChange();
            }}
          />
          <CheckBox.Group>
            <CheckBox
              register={register("optionalConsents")}
              value="email"
              label="[선택] 이메일 수신동의"
              onChange={() => {
                handleOptionalChange();
                handleCheckBoxChange();
              }}
            />
            <CheckBox
              register={register("optionalConsents")}
              value="sms"
              label="[선택] SMS 수신동의"
              onChange={() => {
                handleOptionalChange();
                handleCheckBoxChange();
              }}
            />
            <CheckBox
              register={register("optionalConsents")}
              value="marketing"
              label="[선택] 앱 푸시 수신 동의"
              onChange={() => {
                handleOptionalChange();
                handleCheckBoxChange();
              }}
            />
          </CheckBox.Group>
        </CheckBox.Group>
        <Button theme="default" type="submit">
          동의하고 가입하기
        </Button>
      </form>
    </Wrapper>
  );
}
