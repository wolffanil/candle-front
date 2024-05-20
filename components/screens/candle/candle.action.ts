"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function action() {
  revalidateTag("main");
  redirect("/");
}
