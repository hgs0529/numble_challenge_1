import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const Tab = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  &:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default Tab;
