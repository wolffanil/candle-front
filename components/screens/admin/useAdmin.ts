import { CandleService } from "@/services/candle.service";
import { ICandleEditInput } from "@/shared/types/candle.interface";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { UseFormReset } from "react-hook-form";

export const useAdmin = (
  reset: UseFormReset<ICandleEditInput>,
  _id?: string
) => {
  const router = useRouter();

  const { mutate: editCandle, isPending: isEditLoading } = useMutation({
    mutationKey: ["edit candle"],
    mutationFn: (data: ICandleEditInput) =>
      CandleService.update(_id || "", data),
    onMutate: (variables) => {
      return variables;
    },
    onSuccess: () => {
      reset();
    },
  });

  const { mutate: createCande, isPending: isCreateLoading } = useMutation({
    mutationKey: ["create candle"],
    mutationFn: (data: ICandleEditInput) => CandleService.create(data),

    onSuccess: (data) => {
      reset();
      // router.push(`/candles/${data._id}`);
    },
  });

  return useMemo(
    () => ({
      createCande,
      editCandle,
      isLoading: isCreateLoading || isEditLoading,
    }),
    [isCreateLoading, isEditLoading]
  );
};
