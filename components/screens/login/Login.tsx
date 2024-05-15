"use client";

import { useExistUser } from "@/hooks/useExistUser";
import { ILogin } from "@/shared/types/auth.interface";
import { loginValidate } from "@/shared/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { Button, Field } from "@/components/ui";
import Link from "next/link";

function Login() {
  useExistUser();

  const { handleSubmit, reset, control } = useForm<ILogin>({
    resolver: zodResolver(loginValidate),
  });

  const { onLogin, isLoginLoading } = useLogin(reset);

  return (
    <form
      className="flex flex-col bg-hoar-100 min-h-[923px]  w-[560px] rounded-tl-[93px] pt-[63px] px-[95px] shadow-custom"
      onSubmit={handleSubmit(onLogin)}
    >
      <h2 className="font-miama text-black text-center mb-[50px] text-5xl">
        Авторизация
      </h2>
      <Field<ILogin> control={control} name="name" placeholder="Имя" />

      <Field<ILogin>
        control={control}
        name="password"
        placeholder="Пароль"
        className="mt-[50px]"
      />

      <p className="font-cruinn text-black text-[32px] mt-[35px] w-full">
        Нет аккаунта ?
        <Link
          href="/register"
          className="hover:text-hoar-300 transition-colors duration-200"
        >
          Зарегистрироваться
        </Link>
      </p>

      <Button
        type="submit"
        disabled={isLoginLoading}
        className="w-[190px] mt-[44px]"
      >
        Войти
      </Button>
    </form>
  );
}

export default Login;
