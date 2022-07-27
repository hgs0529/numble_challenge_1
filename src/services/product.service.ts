import RequestService from "./request.service";

class ProductService extends RequestService {
  async getBreadcrumbs(productId?: string) {
    return await this.getRequest(`/api/products/${productId}/breadcrumb`).then(
      (res) => res.data
    );
  }

  async getProduct(productId: string, vendoritemId: string) {
    return await this.getRequest(
      `/api/products/${productId}/vendoritems/${vendoritemId}`
    ).then((res) => res.data);
  }

  async getBrandItems(productId: string, vendoritemId: string, itemId: string) {
    return await this.getRequest(
      `/api/products/${productId}/brand-items?itemId=${itemId}&vendoritemId=${vendoritemId}`
    ).then((res) => res.data);
  }

  // async getOtherProducts(
  //   productId: number,
  //   vendoritemId: number,
  //   itemId: number
  // ) {
  //   return await this.getRequest(
  //     `/products/${productId}/brand-sdp/widget/brand-sdp?itemId=${itemId}&vendoritemId=${vendoritemId}`
  //   ).then((res) => res.data);
  // }

  // async getProductDetail(
  //   productId: number,
  //   vendoritemId: number,
  //   itemId: number
  // ) {
  //   return await this.getRequest(
  //     `/products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
  //   ).then((res) => res.data);
  // }
}

export default new ProductService();
