import { Button } from "@/components/ui";
import Link from "next/link";
import Model from "./Model";

function First() {
  return (
    <section className="w-full h-[923px] flex justify-between">
      <div className="flex flex-col items-start mt-[284px]">
        <div className="flex flex-col gap-y-[12px] font-cruinn text-[32px] text-black">
          <h1>
            Создаём уют в твоём <span className="font-miama">сердце</span>
          </h1>
          <Link href="/constructorbeta">
            <Button className="w-[234px] mt-[12px]">Создать</Button>
          </Link>
        </div>
        <div className="w-[479px] h-[315px] shadow-custom rounded-tr-[80px] mt-[183px]" />
      </div>

      <div className="w-[718px] h-[923px] shadow-custom rounded-tl-[80px] relative">
        <Model />
      </div>
    </section>
  );
}

export default First;
