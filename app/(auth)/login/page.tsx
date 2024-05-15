import Login from "@/components/screens/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Войти",
  description: "Авторизация пользователя",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/login`,
  },
};

function page() {
  return <Login />;
}

export default page;
