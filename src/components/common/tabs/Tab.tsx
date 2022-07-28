import styled from "@emotion/styled";
import { useCallback, useContext, useEffect, useState } from "react";
import { tabsContext } from ".";

interface Props {
  children: React.ReactNode;
  name: string;
}

const Tab = ({ children, name }: Props) => {
  const context = useContext(tabsContext);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (context?.activeTab) {
      setActive(context.activeTab === name);
    }
  }, [context, name]);

  const handleClick = useCallback(() => {
    context?.setActiveTab(name);
  }, [context, name]);

  return (
    <Wrapper onClick={handleClick} active={active}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  border-bottom: 1px solid
    ${({ active }) => (active ? "transparent" : "rgba(0, 0, 0, 0.1)")};
  background-color: ${({ active }) => (active ? "white" : "#fafafa")};
  color: ${({ active }) => (active ? "black" : "#555")};
`;

export default Tab;
