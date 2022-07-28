import { ProductInfo } from "../../pages/api/products/[productId]/vendoritems/[vendoritemId]";
import { ProductService } from "../services";
import { useRequest } from "./useRequest";

const useProduct = (productId: string, vendoritemId: string) => {
  return useRequest<ProductInfo>(
    ["product", productId, vendoritemId],
    () => ProductService.getInfo(productId, vendoritemId),
    {
      enabled: productId !== undefined && vendoritemId !== undefined,
    }
  );
};

export default useProduct;
