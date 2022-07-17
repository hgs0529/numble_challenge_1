import ApiClient from "./ApiClient";
import TokenProvider from "./TokenProvider";

class UserService extends ApiClient {
  async me() {
    if (!TokenProvider.exist("accessToken")) {
      return;
    }
    const { data } = await super.get("/users/me", {
      headers: {
        Authorization: `Bearer ${TokenProvider.getToken("accessToken")}`,
      },
    });
    return data;
  }

  async read(id: number) {
    const { data } = await super.get(`/users/${id}`);
    return data;
  }
}

export default new UserService();
