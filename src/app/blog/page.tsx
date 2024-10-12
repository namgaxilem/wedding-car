import { Section } from "@/layout/Section";
import BlogList from "./_view/BlogList";

export default function Page() {
  return (
    <Section>
      <h1 className="font-bold text-red-500 text-center text-4xl">Tin tức</h1>
      <p className="text-center text-gray-500 mt-2">
        Cập nhật những tin tức nóng hổi về xe cùng MinhPhatChanel
      </p>

      <BlogList />
    </Section>
  );
}
