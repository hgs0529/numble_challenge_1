import { BreadcrumbItem } from "../../pages/api/products/[productId]/breadcrumb";
import { ProductService } from "../services";
import { useRequest } from "./useRequest";

const useBreadcrumbs = (productId: string) => {
  return useRequest<BreadcrumbItem[]>(
    "breadcrumbs",
    () => ProductService.getBreadcrumbs(productId),
    {
      enabled: productId !== undefined,
    }
  );
};

export default useBreadcrumbs;
