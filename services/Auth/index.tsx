import { instance } from "@/api/instance";
import { saveTokensStorage } from "@/api/tokensManage";
import { TokenType } from "@/types/Tokens";
import { TokensName } from "@/utils/enum/tokens";

export const AuthService = {
  async getNewTokens() {
    const refreshToken = localStorage.get(TokensName.REFRESH_TOKEN);
    console.log(refreshToken);
    const response = await instance.post<string, { data: TokenType }>(
      "auth/login/access-token",
      { refreshToken }
    );
    if (response.data.accessToken) saveTokensStorage(response.data);
    return response;
  },
};
