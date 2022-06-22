import axios from "axios";

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
}

export default ApiClient;
