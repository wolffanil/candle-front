import ConstructorComponent from "@/components/screens/constructor/Constructor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Конструктор",
  description: "Сделать свою свечу",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/constructor`,
  },
};

function page() {
  return <ConstructorComponent />;
}

export default page;
