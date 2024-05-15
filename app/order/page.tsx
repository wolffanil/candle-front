import Order from "@/components/screens/order/Order";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Заказ",
  description: "Оформить заказ",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/order`,
  },
};

function page() {
  return <Order />;
}

export default page;
