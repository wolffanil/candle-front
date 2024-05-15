"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function action(id: string) {
  revalidatePath(`/candles/${id}`);
  redirect(`/candles/${id}`);
}
