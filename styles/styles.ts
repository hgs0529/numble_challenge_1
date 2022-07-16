import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 460px;
  margin: 0 auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    margin: 0.5rem 0;
  }
`;

export const Separate = styled.div`
  height: 1px;
  background-color: #e6e6e6;
  margin: 0.5rem 0;
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin: 20px 0;
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
