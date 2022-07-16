import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBox from "./CheckBox";

export default {
  title: "CheckBox",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "service",
  label: "테스트용 체크박스",
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  value: "fourteen",
  label: "테스트용 체크박스",
};

export const Description = Template.bind({});
Description.args = {
  bold: true,
  description: "테스트용 설명입니다.",
  value: "adSms",
  label: "테스트용 체크박스",
};
