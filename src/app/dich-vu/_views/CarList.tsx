"use client";

import { http } from "@/api/http";
import CommonEmpty from "@/app/_views/CommonEmpty";
import { BASE_API_URL } from "@/config/config";
import { Car } from "@/types/Car";
import {
  Card,
  CardBody,
  CardHeader,
  Pagination,
  Image,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type init_api_url = "/api/xe-cuois" | "/api/xe-dich-vus";
interface Props {
  initApiUrl: init_api_url;
}
export default function CarList({ initApiUrl: initUrl }: Props) {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState<Car[]>();
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    pageCount: 1,
    total: 0,
  });
  const location = usePathname();

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = () => {
    setLoading(true);
    http
      .get(
        `${initUrl}?pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}&populate=thong_tin_xe_common.hinh_xe_dai_dien&populate=thong_tin_xe_common.hinh_xe`
      )
      .then(({ meta, data }: any) => {
        setPagination(meta);
        setCars(data);
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
      {!loading && cars?.length && cars.length > 0 ? (
        <>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4">
            {cars?.map((e) => (
              <Link key={e.id} href={`${location}${e.documentId}`}>
                <Card className="py-4 cursor-pointer" shadow="sm">
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Hinh anh xe"
                      className="object-cover rounded-xl"
                      src={`${BASE_API_URL}${e.thong_tin_xe_common?.hinh_xe_dai_dien?.formats?.thumbnail?.url}`}
                      width={270}
                    />
                  </CardBody>
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">
                      {e.thong_tin_xe_common.ten_xe}
                    </h4>
                    <p className="text-tiny uppercase font-bold">
                      {e.thong_tin_xe_common.gia_thue_theo_gio}/giờ
                    </p>
                    <small className="text-default-500">
                      {e.thong_tin_xe_common.so_cho_ngoi} chỗ
                    </small>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <br />
          <br />
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
        </>
      ) : (
        <CommonEmpty />
      )}
    </>
  );
}
