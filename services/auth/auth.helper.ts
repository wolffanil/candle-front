import { EnumLocalStorage, ITokens } from "@/shared/types/auth.interface";

export const getAccessToken = () => {
  const accessToken = localStorage.getItem(EnumLocalStorage.ACCESS_TOKEN);

  return accessToken || null;
};

export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem(EnumLocalStorage.REFRESH_TOKEN);

  return refreshToken || null;
};

export const saveTokensStorage = (data: ITokens) => {
  localStorage.setItem(EnumLocalStorage.ACCESS_TOKEN, data.accessToken);
  localStorage.setItem(EnumLocalStorage.REFRESH_TOKEN, data.refreshToken);
};

export const deleteTokensStorage = () => {
  localStorage.removeItem(EnumLocalStorage.ACCESS_TOKEN);
  localStorage.removeItem(EnumLocalStorage.REFRESH_TOKEN);
};
