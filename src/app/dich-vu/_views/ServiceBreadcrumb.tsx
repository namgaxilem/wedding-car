"use client";
import { Section } from "@/layout/Section";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ServiceBreadcrumb() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100">
      <Section className="py-0" yPadding="py-2">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link href={"/"}>Trang chủ</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={"/dich-vu"}>Dịch vụ</Link>
          </BreadcrumbItem>

          {pathname.includes("xe-dich-vu") && (
            <BreadcrumbItem>
              <Link href={"/dich-vu/xe-dich-vu"}>Xe dịch vụ</Link>
            </BreadcrumbItem>
          )}
          {pathname.includes("xe-cuoi") && (
            <BreadcrumbItem>
              <Link href={"/dich-vu/xe-cuoi"}>Xe cưới</Link>
            </BreadcrumbItem>
          )}
        </Breadcrumbs>
      </Section>
    </div>
  );
}
