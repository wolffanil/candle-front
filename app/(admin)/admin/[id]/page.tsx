import Admin from "@/components/screens/admin/AdminComponent";
import { Wrapper } from "@/components/ui";
import { API_URL, getCandlesUrl } from "@/config/api.config";
import { CandleService } from "@/services/candle.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Админ",
  description: "Админ панель",
  robots: {
    index: false,
    nocache: true,
  },
};

const getCandle = async (id: string) => {
  const candle = await fetch(`${API_URL}${getCandlesUrl(`/${id}`)}`, {
    cache: "no-cache",
  }).then((res) => res.json());

  return candle;
};

async function AdminPage({ params }: { params: { id: string } }) {
  const data = await getCandle(params.id || "");
  return (
    <section>
      <Wrapper>
        <Admin type="Edit" candle={data.candle} />
      </Wrapper>
    </section>
  );
}

export default AdminPage;
