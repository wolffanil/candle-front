import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";
import { errorCatch } from "@/services/api/error.api";
import { AuthService } from "@/services/auth/auth.service";
import { IRegister } from "@/shared/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { UseFormReset } from "react-hook-form";

export const useRegister = (reset: UseFormReset<IRegister>) => {
  const { loadingToast, successToast, errorToast } = useToast();
  const router = useRouter();

  const { setUser } = useAuth();

  const { mutate: register, isPending: isRegisterLoading } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: IRegister) => AuthService.register(data),
    onSuccess: (data) => {
      reset();
      successToast("Вы успешно зарегистрировались");
      setUser(data.user);
      router.push("/");
    },
    onError(error) {
      errorToast("Пользователь под таким именнем занет");
    },
    retry: false,
  });

  const onRegister = (data: IRegister) => {
    loadingToast("Регистрация...");
    register(data);
  };

  return useMemo(
    () => ({
      isRegisterLoading,
      onRegister,
    }),
    [isRegisterLoading]
  );
};
