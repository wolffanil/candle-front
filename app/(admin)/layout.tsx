import { Logo, Wrapper } from "@/components/ui";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-hoar-300 ">
      <Wrapper>
        <Logo />
        {children}
      </Wrapper>
    </section>
  );
}

export default layout;
