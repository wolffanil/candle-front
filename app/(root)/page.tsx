import First from "@/components/screens/main/First";
import Second from "@/components/screens/main/Second";
import { Footer, Header, Wrapper } from "@/components/ui";

function page() {
  return (
    <>
      <Wrapper className="w-full h-full">
        <div className=" min-h-screen pt-[128px]">
          <Header />
          <First />
          <div>
            <img
              className="absolute left-0 right-0 top-[914px]"
              src="/background/lines.png"
              alt="lines"
            />
          </div>
          <Second />
        </div>
      </Wrapper>
      <Footer hasDiscount={false} />
    </>
  );
}

export default page;
