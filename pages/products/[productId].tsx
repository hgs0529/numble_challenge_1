import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ProductInfo from "../../src/components/product/info";
import BrandItem from "../../src/components/product/branditem";
import HeadMeta from "../../src/components/common/HeadMeta";
import ProductDetail from "../../src/components/product/detail";
import useProduct from "../../src/hooks/useProduct";

export default function VendoritemPage() {
  const router = useRouter();

  const { data } = useProduct(
    router.query.productId?.toString()!,
    router.query.vendoritemId?.toString()!
  );

  return (
    <Wrapper>
      <HeadMeta
        title={data?.name.split(",")[0]}
        image={`http:${data?.images[0].thumbnailImage}`}
      />
      <ProductInfo
        vendoritemId={router.query.vendoritemId?.toString()!}
        productId={router.query.productId?.toString()!}
      />
      <BrandItem
        vendoritemId={router.query.vendoritemId?.toString()!}
        productId={router.query.productId?.toString()!}
        itemId={router.query.itemId?.toString()!}
      />
      <ProductDetail
        vendoritemId={router.query.vendoritemId?.toString()!}
        productId={router.query.productId?.toString()!}
        itemId={router.query.itemId?.toString()!}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
`;
