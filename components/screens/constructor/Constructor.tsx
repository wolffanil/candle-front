import { Logo, Wrapper } from "@/components/ui";

function ConstructorComponent() {
  return (
    <section className="bg-[url(/background/soon-bg.jpg)] bg-cover bg-no-repeat bg-center min-h-screen">
      <Wrapper>
        <Logo />
        <p className="mt-[165px] font-cruinn text-[48px] text-black font-normal">
          Данный вид заказа <br /> находиться в разработке
        </p>
        <p className="mt-[63px] font-cruinn text-[48px] text-black">
          Если у Вас есть пожелание, каким бы вы хотели <br /> видеть
          конструктор, можете написать нам в <br /> телеграме или вк
        </p>
      </Wrapper>
    </section>
  );
}

export default ConstructorComponent;
