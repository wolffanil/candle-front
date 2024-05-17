"use client";

import { ICandle } from "@/shared/types/candle.interface";
import Slider from "react-slick";
import ItemSlider from "./ItemSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 1400,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  appendDots: (dots: any) => <ul>{dots}</ul>,
  customPaging: () => (
    <div className="w-[140px] h-[23px] rounded-[50px] bg-hoar-500 ml-[13px] bg">
      {}
    </div>
  ),
};
function SliderComponent({ candles }: { candles: ICandle[] }) {
  return (
    <div className="w-full mt-[83px] relative z-20">
      <Slider {...settings} className="gap-x-[20px]">
        {candles.map((c) => (
          <ItemSlider key={c._id} candle={c} />
        ))}
      </Slider>
      {}
    </div>
  );
}

export default SliderComponent;
