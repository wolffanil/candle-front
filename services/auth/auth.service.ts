import {
  IAuthResponse,
  ILogin,
  IRegister,
} from "@/shared/types/auth.interface";
import { request } from "../api/request.api";
import { getAuthUrl } from "@/config/api.config";
import { deleteTokensStorage, saveTokensStorage } from "./auth.helper";
import instance from "../api/interceptors.api";
import { errorCatch } from "../api/error.api";

export const AuthService = {
  async register(data: IRegister) {
    let response = await request<IAuthResponse>({
      url: getAuthUrl("/register"),
      method: "POST",
      data,
    });

    if (response.accessToken)
      saveTokensStorage({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

    return response;
  },

  async login(data: ILogin) {
    const response = await request<IAuthResponse>({
      url: getAuthUrl("/login"),
      method: "POST",
      data,
    });

    if (response.accessToken)
      saveTokensStorage({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

    return response;
  },

  logout() {
    deleteTokensStorage();
  },
};
