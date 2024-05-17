import AdminComponent from "@/components/screens/admin/AdminComponent";
import { Wrapper } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Админ",
  description: "Админ панель",
  robots: {
    index: false,
    nocache: true,
  },
};

function page() {
  return (
    <section className="bg-hoar-300 ">
      <Wrapper className="flex justify-center items-center ">
        <AdminComponent type="Create" />
      </Wrapper>
    </section>
  );
}

export default page;
