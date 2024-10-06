"use client";

import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function ServiceList() {
  return (
    <div className="flex items-center justify-evenly gap-10 flex-col md:flex-row">
      <Link href={"/dich-vu/xe-cuoi"}>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">DỊCH VỤ</p>
            <small className="text-default-500">5 xe</small>
            <h4 className="font-bold text-large">Xe cưới</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://www.yamewedding.vn/resource/gellary/images/trang-tri-xe-hoa-cuoi-2.JPG"
              width={270}
              height={270}
            />
          </CardBody>
        </Card>
      </Link>
      <Link href={"/dich-vu/xe-dich-vu"}>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">DỊCH VỤ</p>
            <small className="text-default-500">12 xe</small>
            <h4 className="font-bold text-large">Xe dịch vụ</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://media.vov.vn/sites/default/files/styles/large/public/2022-11/a59afea785dd5c8305cc.jpg"
              width={270}
              height={270}
            />
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
