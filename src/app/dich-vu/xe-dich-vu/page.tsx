import { Section } from "@/layout/Section";
import CarList from "../_views/CarList";

export default function Page() {
  return (
    <Section>
      <h1 className="font-bold text-red-500 text-center text-2xl">
        THUÊ XE DỊCH VỤ GIÁ RẺ
      </h1>

      <CarList initApiUrl="/api/xe-dich-vus" />
    </Section>
  );
}
