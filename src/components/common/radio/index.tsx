import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register?: UseFormRegisterReturn;
  children?: React.ReactNode;
  value?: number | string;
  checked?: boolean;
}

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ value, children, register, checked }, ref) => {
    return (
      <label>
        <input
          defaultChecked={checked}
          type="radio"
          value={value}
          ref={ref}
          {...register}
        />
        {children}
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
