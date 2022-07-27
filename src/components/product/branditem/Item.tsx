import styled from "@emotion/styled";
import Image from "next/image";
import { TBrandItem } from "../../../../pages/api/products/[productId]/brand-items";
import Rating from "../../common/rating";

interface Props {
  item?: TBrandItem;
}

const Item = ({ item }: Props) => {
  return (
    <ItemWrapper>
      {item && (
        <Image
          src={`http:${item.imageUrl}`}
          alt="brandItem"
          width={160}
          height={160}
        />
      )}
      <ItemTitle>{item?.title}</ItemTitle>
      <ItemPrice>
        <span>{item?.price.toLocaleString()}원</span>
        {item?.badgeUrl && (
          <Image
            src={`http:${item.badgeUrl}`}
            alt="badge"
            width={56}
            height={14}
          />
        )}
      </ItemPrice>
      <Rating
        average={item?.rating.average}
        text={`(${item?.rating.count.toLocaleString()})`}
      />
    </ItemWrapper>
  );
};

const ItemPrice = styled.div`
  margin-bottom: 5px;
  span {
    color: #ae0000;
    font-weight: bold;
    font-size: 14px;
    margin-right: 5px;
  }
`;

const ItemTitle = styled.div`
  margin: 5px 0;
  width: 160px;
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
`;

const ItemWrapper = styled.div`
  width: 160px;
  height: 100%;
`;

export default Item;
