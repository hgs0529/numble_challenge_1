import cookies from "js-cookie";

type TokenType = "accessToken" | "refreshToken";

class TokenProvider {
  static getToken(tokenType: TokenType) {
    return cookies.get(tokenType);
  }

  static setToken(tokenType: TokenType, token: string, expires: number) {
    cookies.set(tokenType, token, { expires });
  }

  static removeToken(tokenType: TokenType) {
    cookies.remove(tokenType);
  }
}

export default TokenProvider;
