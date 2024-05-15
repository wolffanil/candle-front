import Document from "@/components/screens/document/Document";
import { Footer, Header, Wrapper } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Документация",
  description: "Правила магазина Фитилёк",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/document`,
  },
};

function page() {
  return (
    <>
      <Wrapper className="w-full h-full relative">
        <div className=" min-h-svh pt-[128px]">
          <Header />
          <Document />
        </div>
      </Wrapper>
      <Footer hasDiscount={false} />;
    </>
  );
}

export default page;
