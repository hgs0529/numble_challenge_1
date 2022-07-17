import styled from "@emotion/styled";

export const StyledBtn = styled.button`
  width: 100%;
  background-color: ${(props) =>
    props.theme === "default" ? "#0073e9" : "white"};
  border-radius: 3px;
  border: 1px solid #ccc;
  color: ${(props) => (props.theme === "default" ? "white" : "#0073e9")};
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
