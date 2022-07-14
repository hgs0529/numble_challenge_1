import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "로그인",
  theme: "default",
  type: "submit",
};

export const Reverse = Template.bind({});
Reverse.args = {
  children: "로그인",
  theme: "reverse",
  type: "submit",
};
