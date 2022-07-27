import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Button from "../../common/button";
import Rating from "../../common/rating";

interface Props {
  coupickIcon?: string;
  name?: string;
  brandName?: string;
  rating?: {
    average: number;
    count: number;
  };
}

const Header = ({ coupickIcon, name, brandName, rating }: Props) => {
  return (
    <>
      {coupickIcon && (
        <TitleBadge>
          <Image
            src={`http:${coupickIcon}`}
            alt="쿠팡추천"
            width={68}
            height={20}
          />
        </TitleBadge>
      )}
      <LinkText>{brandName}</LinkText>
      <BuyHeader>
        <div>
          <ProductName>{name?.split(",")[0]}</ProductName>
          <Rating
            average={rating?.average}
            text={`${rating?.count.toLocaleString()}개 상품평`}
            hasLink
            href="/#"
          />
        </div>
        <ButtonBox>
          <Button shape="circle" color="default">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </Button>
          <Button shape="circle" color="default">
            <FontAwesomeIcon icon={faShareNodes} size="lg" />
          </Button>
        </ButtonBox>
      </BuyHeader>
    </>
  );
};

const ButtonBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const TitleBadge = styled.div`
  margin-bottom: 7px;
`;
const BuyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const ProductName = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const LinkText = styled.span`
  font-size: 12px;
  color: #346aff;
  cursor: pointer;
`;

export default Header;
