import { EnumLocalStorage, ITokens } from "@/shared/types/auth.interface";
import Cookie from "js-cookie";

export const getAccessToken = () => {
  if (typeof window !== "undefined") {
    const accessToken = Cookie.get(EnumLocalStorage.ACCESS_TOKEN);

    return accessToken || null;
  }
};

export const getRefreshToken = () => {
  if (typeof window !== "undefined") {
    const refreshToken = Cookie.get(EnumLocalStorage.REFRESH_TOKEN);

    return refreshToken || null;
  }
};

export const saveTokensStorage = (data: ITokens) => {
  if (typeof window !== "undefined") {
    Cookie.set(EnumLocalStorage.ACCESS_TOKEN, data.accessToken);
    Cookie.set(EnumLocalStorage.REFRESH_TOKEN, data.refreshToken);
  }
};

export const deleteTokensStorage = () => {
  if (typeof window !== "undefined") {
    Cookie.remove(EnumLocalStorage.ACCESS_TOKEN);
    Cookie.remove(EnumLocalStorage.REFRESH_TOKEN);
  }
};
