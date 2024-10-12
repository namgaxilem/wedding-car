"use client";

import { http } from "@/api/http";
import NotFoundElement from "@/app/_views/NotFoundElement";
import { BASE_API_URL } from "@/config/config";
import { useBlogBreadcrumb } from "@/context/BlogBreadcrumb";
import { Section } from "@/layout/Section";
import { Blog } from "@/types/Blog";
import { Spinner } from "@nextui-org/react";
import Markdown from "markdown-to-jsx";
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
      {!loading && blog && (
        <section className="p-8">
          <div className="mx-auto max-w-screen-md">
            <img
              src={`${BASE_API_URL}${blog.hinh_dai_dien?.formats?.thumbnail?.url}`}
              alt="team work"
              className="mb-4 h-[28rem] w-full rounded-xl object-cover"
            />
            <p className="font-medium !text-blue-500">#blog #post</p>
            <p
              color="blue-gray"
              className="my-4 font-black text-4xl !leading-snug"
            >
              {blog.tieu_de}
            </p>
            <p className="font-normal !text-gray-500">
              {blog.noi_dung_chinh && (
                <Markdown>{blog.noi_dung_chinh}</Markdown>
              )}
            </p>
          </div>
        </section>
      )}
      {!loading && !blog && <NotFoundElement />}
    </Section>
  );
}
