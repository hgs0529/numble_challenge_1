import { ProductDetail } from "../../pages/api/products/[productId]/items/[itemId]/vendoritems/[vendoritemId]";
import { ProductService } from "../services";
import { useRequest } from "./useRequest";

const useProductDetail = (
  productId: string,
  vendoritemId: string,
  itemId: string
) => {
  return useRequest<ProductDetail>(
    ["productDetail", productId, vendoritemId, itemId],
    () => ProductService.getDetail(productId, vendoritemId, itemId),
    {
      enabled:
        productId !== undefined &&
        vendoritemId !== undefined &&
        itemId !== undefined,
    }
  );
};

export default useProductDetail;
