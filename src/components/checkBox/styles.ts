import styled from "@emotion/styled";

export const CheckBoxComponent = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  input {
    display: none;
  }
  input:checked + label {
    background-color: blue;
  }
  input:checked + label svg {
    color: white;
  }
`;

export const CustomCheckBox = styled.label`
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  min-width: 20px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
  svg {
    color: rgba(0, 0, 0, 0.1);
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const CheckBoxDescription = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0.5rem;
`;

export const CheckBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
`;
export const CheckBoxText = styled.span<{ bold?: boolean }>`
  font-size: ${(props) => (props.bold ? "17px" : "14px")};
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  color: rgba(0, 0, 0, 0.8);
`;
