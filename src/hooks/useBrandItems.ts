import { BrandItems } from "../../pages/api/products/[productId]/brand-items";
import { ProductService } from "../services";
import { useRequest } from "./useRequest";

const useBrandItems = (
  productId: string,
  vendoritemId: string,
  itemId: string
) => {
  return useRequest<BrandItems>(
    "getBrandItems",
    () => ProductService.getBrandItems(productId, vendoritemId, itemId),
    {
      enabled: productId !== undefined,
    }
  );
};

export default useBrandItems;
