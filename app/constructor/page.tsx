import Constructor from "@/components/screens/constructor/Constructor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Конструктор",
  description: "Сделать свою свечу",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/constructor`,
  },
};

function page() {
  return <Constructor />;
}

export default page;
