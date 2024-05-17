import SliderComponent from "./SliderComponent";
import { API_URL } from "@/config/api.config";

async function Third() {
  const { candles } = await fetch(
    `${API_URL}/candles?limit=24&sort=-createdAt`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  return (
    <section className="w-full flex flex-col items-start mt-[224px]">
      <h2 className="font-miama text-[48px] text-black ">Новинки</h2>

      <SliderComponent candles={candles.slice(0, candles.length / 2)} />

      <h2 className="font-miama text-[48px] text-black mt-[121px]">
        Прошлые партии
      </h2>
      <SliderComponent candles={candles.slice(candles.length / 2)} />
    </section>
  );
}

export default Third;
