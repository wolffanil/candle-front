import axios from "axios";
import { getRefreshToken, saveTokensStorage } from "../auth/auth.helper";
import { IAuthResponse } from "@/shared/types/auth.interface";
import { API_URL, getAuthUrl } from "@/config/api.config";

export const getNewTokens = async () => {
  try {
    const refreshToken = getRefreshToken();

    const response = await axios.post<string, { data: IAuthResponse }>(
      API_URL + getAuthUrl("/refresh"),
      { refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.accessToken)
      saveTokensStorage({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });

    return response;
  } catch (error) {}
};
