import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBox from ".";

export default {
  title: "CheckBoxGroup",
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox.Group>
    <CheckBox.AllCheckItem label="동의해주세요." />
    <CheckBox label="테스트1" value="adEmail" />
    <CheckBox label="테스트2" value="adEmail" />
    <CheckBox label="테스트3" value="adEmail" />
    <CheckBox label="테스트4" value="adEmail" />
    <CheckBox label="테스트5" value="adEmail" />
  </CheckBox.Group>
);

export const Default = Template.bind({});
