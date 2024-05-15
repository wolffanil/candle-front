import Register from "@/components/screens/register/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Зарегистрироваться",
  description: "Регистрация пользователя",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/register`,
  },
};

function page() {
  return <Register />;
}

export default page;
