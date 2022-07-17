import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "../../../pages/auth/signup";
import { TCheckBoxItem } from "../../hooks/auth/useCheckBoxItems";
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

interface IAllCheckItemProps {
  label: string;
  description?: string;
  errMessage?: string | null;
  onClick?: (list: TCheckBoxItem[] | undefined) => void;
  setValue?: UseFormSetValue<IFormData>;
}

const AllCheckItem = ({
  label,
  description,
  errMessage,
  setValue,
}: IAllCheckItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const context = useContext(CheckBoxContext);

  useEffect(() => {
    if (context && context.allChecked !== isChecked) {
      setIsChecked(context.allChecked);
    }
  }, [context, isChecked]);

  const handleChange = useCallback(() => {
    context?.setAllItemState();
  }, [context]);

  const handleClick = () => {
    if (setValue && context) {
      context.list.forEach((item) => {
        if (isChecked) {
          setValue(item.id, false);
        } else {
          setValue(item.id, item.id);
        }
      });
    }
  };

  return (
    <>
      <CheckBoxComponent indentLevel={0}>
        <CheckBoxWrapper onClick={handleClick} htmlFor="all">
          <input
            checked={isChecked}
            id="all"
            type="checkbox"
            onChange={handleChange}
          />
          <CustomCheckBox className="customCheckBox">
            <FontAwesomeIcon icon={faCheck} />
          </CustomCheckBox>
          <CheckBoxText bold>{label}</CheckBoxText>
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

export default AllCheckItem;
