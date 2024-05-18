import { ICandle } from "@/shared/types/candle.interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import cn from "clsx";

function ItemSlider({ candle }: { candle: ICandle }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href={`/candles/${candle._id}`}
      className=" block overflow-hidden max-w-[328px] max-h-[400px] border border-black rounded-tl-[120px] rounded-tr-[120px]  relative min-w-[328px] min-h-[400px] group"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      role="button"
    >
      <Image
        src={candle.photoUrl}
        alt="candle"
        width={328}
        height={400}
        className="object-cover min-w-[328px] min-h-[400px] max-w-[328px] max-h-[400px]"
      />
      <div className="absolute inset-0 bg-[#614A37] opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out"></div>

      <div
        className={cn(
          "max-w-[260px] text-white font-cruinn text-[32px] text-wrap flex flex-col items-start gap-y-[17px] absolute left-[11px] z-30 ",
          {
            "bottom-[30px] animate-in duration-300 ": isHover,
            "-bottom-[160px] animate-out duration-300": !isHover,
          }
        )}
      >
        <p>Свеча {candle.title}</p>
        <p>Цена: {candle.discount}р.</p>
      </div>
    </Link>
  );
}

export default ItemSlider;
