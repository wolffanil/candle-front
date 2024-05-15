import Image from "next/image";

const Item = ({ message }: { message: string }) => {
  return (
    <div className="flex items-center -ml-[45px] -mt-[40px]">
      <Image src="/img/service.svg" alt="icon" width={150} height={150} />
      <p className="w-[746px] text-wrap font-cruinn text-[24px] text-black -ml-[35px]">
        {message}
      </p>
    </div>
  );
};

function Second() {
  return (
    <section className="mt-[212px] flex justify-between">
      <div className="flex flex-col gap-y-[92px] items-start">
        <h2 className="font-miama text-[48px] text-black">Наши услуги</h2>
        <div className="flex flex-col mt-[22px]">
          <Item message="Широкий ассортимент уникальных и красиво оформленных свечей, созданных вручную мастерами." />
          <Item message="Разнообразные формы, цвета и ароматы свечей, подходящие для любого повода и интерьера" />
          <Item message="Из натуральных материалов с использованием высококачественных ингредиентов, что делает их безопасными для использования. " />
          <Item message="Услугу индивидуального заказа свечей под конкретные пожелания клиента" />
        </div>
      </div>

      <Image
        src="/img/candle.png"
        width={546}
        height={645}
        alt="candle"
        className="mt-[7px] w-[546px] h-[645px] -mr-[55px]"
      />
    </section>
  );
}

export default Second;
