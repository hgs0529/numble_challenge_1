import styled from "@emotion/styled";

export const CheckBoxComponent = styled.div<{ indentLevel: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 7px 0;
  margin-left: ${(props) => `${props.indentLevel * 1.5}rem`};
`;

export const CustomCheckBox = styled.div`
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

export const CheckBoxWrapper = styled.label`
  display: flex;
  align-items: flex-start;

  input {
    display: none;
  }
  input:checked + .customCheckBox {
    background-color: blue;
  }
  input:checked + .customCheckBox svg {
    color: white;
  }
`;

export const CheckBoxDescription = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0.5rem;
  margin-left: 1.5rem;
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

export const CheckBoxGroupWrapper = styled.div<{ border?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.border ? "1.2rem 0" : "")};
  border: ${(props) =>
    props.border ? "1px solid rgba(0, 0, 0, 0.1)" : "none"};
  padding: ${(props) => (props.border ? "10px 15px" : "0 15px")};
`;
