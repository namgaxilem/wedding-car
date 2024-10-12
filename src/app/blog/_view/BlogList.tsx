"use client";

import { http } from "@/api/http";
import CommonEmpty from "@/app/_views/CommonEmpty";
import { BASE_API_URL } from "@/config/config";
import { Blog } from "@/types/Blog";
import { Pagination, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {}
export default function BlogList({}: Props) {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>();
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    pageCount: 1,
    total: 0,
  });

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    setLoading(true);
    http
      .get<any>(
        `/api/blogs?pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}&populate=hinh_dai_dien`
      )
      .then(({ meta, data }: { meta: any; data: Blog[] }) => {
        setPagination(meta);
        setBlogs(data);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <br />
      <br />
      {loading && (
        <div className="w-full flex justify-center items-center h-50vh">
          <Spinner color="success" />
        </div>
      )}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {!loading && blogs?.length && blogs.length > 0 ? (
            <>
              {blogs?.map((e) => (
                <div
                  key={e.documentId}
                  className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl"
                >
                  <div className="flex items-center">
                    <Link href={`/blog/${e.documentId}`} className="w-full">
                      <img
                        src={`${BASE_API_URL}${e.hinh_dai_dien?.formats?.thumbnail?.url}`}
                        alt="hinh dai dien blog"
                        className="rounded-t-2xl w-full object-cover"
                      />
                    </Link>
                  </div>
                  <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                    <span className="text-indigo-600 font-medium mb-3 block">
                      {`${e.updatedAt}`}
                    </span>
                    <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                      {e.tieu_de}
                    </h4>
                    <p className="text-gray-500 leading-6 mb-10">
                      {e.mo_ta_ngan_gon}
                    </p>
                    <Link
                      href={`/blog/${e.documentId}`}
                      className="cursor-pointer text-lg text-indigo-600 font-semibold"
                    >
                      Đọc Tiếp..
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <CommonEmpty />
          )}
        </div>
      </section>

      {!loading && blogs?.length && blogs.length > 0 && (
        <div className="flex w-full justify-center">
          <Pagination
            total={pagination.total}
            page={pagination.page}
            initialPage={pagination.page}
            showControls
            isDisabled={false}
            color={"success"}
          />
        </div>
      )}
    </>
  );
}
