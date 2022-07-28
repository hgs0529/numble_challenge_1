import styled from "@emotion/styled";
import { useState } from "react";
import useProductDetail from "../../../hooks/useProductDetail";
import Button from "../../common/button";
import CustomImage from "../../common/customImage";
import Tabs from "../../common/tabs";
import Tab from "../../common/tabs/Tab";
import TabList from "../../common/tabs/TabList";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Essentials from "./Essentials";

interface Props {
  vendoritemId: string;
  productId: string;
  itemId: string;
}

const ProductDetail = ({ vendoritemId, productId, itemId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useProductDetail(vendoritemId, productId, itemId);

  console.log(data, "data");
  return (
    <Wrapper>
      <Tabs defaultTab="detail">
        <TabList>
          <Tab name="detail">상품상세</Tab>
          <Tab name="review">상품평</Tab>
          <Tab name="qna">상품문의</Tab>
          <Tab name="etc">배송/교환/반품 안내</Tab>
        </TabList>
      </Tabs>
      <Essentials essentials={data?.essentials} />
      <Details isOpen={isOpen}>
        {data?.details?.map((detail, i) => (
          <div key={detail.id}>
            <CustomImage
              src={`http:${detail.imageUrl}`}
              alt="detail"
              width={780}
            />
          </div>
        ))}
      </Details>
      <ButtonWrapper>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          size="large"
          color="primary"
          shape="reverse"
          width={270}
        >
          상품정보 {isOpen ? "접기" : "더보기"}{" "}
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />{" "}
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Wrapper = styled.div``;

const Details = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: ${({ isOpen }) => (isOpen ? "auto" : "1200px")};
`;

export default ProductDetail;
