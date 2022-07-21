import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ProductInfo from "../../src/components/product/ProductInfo";

export default function VendoritemPage() {
  const router = useRouter();

  console.log(
    router.query.itemId,
    router.query.vendoritemId,
    router.query.productId
  );

  return (
    <Wrapper>
      <ProductInfo
        vendoritemId={router.query.vendoritemId?.toString()!}
        productId={router.query.productId?.toString()!}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 980px;
  margin: 0 auto;
`;
