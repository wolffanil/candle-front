import SliderComponent from "./SliderComponent";
import { API_URL } from "@/config/api.config";

async function Third() {
  const { candles } = await fetch(`${API_URL}/candles`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return (
    <section className="w-full flex flex-col items-start mt-[224px]">
      <h2 className="font-miama text-[48px] text-black ">Новинки</h2>
      <SliderComponent candles={candles} />

      <h2 className="font-miama text-[48px] text-black mt-[121px]">
        Прошлые партии
      </h2>
      <SliderComponent candles={candles} />
    </section>
  );
}

export default Third;
