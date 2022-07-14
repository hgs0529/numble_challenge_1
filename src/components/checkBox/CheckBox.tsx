import React, { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { ErrorMsg } from "../input/styles";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CheckBoxComponent,
  CheckBoxContent,
  CheckBoxDescription,
  CheckBoxText,
  CheckBoxWrapper,
  CustomCheckBox,
} from "./styles";
import CheckBoxGroup from "./CheckBoxGroup";

interface ICheckBoxProps {
  register?: UseFormRegisterReturn;
  errMessage?: string | null;
  value: string;
  label: string;
  description?: string;
  bold?: boolean;
  onChange?: (isChecked: boolean, id: string) => void;
}

const CheckBox = ({
  register,
  errMessage,
  value,
  label,
  description,
  bold,
  onChange,
}: ICheckBoxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (onChange) {
      onChange(checked, value);
    }
  };

  return (
    <>
      <CheckBoxComponent>
        <CheckBoxWrapper>
          <input
            id={value}
            value={value}
            type="checkbox"
            {...register}
            onChange={(e) => {
              register?.onChange(e);
              handleChange(e);
            }}
          />
          <CustomCheckBox htmlFor={value}>
            <FontAwesomeIcon icon={faCheck} />
          </CustomCheckBox>
          <CheckBoxContent>
            <CheckBoxText bold={bold}>{label}</CheckBoxText>
            {description && (
              <CheckBoxDescription>{description}</CheckBoxDescription>
            )}
          </CheckBoxContent>
        </CheckBoxWrapper>
      </CheckBoxComponent>
      {errMessage && <ErrorMsg>{errMessage}</ErrorMsg>}
    </>
  );
};

export default CheckBox;
CheckBox.Group = CheckBoxGroup;
