import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ProductInfo from "../../src/components/product/info";
import BrandItem from "../../src/components/product/branditem";
import HeadMeta from "../../src/components/common/HeadMeta";
import ProductDetail from "../../src/components/product/detail";

export default function VendoritemPage() {
  const router = useRouter();

  console.log(
    router.query.itemId,
    router.query.vendoritemId,
    router.query.productId
  );

  return (
    <Wrapper>
      <HeadMeta title="상품페이지" />
      <ProductInfo
        vendoritemId={router.query.vendoritemId?.toString()!}
        productId={router.query.productId?.toString()!}
      />
      <BrandItem
        vendoritemId={router.query.vendoritemId?.toString()!}
        productId={router.query.productId?.toString()!}
        itemId={router.query.itemId?.toString()!}
      />
      <ProductDetail />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
`;
