import Image from "next/image";
import Logo from "./Logo";
import { helpLinks, mapSite, socialMedia } from "./footer.constants";
import Link from "next/link";
import cn from "clsx";

function Footer({ hasDiscount }: { hasDiscount?: boolean }) {
  return (
    <>
      {hasDiscount && (
        <div className="w-full bg-hoar-100 rounded-tr-[90px] flex justify-center items-center h-[133px] text-[36px] text-hoar-600 font-miama mt-[79px]">
          Скидка 15% только 24 часа
        </div>
      )}
      <header
        className={cn(
          "flex justify-between pt-10 pb-[110px] bg-hoar-100  w-full px-[274px] shadow-custom relative",
          !hasDiscount && "rounded-tr-[90px]"
        )}
      >
        <div className="flex flex-col items-start">
          <Logo />

          <Image
            src="/icons/logo-v2.png"
            alt="logo-v2"
            width={109}
            height={20}
            className="mt-[30px]"
          />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1436.3602548451902!2d48.05508158879526!3d46.35979200676518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a9050ac81b9691%3A0x888dab3ce4bf82ba!2z0L_Quy4g0JLQvtC60LfQsNC70YzQvdCw0Y8sIDExLCDQkNGB0YLRgNCw0YXQsNC90YwsINCQ0YHRgtGA0LDRhdCw0L3RgdC60LDRjyDQvtCx0LsuLCA0MTQwNDA!5e0!3m2!1sru!2sru!4v1715975190711!5m2!1sru!2sru"
            width="719"
            height="317"
            loading="lazy"
            className="border-none mt-[70px]"
          ></iframe>
        </div>

        <div className="flex flex-col items-end w-[507px] mt-[40px]">
          <ul className="flex gap-x-[30px]">
            {socialMedia.map((s, i) => (
              <li key={i} className="cursor-pointer">
                <Link href={s.href}>
                  <Image src={s.img} alt="social" width={70} height={70} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-start mt-[138px] gap-x-[140px]">
            <div className="flex flex-col w-[225px]">
              <h2 className="font-cruinn text-[32px] text-black">
                Карта сайта
              </h2>
              <ul className="flex flex-col mt-[30px] w-full gap-y-6">
                {mapSite.map((m, i) => (
                  <li
                    className="font-cruinn text-black text-[24px] cursor-pointer hover:text-hoar-400 duration-300"
                    key={i}
                  >
                    <Link href={m.href}>{m.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col w-[159px]">
              <h2 className="font-cruinn text-[32px] text-black">Помощь</h2>
              <ul className="flex flex-col mt-[30px] w-full gap-y-6">
                {helpLinks.map((m, i) => (
                  <li
                    className="font-cruinn text-black text-[24px] hover:text-hoar-400 duration-300"
                    key={i}
                  >
                    <Link href={m.href}>{m.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Footer;
