import styled from "@emotion/styled";
import Image from "next/image";
import React, { useState } from "react";
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
      <MainWrapper>
        {product && <ProductImage images={product?.images} />}
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export default ProductInfo;
