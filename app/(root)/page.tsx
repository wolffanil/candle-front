import First from "@/components/screens/main/First";
import Second from "@/components/screens/main/Second";
import Third from "@/components/screens/main/third/Third";
import Video from "@/components/screens/main/video/Video";
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
          <div>
            <img
              className="absolute left-0 right-0 top-[1693px]"
              src="/background/lines.png"
              alt="lines"
            />
          </div>

          <Third />

          <div>
            <img
              className="absolute left-0 right-0 top-[3216px] z-10"
              src="/background/lines.png"
              alt="lines"
            />
          </div>
        </div>

        <Video />
      </Wrapper>
      <Footer hasDiscount={false} />
    </>
  );
}

export default page;
