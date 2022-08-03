import RequestService from "./request.service";

class ProductService extends RequestService {
  async getBreadcrumbs(productId?: string) {
    return await this.getRequest(`/api/products/${productId}/breadcrumb`).then(
      (res) => res.data
    );
  }

  async getInfo(productId: string, vendoritemId: string) {
    return await this.getRequest(
      `/api/products/${productId}/vendoritems/${vendoritemId}`
    ).then((res) => res.data);
  }

  async getBrandItems(productId: string, vendoritemId: string, itemId: string) {
    return await this.getRequest(
      `/api/products/${productId}/brand-items?itemId=${itemId}&vendoritemId=${vendoritemId}`
    ).then((res) => res.data);
  }

  async getDetail(productId: string, vendoritemId: string, itemId: string) {
    return await this.getRequest(
      `/api/products/${productId}/items/${itemId}/vendoritems/${vendoritemId}`
    ).then((res) => res.data);
  }
}

export default new ProductService();
