import styled from "@emotion/styled";
import { useState } from "react";
import { TProductEssential } from "../../../../pages/api/products/[productId]/items/[itemId]/vendoritems/[vendoritemId]";
import Button from "../../common/button";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  essentials?: TProductEssential[];
}

const Essentials = ({ essentials }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <EssentialTitle>필수 표기정보</EssentialTitle>
      <Wrapper>
        {essentials
          ?.filter((_, i) => (isOpen ? true : i <= 5))
          .map((essential, i) => (
            <EssentialBox key={i}>
              <InfoTitle>{essential.title}</InfoTitle>
              <InfoContent>{essential.description}</InfoContent>
            </EssentialBox>
          ))}
        <ButtonWrapper>
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            shape="transparent"
            color="primary"
          >
            필수 표시정보 {isOpen ? "접기" : "더보기"}{" "}
            <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
`;

const EssentialTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #eee;
  margin-bottom: 30px;
`;

const EssentialBox = styled.div`
  display: flex;
  width: 50%;
  color: rgba(0, 0, 0, 0.7);
  border-bottom: 1px solid #eee;

  div {
    padding: 12px 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const InfoTitle = styled.div`
  font-size: 12px;
  width: 30%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.02);
`;

const InfoContent = styled.div`
  font-size: 12px;
  padding: 10px;
  width: 70%;
`;

export default Essentials;
