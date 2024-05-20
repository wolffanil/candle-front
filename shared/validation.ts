import * as z from "zod";

export const registerValidate = z
  .object({
    name: z
      .string({ message: "Это поле обязательно" })
      .min(5, { message: "имя не может быть ментше 5 символов" })
      .trim()
      .toLowerCase(),
    surname: z
      .string({ message: "Это поле обязательно" })
      .max(20, { message: "Превышена длина фамилии(20)" }),
    phone: z.string({ message: "Это поле обязательно" }),
    password: z
      .string({ message: "Это поле обязательно" })
      .min(6, { message: "Слишком кароткий пароль" }),
    confirmPassword: z.string({ message: "Это поле обязательно" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export const loginValidate = z.object({
  name: z
    .string({ message: "Это поле обязательно" })
    .min(5, { message: "имя не может быть меньше 5 символов" })
    .trim()
    .toLowerCase(),
  password: z
    .string({ message: "Это поле обязательно" })
    .min(6, { message: "Это поле обязательно" }),
});

export const candleValidate = z.object({
  title: z
    .string({ message: "Это поле обязательно" })
    .min(3, { message: "Минимум 3 символа" }),
  material: z
    .string({ message: "Это поле обязательно" })
    .min(3, { message: "Минимум 3 символа" }),
  description: z
    .string({ message: "Это поле обязательно" })
    .min(3, { message: "Минимум 3 символа" }),
  smell: z
    .string({ message: "Это поле обязательно" })
    .min(3, { message: "Минимум 3 символа" }),
  volume: z
    .string({ message: "Это поле обязательно" })
    .min(1, { message: "Минимум 3 символа" }),
  photoUrl: z.custom(),
  currentPrice: z.custom(),
  discount: z.custom(),
});

export const orderValidate = z.object({
  name: z
    .string({ message: "Это поле обязательно" })
    .min(5, { message: "имя не может быть меньше 5 символов" }),
  surname: z
    .string({ message: "Это поле обязательно" })
    .max(20, { message: "Превышена длина фамилии(20)" }),
  email: z.string({ message: "Это поле обязательно" }),
});
