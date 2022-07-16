export type TAgreement =
  | "fourteen"
  | "service"
  | "commerce"
  | "privacy"
  | "collect"
  | "ads"
  | "adEmail"
  | "adSms"
  | "adPush";

interface IAgreement {
  id: TAgreement;
  label: string;
  description: string | null;
  parentId: TAgreement | null;
  required: boolean;
}

export const agreementList: IAgreement[] = [
  {
    id: "fourteen",
    label: "[필수] 만 14세 이상입니다.",
    description: null,
    parentId: null,
    required: true,
  },
  {
    id: "service",
    label: "[필수] 쿠팡 이용약관 동의",
    description: null,
    parentId: null,
    required: true,
  },
  {
    id: "commerce",
    label: "[필수] 전자금융거래 이용약관 동의",
    description: null,
    parentId: null,
    required: true,
  },
  {
    id: "privacy",
    label: "[필수] 개인정보 수집 및 이용 동의",
    description: null,
    parentId: null,
    required: true,
  },
  {
    id: "collect",
    label: "[선택] 광고성 목적의 개인정보 수집 및 이용 동의",
    description: null,
    parentId: null,
    required: false,
  },
  {
    id: "ads",
    label: "[선택] 광고성 정보 전송에 동의",
    description: null,
    parentId: "collect",
    required: false,
  },
  {
    id: "adEmail",
    label: "[선택] 이메일 수신에 동의",
    description: null,
    parentId: "ads",
    required: false,
  },
  {
    id: "adSms",
    label: "[선택] SMS,MMS 수신에 동의",
    description: null,
    parentId: "ads",
    required: false,
  },
  {
    id: "adPush",
    label: "[선택] 푸시 수신에 동의",
    description: null,
    parentId: "ads",
    required: false,
  },
];
