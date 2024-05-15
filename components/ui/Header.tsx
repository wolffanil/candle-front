import Link from "next/link";
import Logo from "./Logo";
import HeaderClient from "./HeaderClient";

function Header() {
  return (
    <nav className="w-full bg-white/0 absolute top-0 left-0 right-0 px-[274px] z-40">
      <ul className="w-full flex justify-between items-center">
        <Logo />
        <div className="flex justify-between items-center gap-x-[62px]">
          <li className="font-cruinn text-[32px] text-black">
            <Link href="/constructor">Конструктор</Link>
          </li>

          <HeaderClient />
        </div>
      </ul>
    </nav>
  );
}

export default Header;
