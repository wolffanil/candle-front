import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";

export const useExistUser = () => {
  const { isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (user?.name) router.push("/");
  }, [isLoading]);
};
