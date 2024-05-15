import { useToast } from "@/hooks/useToast";
import { CandleService } from "@/services/candle.service";
import { useMutation } from "@tanstack/react-query";
import action from "./candle.action";

export const useDeleteCandle = (_id: string) => {
  const { loadingToast, successToast, errorToast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationKey: ["delete candle"],
    mutationFn: () => CandleService.delete(_id),
    onMutate: () => {
      loadingToast("Удаление свечи...");
    },
    onSuccess: () => {
      successToast("Свеча успешно удалена");
      action();
    },
    onError: () => {
      errorToast("Что-то пошло не так");
    },
  });

  return { mutate, isPending };
};
