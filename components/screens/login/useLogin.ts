import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import { errorCatch } from "@/services/api/error.api";
import { AuthService } from "@/services/auth/auth.service";
import { ILogin } from "@/shared/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { UseFormReset } from "react-hook-form";

export const useLogin = (reset: UseFormReset<ILogin>) => {
  const { loadingToast, successToast, errorToast } = useToast();
  const router = useRouter();

  const { setUser } = useAuth();

  const { mutate: login, isPending: isLoginLoading } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILogin) => AuthService.login(data),
    onSuccess: (data) => {
      reset();
      successToast(`Добро пожаловать обратно ${data.user.name}`);
      setUser(data.user);
      router.push("/");
    },
    onError(error) {
      // errorToast(errorCatch(error));
      console.log(error);
      errorToast("Неверное имя или пароль");
    },
  });

  const onLogin = (data: ILogin) => {
    loadingToast("Регистрация...");
    login(data);
  };

  return useMemo(
    () => ({
      isLoginLoading,
      onLogin,
    }),
    [isLoginLoading, onLogin]
  );
};
