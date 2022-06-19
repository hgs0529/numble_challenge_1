import axios from "axios";
import cookies from "js-cookie";

export type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const refreshToken = cookies.get("refreshToken");
    if (!refreshToken) {
      return;
    }

    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/refresh",
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    this.setCookies(data.access, data.refresh);
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/signup",
      { email, password, name, phoneNumber, agreements }
    );

    this.setCookies(data.access, data.refresh);
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_API_HOST + "/auth/login",
      { email, password }
    );

    this.setCookies(data.access, data.refresh);
  }

  setCookies(accessToken: string, refreshToken: string) {
    cookies.set("accessToken", accessToken, { expires: 1 });
    cookies.set("refreshToken", refreshToken, { expires: 7 });
  }
}

export default new AuthService();
