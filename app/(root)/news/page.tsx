import News from "@/components/screens/news/News";
import { Footer, Header, Wrapper } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости",
  description: "Свежие новости сайта",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/news`,
  },
};

function page() {
  return (
    <>
      <Wrapper className="w-full h-full relative">
        <div className=" min-h-svh pt-[128px]">
          <Header />
          <News />
        </div>
      </Wrapper>
      <Footer hasDiscount={false} />;
    </>
  );
}

export default page;
