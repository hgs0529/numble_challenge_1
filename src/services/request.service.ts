import axios, { AxiosRequestHeaders } from "axios";

type TRequestOptions = AxiosRequestHeaders & {
  token?: string;
  customHeaders?: { [key: string]: any };
};

class RequestService {
  #getRequestConfig(options?: TRequestOptions) {
    return {
      headers: {
        ...(options?.token && { Authorization: `Bearer ${options.token}` }),
        ...options?.customHeaders,
      },
    };
  }

  getRequest(url: string, option?: TRequestOptions) {
    return axios.get(url, this.#getRequestConfig(option));
  }

  postRequest(url: string, data: any, option?: TRequestOptions) {
    return axios.post(url, data, this.#getRequestConfig(option));
  }

  patchRequest(url: string, data: any, option?: TRequestOptions) {
    return axios.patch(url, data, this.#getRequestConfig(option));
  }

  putRequest(url: string, data: any, option?: TRequestOptions) {
    return axios.put(url, data, this.#getRequestConfig(option));
  }

  deleteRequest(url: string, option?: TRequestOptions) {
    return axios.delete(url, this.#getRequestConfig(option));
  }
}

export default RequestService;
