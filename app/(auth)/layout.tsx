import { Logo, Wrapper } from "@/components/ui";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-[url(/background/auth-bg.jpg)] bg-cover bg-no-repeat bg-center">
      <Wrapper>
        <Logo />
        <div className="flex justify-end mt-7">{children}</div>
      </Wrapper>
    </section>
  );
}

export default Layout;
