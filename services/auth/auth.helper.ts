import { EnumLocalStorage, ITokens } from "@/shared/types/auth.interface";
import Cookie from "js-cookie";

export const getAccessToken = () => {
  const accessToken = Cookie.get(EnumLocalStorage.ACCESS_TOKEN);

  return accessToken || null;
};

export const getRefreshToken = () => {
  const refreshToken = Cookie.get(EnumLocalStorage.REFRESH_TOKEN);

  return refreshToken || null;
};

export const saveTokensStorage = (data: ITokens) => {
  Cookie.set(EnumLocalStorage.ACCESS_TOKEN, data.accessToken);
  Cookie.set(EnumLocalStorage.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensStorage = () => {
  Cookie.remove(EnumLocalStorage.ACCESS_TOKEN);
  Cookie.remove(EnumLocalStorage.REFRESH_TOKEN);
};
