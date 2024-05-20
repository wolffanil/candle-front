import cn from "clsx";
import { newsItems } from "./news.constants";

const Item = ({
  urlImage,
  text,
  className,
}: {
  urlImage: string;
  text: string;
  className?: string;
}) => (
  <div
    className={cn("flex gap-x-[76px] items-center relative z-10", className)}
  >
    <img
      src={urlImage}
      alt="candle"
      className="block min-w-[328px] min-h-[400px] max-w-[328px] max-h-[400px] rounded-tl-[120px] rounded-tr-[120px] object-cover border border-hoar-500"
    />

    <p className="font-miama text-[36px] text-hoar-600">{text}</p>
  </div>
);

function News() {
  return (
    <section className="min-h-screen mt-[266px] ">
      <img
        src="/background/lines.png"
        alt="lines"
        className="absolute -top-[5px] left-0 right-0"
      />

      <img
        src="/background/lines.png"
        alt="lines"
        className="absolute top-[590px] left-0 right-0 z-0"
      />

      <h2 className="font-miama text-[48px] text-black text-start -mb-[50px]">
        Новости компании
      </h2>
      {newsItems.map((n, i) => (
        <Item
          key={i}
          urlImage={n.urlImage}
          text={n.text}
          className="mt-[106px]"
        />
      ))}

      <div className="w-full mb-[134px]" />
    </section>
  );
}

export default News;
