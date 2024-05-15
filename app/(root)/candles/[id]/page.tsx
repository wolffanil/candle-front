import CandleItem from "@/components/screens/candle/CandleItem";
import { Footer, Header, Wrapper } from "@/components/ui";
import { API_URL } from "@/config/api.config";
import { ICandle } from "@/shared/types/candle.interface";
import { cache } from "react";

const getProduct = cache(async (id: string) => {
  const res = await fetch(`${API_URL}/candles/${id}`, {
    next: {
      revalidate: 50,
    },
  });

  const data = await res.json();

  return data;
});

export const dynamicParams = true;

export async function generateStaticParams() {
  const candles = await fetch(`${API_URL}/candles`).then((res) => res.json());

  return candles.candles.map((candle: ICandle) => ({
    id: candle._id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id);

  if (!data.candle) {
    return {
      title: "Not Found",
      description: "the product not found",
    };
  }

  return {
    title: data.candle.title,
    description: data.candle.description,
    alternates: {
      canonical: `${API_URL}/candles/${data.candle._id}`,
    },
  };
}

async function page({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id);

  if (!params.id) return <div>Not Found</div>;

  return (
    <>
      <Wrapper className="w-full h-full relative">
        <div className=" min-h-svh pt-[128px]">
          <Header />
          <CandleItem candle={data.candle} />
        </div>
      </Wrapper>
      <Footer hasDiscount />;
    </>
  );
}

export default page;
