import axios, { AxiosRequestConfig } from "axios";

class ApiClient {
  #instance;
  constructor() {
    this.#instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }

  get(url: string, option?: AxiosRequestConfig) {
    return this.#instance.get(url, option);
  }

  post(url: string, data: any, option?: AxiosRequestConfig) {
    return this.#instance.post(url, data, option);
  }

  patch(url: string, data: any, option?: AxiosRequestConfig) {
    return this.#instance.patch(url, data, option);
  }

  put(url: string, data: any, option?: AxiosRequestConfig) {
    return this.#instance.put(url, data, option);
  }

  delete(url: string, option?: AxiosRequestConfig) {
    return this.#instance.delete(url, option);
  }
}

export default ApiClient;
