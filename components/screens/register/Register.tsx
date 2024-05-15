"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { useExistUser } from "@/hooks/useExistUser";
import { registerValidate } from "@/shared/validation";
import { IRegister } from "@/shared/types/auth.interface";
import { Button, Field } from "@/components/ui";
import { useRegister } from "./useRegister";
import Phone from "./Phone";

function Register() {
  useExistUser();

  const { control, handleSubmit, reset } = useForm<IRegister>({
    resolver: zodResolver(registerValidate),
  });

  const { onRegister, isRegisterLoading } = useRegister(reset);

  return (
    <form
      className="flex flex-col bg-hoar-100 min-h-[950px]  w-[560px] rounded-tl-[93px] pt-[63px] px-[95px] shadow-custom"
      onSubmit={handleSubmit(onRegister)}
    >
      <h2 className="font-miama text-black text-center mb-[50px] text-5xl">
        Регистрация
      </h2>
      <Field<IRegister> control={control} name="name" placeholder="Имя" />

      <Field<IRegister>
        control={control}
        name="surname"
        placeholder="Фамилия"
        className="mt-[40px]"
      />

      <Phone<IRegister>
        control={control}
        name="phone"
        className="mt-[35px] font-semibold"
      />

      <Field<IRegister>
        control={control}
        name="password"
        placeholder="Пароль"
        className="mt-[40px]"
      />

      <Field<IRegister>
        control={control}
        name="confirmPassword"
        placeholder="Повтор пароля"
        className="mt-[40px]"
      />

      <p className="font-cruinn text-black text-[32px] mt-[27px] mb-[33px]">
        Есть аккаунт ?{" "}
        <Link
          href="/login"
          className="hover:text-hoar-300 transition-colors duration-200"
        >
          Войти
        </Link>
      </p>
      <div className="flex w-full gap-x-[6px] items-start mb-[51px]">
        <input
          type="checkbox"
          required
          className="bg-hoar-500 w-[22px] h-[23px]"
        />
        <p className="font-cruinn text-[20px] text-black text-wrap">
          Согласие на обработку персональных данных
        </p>
      </div>
      <Button type="submit" disabled={isRegisterLoading} className="w-[300px]">
        Регистрация
      </Button>
    </form>
  );
}

export default Register;
