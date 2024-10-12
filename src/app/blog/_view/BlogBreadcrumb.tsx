"use client";
import { useBlogBreadcrumb } from "@/context/BlogBreadcrumb";
import { Section } from "@/layout/Section";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";

export default function BlogBreadcrumb() {
  const { blogName } = useBlogBreadcrumb();

  return (
    <div className="bg-gray-100">
      <Section className="py-0" yPadding="py-2">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href={"/"}>Trang chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={"/blog"}>Blog</Link>
          </BreadcrumbItem>

          {blogName && (
            <BreadcrumbItem>
              <span>{blogName}</span>
            </BreadcrumbItem>
          )}
        </Breadcrumbs>
      </Section>
    </div>
  );
}
