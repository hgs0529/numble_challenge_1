import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "아이디를 입력해주세요.",
};

export const Icon = Template.bind({});
Icon.args = {
  placeholder: "아이디를 입력해주세요.",
  icon: <FontAwesomeIcon icon={faLock} />,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "아이디를 입력해주세요.",
  icon: <FontAwesomeIcon icon={faLock} />,
  errMessage: "아이디를 입력해주세요.",
};
