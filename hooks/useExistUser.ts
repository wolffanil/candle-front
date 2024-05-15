import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/navigation";

export const useExistUser = (isAdmin?: boolean) => {
  const { isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAdmin) {
      if (!isLoading && !user?.name && user?.role !== "admin") {
        console.log(user);
        router.push("/");
      }
    } else {
      if (!isLoading && user?.name) {
        router.push("/");
      }
    }
  }, [user]);
};
