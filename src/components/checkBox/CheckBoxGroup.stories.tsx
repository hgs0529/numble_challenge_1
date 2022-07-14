import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBoxGroup from "./CheckBoxGroup";
import CheckBox from "./CheckBox";

export default {
  title: "CheckBoxGroup",
  component: CheckBoxGroup,
} as ComponentMeta<typeof CheckBoxGroup>;

const Template: ComponentStory<typeof CheckBoxGroup> = (args) => (
  <CheckBoxGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <CheckBox key={0} value="fourteen" label="[필수] 만 14세 이상입니다." />,
    <CheckBox key={1} value="service" label="[필수] 쿠팡 이용약관 동의" />,
    <CheckBox key={2} value="privacy" label="[필수] 개인정보 취급방침 동의" />,
    <CheckBox key={3} value="ads" label="[선택] 광고성 정보 수신동의" />,
  ],
};

export const Border = Template.bind({});
Border.args = {
  border: true,
  children: [
    <CheckBox key={0} value="fourteen" label="[필수] 만 14세 이상입니다." />,
    <CheckBox key={1} value="service" label="[필수] 쿠팡 이용약관 동의" />,
    <CheckBox key={2} value="privacy" label="[필수] 개인정보 취급방침 동의" />,
    <CheckBox key={3} value="ads" label="[선택] 광고성 정보 수신동의" />,
  ],
};

export const WithOtherGroup = Template.bind({});
WithOtherGroup.args = {
  border: true,
  children: [
    <CheckBox key={0} value="fourteen" label="[필수] 만 14세 이상입니다." />,
    <CheckBox key={1} value="service" label="[필수] 쿠팡 이용약관 동의" />,
    <CheckBox key={2} value="privacy" label="[필수] 개인정보 취급방침 동의" />,
    <CheckBox key={3} value="ads" label="[선택] 광고성 정보 수신동의" />,
    <CheckBox.Group key={4}>
      <CheckBox value="email" label="[선택] 이메일 수신동의" />
      <CheckBox value="sms" label="[선택] SMS 수신동의" />
      <CheckBox value="marketing" label="[선택] 앱 푸시 수신 동의" />
    </CheckBox.Group>,
  ],
};
