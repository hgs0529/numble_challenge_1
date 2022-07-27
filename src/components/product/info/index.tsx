import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BreadcrumbItem } from "../../../../pages/api/products/[productId]/breadcrumb";
import { ProductInfo } from "../../../../pages/api/products/[productId]/vendoritems/[vendoritemId]";
import { useRequest } from "../../../hooks";
import { ProductService } from "../../../services";
import Breadcrumb from "../../common/breadcrumb";
import Images from "./Images";
import Header from "./Header";
import Price from "./Price";
import Delivery from "./Delivery";
import Insurance from "./Insurance";
import Button from "../../common/button";
import { useForm } from "react-hook-form";

interface Props {
  productId: string;
  vendoritemId: string;
}

const ProductInfo = ({ productId, vendoritemId }: Props) => {
  const { data } = useRequest<BreadcrumbItem[]>(
    "breadcrumbs",
    () => ProductService.getBreadcrumbs(productId),
    {
      enabled: productId !== undefined,
    }
  );

  const { data: product, isLoading: productLoading } = useRequest<ProductInfo>(
    "product",
    () => ProductService.getProduct(productId, vendoritemId),
    {
      enabled: productId !== undefined && vendoritemId !== undefined,
    }
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
            <Button type="submit">장바구니 담기</Button>
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
