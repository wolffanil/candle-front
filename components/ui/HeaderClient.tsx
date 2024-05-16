"use client";

import { useAuth } from "@/hooks/useAuth";
import { AuthService } from "@/services/auth/auth.service";
import Link from "next/link";

function HeaderClient() {
  const { user, isLoading, setUser, setIsAuth } = useAuth();

  const handleLogout = () => {
    setIsAuth(false);
    setUser(null);
    AuthService.logout();
  };

  if (isLoading)
    return <div className="font-cruinn text-[32px]">Загрузка...</div>;
  return (
    <>
      <li className="font-cruinn text-[32px]">
        {user?.role === "admin" && <Link href="/admin">Админ</Link>}
      </li>

      <li className="w-[212px] flex justify-center items-center h-[128px] bg-hoar-500 hover:bg-hoar-600 duration-300 ">
        {user?.name ? (
          <div className="flex flex-col gap-y-2 font-cruinn text-[25px] text-white cursor-pointer">
            <p>{user.name.length > 10 ? user.name.slice(0, 10) : user.name}</p>
            <p onClick={handleLogout}>Выйти</p>
          </div>
        ) : (
          <Link
            href="/login"
            className="text-white text-[32px] h-full w-full flex justify-center items-center"
          >
            Вход
          </Link>
        )}
      </li>
    </>
  );
}

export default HeaderClient;
