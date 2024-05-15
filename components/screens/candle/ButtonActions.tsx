"use client";

import { Button } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useDeleteCandle } from "./useDeleteCandle";

function ButtonActions({ candleId }: { candleId: string }) {
  const { user } = useAuth();
  const { mutate: deleteCandle, isPending } = useDeleteCandle(candleId);

  return (
    <div className="mt-[70px] flex items-center">
      <Link href="/order">
        <Button className=" w-[348px] text-[24px]">Офрмить заказ</Button>
      </Link>

      {user?.role === "admin" && (
        <>
          <button disabled={isPending} className="ml-[39px]">
            <Link href={`/admin/${candleId}`}>
              <Image
                src="/icons/admin/edit.svg"
                alt="edit"
                width={58}
                height={58}
              />
            </Link>
          </button>

          <button
            disabled={isPending}
            className="ml-[17px]"
            onClick={() => deleteCandle()}
          >
            <Image
              src="/icons/admin/delete.svg"
              alt="edit"
              width={58}
              height={58}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default ButtonActions;
