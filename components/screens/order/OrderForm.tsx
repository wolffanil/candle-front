"use client";

import { Button, Field } from "@/components/ui";
import { IOrder } from "@/shared/types/order.interface";
import { orderValidate } from "@/shared/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

function OrderForm() {
  const [isSuccess, SetIsSuccess] = useState(false);
  const { handleSubmit, control } = useForm<IOrder>({
    resolver: zodResolver(orderValidate),
  });

  const onSubmit = () => {
    SetIsSuccess(true);
  };

  return !isSuccess ? (
    <form
      className="flex flex-col bg-hoar-100  min-h-[800px] pb-[19px]  w-[544px] rounded-tl-[93px] pt-[22px] pr-[76px] pl-[100px] mt-[15px] ml-auto shadow-custom"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-[36px] font-miama text-black text-center ">
        Оформление <br /> заказа
      </h2>
      <Field<IOrder>
        control={control}
        name="name"
        placeholder="Имя"
        className="mt-[38px]"
      />

      <Field<IOrder>
        control={control}
        name="surname"
        placeholder="Фамилия"
        className="mt-[40px]"
      />

      <Field<IOrder>
        control={control}
        name="email"
        placeholder="Почта"
        className="mt-[35px]"
        type="email"
      />

      <p className="mt-[35px] font-cruinn text-[32px] text-start text-black">
        Способ оплаты:
      </p>
      <div className="flex gap-x-[14px] items-center font-cruinn text-[32px] text-black mt-[21px]">
        <input type="checkbox" className="w-[27px] h-[27px]" />
        <p>Наличными</p>
      </div>

      <p className="mt-[35px] font-cruinn text-[32px] text-start text-black">
        Способ доставки:
      </p>
      <div className="flex gap-x-[14px] items-center font-cruinn text-[32px] text-black mt-[14px]">
        <input type="checkbox" className="w-[27px] h-[27px]" />
        <p>Самовызов</p>
      </div>

      <Button type="submit" className="w-[301px] mt-[55px]">
        Заказать
      </Button>
    </form>
  ) : (
    <div className="flex flex-col bg-hoar-100 min-h-[591px]  w-[544px] rounded-tl-[93px] pt-[116px] px-[35px] mt-[60px] ml-auto shadow-custom">
      <h2 className="text-center font-miama text-[36px] text-black">
        Ваш заказ успешно отправлен
      </h2>
      <p className="mt-[62px] font-cruinn text-[32px] text-black text-start">
        Мы напишем Вам на почту, когда можно будет забрать заказ
      </p>
    </div>
  );
}

export default OrderForm;
