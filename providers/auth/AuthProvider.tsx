import { ReactNode, createContext, useEffect, useState } from "react";
import { IContext, TypeUserState } from "./auth-provider.interface";
import { IUser } from "@/shared/types/user.interface";
import { getAccessToken, getRefreshToken } from "@/services/auth/auth.helper";
import { getNewTokens } from "@/services/api/helper.api";

export const AuthContext = createContext({} as IContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TypeUserState>({} as IUser);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuthCheck = async () => {
      try {
        setIsLoading(true);
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();

        if (accessToken && refreshToken) {
          const userData = await getNewTokens();
          setUser(userData?.data?.user || null);
          setIsAuth(true);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuth) return;

    checkAuthCheck();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, isAuth, setIsAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
