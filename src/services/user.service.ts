import cookies from "js-cookie";
import ApiClient from "./ApiClient";

class UserService extends ApiClient {
  async me() {
    const accessToken = cookies.get("accessToken");
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
