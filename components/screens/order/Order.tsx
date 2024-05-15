import { Logo, Wrapper } from "@/components/ui";
import OrderForm from "./OrderForm";

function Order() {
  return (
    <section className="bg-[url(/background/order-bg.jpg)] bg-cover bg-no-repeat bg-center relative pb-[150px] h-[1200px]">
      <Wrapper>
        <Logo />
        <OrderForm />
      </Wrapper>
      <div className="w-full bg-hoar-100 font-miama rounded-tr-[70px] flex justify-center items-center h-[115px] text-[36px] absolute bottom-0">
        Ваша свеча будет готова через 5 дней
      </div>
    </section>
  );
}

export default Order;
