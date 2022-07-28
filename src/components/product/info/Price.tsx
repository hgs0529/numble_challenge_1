import styled from "@emotion/styled";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  TCashBack,
  TCcid,
  TPrice,
} from "../../../../pages/api/products/[productId]/vendoritems/[vendoritemId]";
import Button from "../../common/button";

interface Props {
  price?: TPrice;
  badge?: string;
  ccid?: TCcid;
  cashBack?: TCashBack;
}

const Price = ({ price, badge, ccid, cashBack }: Props) => {
  return (
    <PriceWrapper>
      <OriginPrice>
        <span>{price?.discountRate}%</span>
        <OriginPriceText>{price?.originPrice}</OriginPriceText>
        <Button shape="icon">
          <FontAwesomeIcon icon={faExclamation} size="xs" />
        </Button>
      </OriginPrice>
      <SalePrice>
        <strong>{price?.salePrice}</strong>
        <span>{price?.priceUnit}</span>
        {badge && (
          <ImageWrapper>
            <Image src={`http:${badge}`} alt="badge" width={55} height={14} />
          </ImageWrapper>
        )}
      </SalePrice>
      <FlexBox>
        {ccid && (
          <Button width={150} shape="rounded" color="default" size="extraSmall">
            <Image
              src={`http:${ccid.iconUrl}`}
              alt="ccid-icon"
              height={10}
              width={14}
            />
            {ccid.ccidText}
          </Button>
        )}
        {cashBack && (
          <Button width={150} shape="rounded" color="default" size="extraSmall">
            <Image
              src={`http:${cashBack.iconUrl}`}
              alt="ccid-icon"
              height={14}
              width={14}
            />
            {`최대 ${cashBack.finalCashBackAmt.toLocaleString()}원 적립`}
          </Button>
        )}
      </FlexBox>
    </PriceWrapper>
  );
};

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
`;

const SalePrice = styled.div`
  display: flex;
  color: #ae0000;
  font-size: 20px;
  font-weight: bold;
  line-height: 21px;
  margin-top: 5px;
  span {
    margin-left: 3px;
  }
`;

const OriginPrice = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const OriginPriceText = styled.div`
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
`;

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 17px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default Price;
