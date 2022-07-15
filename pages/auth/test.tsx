import { useForm } from "react-hook-form";
import Button from "../../src/components/button/Button";
import CheckBox from "../../src/components/checkBox/CheckBoxTest";
import { Wrapper } from "../../styles/styles";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

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

export default function Test() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onValid = (data: any) => {
    console.log(data);
  };

  const onInvalid = (errors: any) => {
    console.log(errors);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <CheckBox.Group>
          <CheckBox.AllCheckItem
            label="모두 동의합니다."
            description="동의에는 필수 및 선택 목적(광고성 정보 수신 포함)에 대한 동의가 포함되어 있으며, 선택 목적의 동의를 거부하시는 경우에도 서비스 이용이 가능합니다."
          />
          <GroupWrapper>
            {consentList.map((consent) => (
              <CheckBox
                key={consent.id}
                value={consent.id}
                label={consent.label}
                description={consent.description}
                parentId={consent.parentId}
                register={register(consent.id)}
                indentLevel={
                  ["email", "sms", "push"].includes(consent.id) ? 1 : 0
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

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
