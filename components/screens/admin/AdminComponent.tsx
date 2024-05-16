"use client";

import { ICandleEditInput } from "@/shared/types/candle.interface";
import { Controller, useForm } from "react-hook-form";
import { IAdmin } from "./admin.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { candleValidate } from "@/shared/validation";
import { useAdmin } from "./useAdmin";
import { Button, Field, FileUploader } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useUploadThing } from "@/utils/uploadthing";
import { useState } from "react";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import action from "./candle.action";

function AdminComponent({ candle, type }: IAdmin) {
  const { user } = useAuth();
  const router = useRouter();
  if (user?.role !== "admin") router.push("/");

  const { control, handleSubmit, reset } = useForm<ICandleEditInput>({
    resolver: zodResolver(candleValidate),
    defaultValues: {
      title: candle ? candle.title : "",
      description: candle ? candle.description : "",
      material: candle ? candle.material : "",
      currentPrice: candle ? candle.currentPrice : 0,
      discount: candle ? candle.discount : 0,
      smell: candle ? candle.smell : "",
      volume: candle ? candle.volume : "",
      photoUrl: candle ? candle.photoUrl : "",
    },
  });

  const [files, setFiles] = useState<File[]>([]);

  const { startUpload } = useUploadThing("imageUploader");

  const { createCande, editCandle, isLoading } = useAdmin(reset, candle?._id);

  async function onSubmit(values: ICandleEditInput) {
    const toastId = toast.loading(
      type === "Create" ? "Создание свечи" : "Обновление свечи"
    );
    let uploadedImageUrl = values.photoUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }
      //@ts-ignore
      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "Create")
      await createCande(
        { ...values, photoUrl: uploadedImageUrl },
        {
          onSuccess: (data) => {
            toast.success("Свеча успешно создана", { id: toastId });
            try {
              //@ts-ignore
              action(data?.candle?._id);
            } catch (error) {}
          },
          onError: () => {
            toast.error("Что-то пошло не так", { id: toastId });
          },
        }
      );
    else
      await editCandle(
        { ...values, photoUrl: uploadedImageUrl },
        {
          onSuccess: () => {
            toast.success("Свеча успешно обнавлена", { id: toastId });
            try {
              action(candle?._id || "");
            } catch (error) {}
          },
          onError: () => {
            toast.error("Что-то пошло не так", { id: toastId });
          },
        }
      );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-hoar-100 min-h-[950px]  w-[560px] rounded-tl-[93px] pt-[63px] px-[95px] mb-[60px] pb-[30px]"
    >
      <h2 className="font-miama text-black text-center mb-[50px] text-5xl">
        {type === "Create" ? "Создать свечу" : "Редактировать свечу"}
      </h2>

      <Field<ICandleEditInput>
        control={control}
        name="title"
        placeholder="Название"
        className="mt-[40px]"
      />

      <Field<ICandleEditInput>
        control={control}
        name="description"
        placeholder="Описание "
        className="mt-[40px]"
      />

      <Field<ICandleEditInput>
        control={control}
        name="material"
        placeholder="Материалы"
        className="mt-[40px]"
      />

      <Field<ICandleEditInput>
        control={control}
        name="smell"
        placeholder="Запах"
        className="mt-[40px]"
      />

      <Field<ICandleEditInput>
        control={control}
        name="volume"
        placeholder="Содержание"
        className="mt-[40px]"
      />

      <Field<ICandleEditInput>
        control={control}
        name="currentPrice"
        placeholder="Изначальная цена"
        className="mt-[40px]"
        type="number"
      />
      <Field<ICandleEditInput>
        control={control}
        name="discount"
        placeholder="Cкидка цена"
        className="mt-[40px]"
        type="number"
      />

      <Controller
        control={control}
        name="photoUrl"
        render={({ field: { onChange, value }, formState: { errors } }) => (
          <>
            <FileUploader
              onFieldChange={onChange}
              photoUrl={value}
              setFiles={setFiles}
            />
            {errors && errors.photoUrl && (
              <p className="text-red-600 text-[20px] mt-[5px]">
                {errors.photoUrl.message}
              </p>
            )}
          </>
        )}
      />

      <Button className="mt-[40px]" type="submit" disabled={isLoading}>
        {type === "Create" ? "Создать" : "Редактировать"}
      </Button>
    </form>
  );
}

export default AdminComponent;
