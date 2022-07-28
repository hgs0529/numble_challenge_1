import styled from "@emotion/styled";
import Breadcrumb from "../../common/breadcrumb";
import Images from "./Images";
import Header from "./Header";
import Price from "./Price";
import Delivery from "./Delivery";
import Insurance from "./Insurance";
import Button from "../../common/button";
import { useForm } from "react-hook-form";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import useProduct from "../../../hooks/useProduct";
import NumberInput from "../../common/numberInput";

interface Props {
  productId: string;
  vendoritemId: string;
}

const ProductInfo = ({ productId, vendoritemId }: Props) => {
  const { data } = useBreadcrumbs(productId);
  const { data: product, isLoading: productLoading } = useProduct(
    productId,
    vendoritemId
  );

  const { register, handleSubmit } = useForm();

  const onVaild = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Breadcrumb data={data} />
      <InfoWrapper>
        <Images images={product?.images} />
        <ProductInfoWrapper onSubmit={handleSubmit(onVaild)}>
          <Header
            coupickIcon={product?.coupickIcon}
            name={product?.name}
            brandName={product?.brandName}
            rating={product?.rating}
          />
          <Price
            price={product?.price}
            badge={product?.delivery[0].badgeUrl}
            ccid={product?.ccid}
            cashBack={product?.cashBack}
          />
          <Delivery
            delivery={product?.delivery}
            register={register("delivery")}
          />
          <Insurance
            insurance={product?.insurance}
            register={register("insurance")}
          />
          <ButtonWrapper>
            <NumberInput
              defaultValue={1}
              max={product?.buyableQuantity}
              register={register("quantity")}
              min={1}
            />
            <Button color="primary" shape="reverse" type="submit">
              장바구니 담기
            </Button>
            <Button type="submit" color="primary">
              {"바로구매 >"}
            </Button>
          </ButtonWrapper>
          <Details>
            {product?.sellingInfo.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </Details>
        </ProductInfoWrapper>
      </InfoWrapper>
    </>
  );
};

const Details = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 3px;
  font-size: 12px;
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 5px;
`;
const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoWrapper = styled.form`
  width: 480px;
`;

export default ProductInfo;
