import cookies from "js-cookie";
import { ICookieData, ILoginData, ISignupData } from "../interfaces/auth";
import ApiClient from "./ApiClient";

class AuthService extends ApiClient {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get("refreshToken");
    if (!refreshToken) return;

    const { data } = await this.apiClient.post<ICookieData>(
      "/auth/refresh",
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    this.setToken(data.access, data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(signupData: ISignupData) {
    const { data } = await this.apiClient.post("/auth/signup", signupData);
    this.setToken(data.access, data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(loginData: ILoginData) {
    const { data } = await this.apiClient.post("/auth/login", loginData);
    this.setToken(data.access, data.refresh);
  }
}

export default new AuthService();
