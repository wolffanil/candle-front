"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function action(id: string) {
  revalidatePath(`/candles/${id}`);
  revalidateTag("main");
  redirect(`/candles/${id}`);
}
