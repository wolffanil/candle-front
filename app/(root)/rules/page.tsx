import CopyWrite from "@/components/screens/copyWrite/CopyWrite";
import { Footer, Header, Wrapper } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Соглашения",
  description: "соглашение к сайту",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_CLIENT_URL}/rules`,
  },
};

function page() {
  return (
    <>
      <Wrapper className="w-full h-full relative">
        <div className=" min-h-svh pt-[128px]">
          <Header />
          <CopyWrite />
        </div>
      </Wrapper>
      <Footer hasDiscount={false} />;
    </>
  );
}

export default page;
