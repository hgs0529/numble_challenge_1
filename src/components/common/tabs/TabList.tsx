import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const TabList = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  padding: 0;
  display: flex;
  width: 100%;
  position: sticky;
  z-index: 5;
  top: 0;
  border-top: 2px solid #555;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
`;

export default TabList;
