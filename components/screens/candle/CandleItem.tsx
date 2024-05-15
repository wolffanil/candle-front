import { ICandle } from "@/shared/types/candle.interface";
import Image from "next/image";
import ButtonActions from "./ButtonActions";

const textStyle = "mb-[8px] text-black font-cruinn text-[32px] text-wrap";

function CandleItem({ candle }: { candle: ICandle }) {
  return (
    <section className="flex w-full justify-between items-start  gap-x-[171px] mt-[104px] ">
      <img
        src="/background/lines.png"
        alt="lines"
        className="absolute z-20 -top-[64px] -left-[10px]"
      />

      <div className="relative z-30 mt-[26px]">
        <Image
          src={candle.photoUrl}
          alt="photo candle"
          width={389}
          height={500}
          className="object-cover rounded-tl-[90px] rounded-br-[90px] min-h-[500px] z-30 relative max-h-[500px]"
          priority
        />

        <Image
          src="/img/item-bg.png"
          alt="item"
          width={459}
          height={585}
          className="absolute z-20 -right-[100px] top-0 w-[459px] h-[585px]"
        />
      </div>
      <div className="flex flex-col items-start w-[819px]">
        <div className="flex gap-x-[101px]">
          <h2 className="text-[48px] text-black font-miama">
            Свеча "
            {candle.title.length > 10
              ? candle.title.slice(0, 10)
              : candle.title}
            "
          </h2>
          <div className="flex flex-col">
            <p className="font-cruinn text-[36px] text-hoar-600 line-through">
              {candle.currentPrice} рублей
            </p>
            <p className="text-white font-cruinn mt-[11px] text-[36px] ">
              {candle.discount} рублей
            </p>
          </div>
        </div>
        <p className={textStyle}>Материалы:</p>
        <p className={textStyle}>{candle.material}</p>

        <p className={textStyle}>Описание:</p>
        <p className={textStyle}>{candle.description}</p>

        <p className={textStyle}>Аромат:</p>
        <p className={textStyle}>{candle.smell}</p>

        <p className={textStyle}>Объём:</p>
        <p className={textStyle}>~ {candle.volume}</p>

        <ButtonActions candleId={candle._id} />
      </div>
    </section>
  );
}

export default CandleItem;
