import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { TAgreement } from "../data/signupField";
import { ErrorMsg } from "../input/styles";
import { CheckBoxContext } from "./CheckBoxGroup";
import {
  CheckBoxComponent,
  CheckBoxContent,
  CheckBoxDescription,
  CheckBoxText,
  CheckBoxWrapper,
  CustomCheckBox,
} from "./styles";

export interface ICheckBoxProps {
  register?: UseFormRegisterReturn;
  errMessage?: string | null;
  value: TAgreement;
  label: string;
  description?: string | null;
  bold?: boolean;
  onChange?: (isChecked: boolean, id: string) => void;
  parentId?: string | null;
  checked?: boolean;
  indentLevel?: number;
}

const CheckBox = ({
  description,
  value,
  register,
  bold = false,
  label,
  errMessage,
  parentId = null,
  indentLevel = 0,
  checked = false,
}: ICheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const context = useContext(CheckBoxContext);

  useEffect(() => {
    if (context?.registerValue) {
      context.registerValue({ id: value, checked, parentId });
    }
  }, []);

  useEffect(() => {
    const prevState = context?.list.find((item) => item.id === value);
    const isStateChanged = () => {
      return context?.list && prevState?.checked !== isChecked;
    };

    if (isStateChanged()) {
      setIsChecked(!!context?.list.find((item) => item.id === value)?.checked);
    }
  }, [context, isChecked, value]);

  const handleChange = useCallback(() => {
    if (context?.updateItemState) {
      context.updateItemState(value);
    }
  }, [context, value]);

  return (
    <>
      <CheckBoxComponent indentLevel={indentLevel}>
        <CheckBoxWrapper htmlFor={value}>
          <input
            checked={isChecked}
            id={value}
            value={value}
            type="checkbox"
            {...register}
            onChange={(e) => {
              register?.onChange(e);
              handleChange();
            }}
          />
          <CustomCheckBox className="customCheckBox">
            <FontAwesomeIcon icon={faCheck} />
          </CustomCheckBox>
          <CheckBoxText bold={bold}>{label}</CheckBoxText>
        </CheckBoxWrapper>
        <CheckBoxContent>
          {description && (
            <CheckBoxDescription>{description}</CheckBoxDescription>
          )}
        </CheckBoxContent>
      </CheckBoxComponent>
      {errMessage && <ErrorMsg>{errMessage}</ErrorMsg>}
    </>
  );
};

export default CheckBox;
