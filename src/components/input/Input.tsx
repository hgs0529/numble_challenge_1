import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { CustomInput, ErrorMsg, IconWrapper, InputWrapper } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  icon?: React.ReactNode;
  errMessage?: string | null;
}

const Input = ({ register, icon, type, errMessage, placeholder }: IProps) => {
  return (
    <div>
      <InputWrapper isValid={!!errMessage}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <CustomInput placeholder={placeholder} type={type} {...register} />
      </InputWrapper>
      {errMessage && <ErrorMsg>{errMessage}</ErrorMsg>}
    </div>
  );
};

export default Input;
