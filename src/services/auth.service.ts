import { ILoginData, ISignupData } from "../interfaces/auth";
import ApiClient from "./ApiClient";
import TokenProvider from "./TokenProvider";

class AuthService extends ApiClient {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = TokenProvider.getToken("refreshToken");
    if (!refreshToken) return;

    const { data } = await this.apiClient.post("/auth/refresh", null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    TokenProvider.setToken("accessToken", data.access, 1);
    TokenProvider.setToken("refreshToken", data.refresh, 7);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(signupData: ISignupData) {
    const { data } = await this.apiClient.post("/auth/signup", signupData);
    TokenProvider.setToken("accessToken", data.access, 1);
    TokenProvider.setToken("refreshToken", data.refresh, 7);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(loginData: ILoginData) {
    const { data } = await this.apiClient.post("/auth/login", loginData);
    TokenProvider.setToken("accessToken", data.access, 1);
    TokenProvider.setToken("refreshToken", data.refresh, 7);
  }

  // 아직 요청 url 을 모름
  async logout() {
    const { data } = await this.apiClient.post("logoutUrl", null);
    TokenProvider.removeToken("accessToken");
    TokenProvider.removeToken("refreshToken");
  }

  // 아직 요청 url 을 모름
  async signout() {
    const { data } = await this.apiClient.delete("deleteUrl/14");
    TokenProvider.removeToken("accessToken");
    TokenProvider.removeToken("refreshToken");
  }
}

export default new AuthService();
