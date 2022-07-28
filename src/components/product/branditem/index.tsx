import styled from "@emotion/styled";
import Image from "next/image";
import useBrandItems from "../../../hooks/useBrandItems";
import Button from "../../common/button";
import Item from "./Item";

interface Props {
  productId: string;
  vendoritemId: string;
  itemId: string;
}

const BrandItem = ({ productId, vendoritemId, itemId }: Props) => {
  const { data } = useBrandItems(productId, vendoritemId, itemId);

  return (
    <div>
      <h4>{data?.brandName}의 다른 상품들</h4>
      <ItemWrapper>
        {new Array(4).fill(null).map((_, i) => (
          <Item key={i} item={data?.items[i]} />
        ))}
        <BrandShopLink>
          {data && (
            <div>
              <Image
                src={`http:${data.brandLogo}`}
                alt={data.brandName}
                width={140}
                height={140}
              />
            </div>
          )}
          <BrandShopDescription>{data?.description}</BrandShopDescription>
          <BrandShopTotal>
            총 <CountText> {data?.totalCount} </CountText>개
          </BrandShopTotal>
          <Button bold size="small" color="primary" shape="reverse">
            브랜드샵 구경갈까요?
          </Button>
        </BrandShopLink>
      </ItemWrapper>
    </div>
  );
};

const BrandShopTotal = styled.div`
  font-size: 12px;
  margin-bottom: 20px;
`;

const BrandShopDescription = styled.div`
  text-align: center;
  font-size: 12px;
  word-break: keep-all;
  margin-bottom: 10px;
`;

const CountText = styled.span`
  color: #346aff;
`;

const BrandShopLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 100%;
`;

const ItemWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
`;

export default BrandItem;
