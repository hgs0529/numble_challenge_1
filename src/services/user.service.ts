import ApiClient from "./ApiClient";
import TokenProvider from "./TokenProvider";

class UserService extends ApiClient {
  async me() {
    const accessToken = TokenProvider.getToken("accessToken");
    if (!accessToken) {
      return;
    }

    const { data } = await this.apiClient.get("/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  }

  async read(id: number) {
    const { data } = await this.apiClient.get(`/users/${id}`);
    return data;
  }
}

export default new UserService();
