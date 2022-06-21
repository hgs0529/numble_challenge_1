import axios from "axios";
import cookies from "js-cookie";

class ApiClient {
  #instance;
  constructor() {
    this.#instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
    });
  }

  get apiClient() {
    return this.#instance;
  }

  setToken(accessToken: string, refreshToken: string) {
    cookies.set("accessToken", accessToken, { expires: 1 });
    cookies.set("refreshToken", refreshToken, { expires: 7 });
  }
}

export default ApiClient;
