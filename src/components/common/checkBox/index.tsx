import styled from "@emotion/styled";
import { forwardRef, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  children?: ReactNode;
  description?: string;
  register?: UseFormRegisterReturn;
}

const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ children, description, register }, ref) => {
    return (
      <>
        <Label>
          <input type="checkbox" ref={ref} {...register} />
          <Text>
            {children}
            {description && <Description>{description}</Description>}
          </Text>
        </Label>
      </>
    );
  }
);

CheckBox.displayName = "CheckBox";

const Description = styled.span`
  font-size: 12px;
  line-height: 18px;
`;

const Label = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export default CheckBox;
