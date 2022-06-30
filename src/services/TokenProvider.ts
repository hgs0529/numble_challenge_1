import cookies from "js-cookie";

type TokenType = "accessToken" | "refreshToken";

class TokenProvider {
  static getToken(tokenType: TokenType) {
    return cookies.get(tokenType);
  }

  static setToken(tokenType: TokenType, token: string, expires: number) {
    cookies.set(tokenType, token, { expires });
  }

  static exist(tokenType: TokenType) {
    return !!cookies.get(tokenType);
  }

  static clear() {
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
  }
}

export default TokenProvider;
