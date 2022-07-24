import styled from "@emotion/styled";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { BreadcrumbItem } from "../../../pages/api/products/[productId]/breadcrumb";
import { ProductInfo } from "../../../pages/api/products/[productId]/vendoritems/[vendoritemId]";
import { useRequest } from "../../hooks";
import { ProductService } from "../../services";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ProductImage from "./ProductImage";

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

  return (
    <>
      {data && <Breadcrumb data={data} />}
      {product && (
        <InfoWrapper>
          <ProductImage images={product?.images} />
          <ProductInfoWrapper>
            {product.coupickIcon && (
              <TitleBadge>
                <Image
                  src={`http:${product.coupickIcon}`}
                  alt="쿠팡추천"
                  width={68}
                  height={20}
                />
              </TitleBadge>
            )}
            <BrandName>{product.brandName}</BrandName>
            <BuyHeader>
              <div>
                <ProductName>{product.name.split(",")[0]}</ProductName>
                <span>
                  {new Array(5).fill(null).map((v, i) => (
                    <FontAwesomeIcon
                      color="#ffa500"
                      key={i}
                      icon={i < product.rating.average ? faStar : regularStar}
                    />
                  ))}
                </span>
              </div>
              <div></div>
            </BuyHeader>
          </ProductInfoWrapper>
        </InfoWrapper>
      )}
    </>
  );
};

const BuyHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const TitleBadge = styled.div`
  margin-bottom: 7px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductInfoWrapper = styled.div`
  width: 480px;
`;

const BrandName = styled.span`
  font-size: 12px;
  color: #346aff;
  cursor: pointer;
`;

export default ProductInfo;
