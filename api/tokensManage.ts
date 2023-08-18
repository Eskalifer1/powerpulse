import { TokenType } from "@/types/Tokens";
import { TokensName } from "@/utils/enum/tokens";

export const getAccessToken = () => {
  const accessToken = localStorage.get(TokensName.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokensStorage = (data: TokenType) => {
  localStorage.set(TokensName.ACCESS_TOKEN, data.accessToken);
  localStorage.set(TokensName.REFRESH_TOKEN, data.refreshToken);
};

export const removeFromStorage = () => {
  localStorage.remove(TokensName.ACCESS_TOKEN);
  localStorage.remove(TokensName.REFRESH_TOKEN);
};
