"use client";

import { http } from "@/api/http";
import NotFoundElement from "@/app/_views/NotFoundElement";
import { useBlogBreadcrumb } from "@/context/BlogBreadcrumb";
import { Section } from "@/layout/Section";
import { Blog } from "@/types/Blog";
import { Spinner } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  blogDocumentId: string;
};

export default function BlogDetail({ blogDocumentId }: Props) {
  const [blog, setBlog] = useState<Blog>();
  const [loading, setLoading] = useState(true);
  const location = usePathname();
  const { setBlogName } = useBlogBreadcrumb();

  useEffect(() => {
    setLoading(true);

    http
      .get<any>(`/api/blogs/${blogDocumentId}?populate=hinh_dai_dien`)
      .then(({ data }: { data: Blog }) => {
        setBlog(data);
        setBlogName(data.tieu_de);
        console.log("data", data);
      })
      .finally(() => setLoading(false));

    return () => {
      setBlogName(undefined);
    };
  }, [location]);

  return (
    <Section className="">
      {loading && (
        <div className="w-full flex justify-center items-center h-50vh">
          <Spinner color="success" />
        </div>
      )}
      {!loading && blog && <p>askdjh</p>}
      {!loading && !blog && <NotFoundElement />}
    </Section>
  );
}
