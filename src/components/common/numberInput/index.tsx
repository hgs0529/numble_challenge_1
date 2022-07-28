import styled from "@emotion/styled";
import { forwardRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  register?: UseFormRegisterReturn;
  max?: number;
  min?: number;
  defaultValue?: number;
}

const NumberInput = forwardRef<HTMLInputElement, Props>(
  ({ register, min, max, defaultValue = 0 }, ref) => {
    const [value, setValue] = useState(defaultValue);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let result = +e.target.value;
      if (min && result < min) {
        result = min;
      }
      if (max && result > max) {
        result = max;
      }
      setValue(result);
    };

    return (
      <Wrapper>
        <Input
          value={value}
          type="number"
          min={min}
          max={max}
          ref={ref}
          onChange={(e) => {
            register?.onChange(e);
            handleChange(e);
          }}
          {...register}
        />
        <ControlBox>
          <ControlBtn
            onClick={() =>
              setValue((prev) => (max && prev >= max ? max : ++prev))
            }
          >
            <FontAwesomeIcon icon={faAngleUp} size="sm" />
          </ControlBtn>
          <ControlBtn
            onClick={() =>
              setValue((prev) => (min && prev <= min ? min : --prev))
            }
          >
            <FontAwesomeIcon icon={faAngleDown} size="sm" />
          </ControlBtn>
        </ControlBox>
      </Wrapper>
    );
  }
);

NumberInput.displayName = "NumberInput";

const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  font-size: 16px;
  height: 100%;
  width: 70px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-right: none;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ControlBox = styled.div`
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ControlBtn = styled.div`
  height: 50%;
  padding: 0 8px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.3);
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export default NumberInput;
