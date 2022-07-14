import styled from "@emotion/styled";

export const InputWrapper = styled.div<{ isValid?: boolean }>`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  &:focus-within {
    border-bottom: 2px solid blue;
    transition: 0.15s ease-in-out;
  }

  ${(props) => props.isValid && `border-bottom: 2px solid red !important;`}
`;

export const IconWrapper = styled.div`
  background-color: #fafafa;
  width: 45px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px;
  box-sizing: border-box;
  svg {
    width: 100%;
    height: 100%;
    color: rgba(0, 0, 0, 0.3);
  }
`;
export const CustomInput = styled.input`
  border: none;
  width: 100%;
  min-height: 35px;
  padding: 5px 8px;
  font-size: 16px;
  text-decoration: none;
  transition: border-color 0.25s ease;
  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled.span`
  color: red;
  font-size: 12px;
  margin-left: 10px;
`;
