import { API_URL } from "@/config/api.config";
import { ICandle } from "@/shared/types/candle.interface";

export default async function sitemap() {
  const baseurl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const api = API_URL;

  const { candles } = await fetch(`${api}/candles`).then((res) => res.json());

  const productsUrls = candles.map((candle: ICandle) => ({
    url: `${baseurl}/candle/${candle._id}`,
    lastModified: candle.updatedAt,
  }));

  return [
    {
      url: baseurl + "/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseurl}/document`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseurl}/order`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseurl}/constructor`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/register`,
      lastModified: new Date(),
    },
    {
      url: `${baseurl}/login`,
      lastModified: new Date(),
    },

    ...productsUrls,
  ];
}
