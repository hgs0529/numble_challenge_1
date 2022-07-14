import React from "react";
import { CheckBoxGroupWrapper } from "./styles";

export type CheckboxValueType = string | number | boolean;

interface IGroupProps {
  children: React.ReactNode;
  border?: boolean;
}

interface ICheckboxGroupContext {
  registerValue: (value: string) => void;
}

export const GroupContext =
  React.createContext<ICheckboxGroupContext | null>(null);

const CheckBoxGroup = ({ children, border }: IGroupProps) => {
  const [registeredValues, setRegisteredValues] = React.useState<
    CheckboxValueType[]
  >([]);

  const registerValue = (value: string) => {
    setRegisteredValues((prev) => [...prev, value]);
  };

  return (
    <GroupContext.Provider value={{ registerValue }}>
      <CheckBoxGroupWrapper border={border}>{children}</CheckBoxGroupWrapper>
    </GroupContext.Provider>
  );
};

export default CheckBoxGroup;
