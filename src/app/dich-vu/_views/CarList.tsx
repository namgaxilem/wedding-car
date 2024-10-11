"use client";

import { http } from "@/api/http";
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
        <div className="w-full flex items-center flex-wrap justify-center gap-10">
          <div className="grid gap-4 w-60">
            <svg
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="116"
              height="121"
              viewBox="0 0 116 121"
              fill="none"
            >
              <path
                d="M0.206909 63.57C0.206909 31.7659 25.987 6.12817 57.6487 6.12817C89.2631 6.12817 115.079 31.7541 115.079 63.57C115.079 77.0648 110.43 89.4805 102.627 99.2755C91.8719 112.853 75.4363 121 57.6487 121C39.7426 121 23.4018 112.794 12.6582 99.2755C4.85538 89.4805 0.206909 77.0648 0.206909 63.57Z"
                fill="#EEF2FF"
              />
              <path
                d="M72.7942 0.600875L72.7942 0.600762L72.7836 0.599331C72.3256 0.537722 71.8622 0.5 71.3948 0.5H22.1643C17.1256 0.5 13.0403 4.56385 13.0403 9.58544V107.286C13.0403 112.308 17.1256 116.372 22.1643 116.372H93.1214C98.1725 116.372 102.245 112.308 102.245 107.286V29.4482C102.245 28.7591 102.17 28.0815 102.019 27.4162L102.019 27.416C101.615 25.6459 100.67 24.0014 99.2941 22.7574C99.2939 22.7572 99.2937 22.757 99.2934 22.7568L77.5462 2.89705C77.5461 2.89692 77.5459 2.89679 77.5458 2.89665C76.2103 1.66765 74.5591 0.876968 72.7942 0.600875Z"
                fill="white"
                stroke="#E5E7EB"
              />
              <circle cx="60.2069" cy="61" r="21.0256" fill="#EEF2FF" />
              <path
                d="M74.6786 46.1412L74.6783 46.1409C66.5737 38.0485 53.4531 38.0481 45.36 46.1412C37.2552 54.2341 37.2551 67.3666 45.3597 75.4596C53.4529 83.5649 66.5739 83.5645 74.6786 75.4599C82.7716 67.3669 82.7716 54.2342 74.6786 46.1412ZM79.4694 41.3508C90.2101 52.0918 90.2101 69.5093 79.4694 80.2502C68.7166 90.9914 51.3104 90.9915 40.5576 80.2504C29.8166 69.5095 29.8166 52.0916 40.5576 41.3506C51.3104 30.6096 68.7166 30.6097 79.4694 41.3508Z"
                stroke="#E5E7EB"
              />
              <path
                d="M83.2471 89.5237L76.8609 83.1309C78.9391 81.5058 80.8156 79.6106 82.345 77.6546L88.7306 84.0468L83.2471 89.5237Z"
                stroke="#E5E7EB"
              />
              <path
                d="M104.591 94.4971L104.59 94.4969L92.7346 82.653C92.7342 82.6525 92.7337 82.652 92.7332 82.6515C91.6965 81.6018 90.0076 81.6058 88.9629 82.6505L89.3089 82.9965L88.9629 82.6505L81.8573 89.7561C80.8213 90.7921 80.8248 92.4783 81.8549 93.5229L81.8573 93.5253L93.7157 105.384C96.713 108.381 101.593 108.381 104.591 105.384C107.6 102.375 107.6 97.5062 104.591 94.4971Z"
                fill="#A5B4FC"
                stroke="#818CF8"
              />
              <path
                d="M62.5493 65.6714C62.0645 65.6714 61.6626 65.2694 61.6626 64.7729C61.6626 62.7866 58.6595 62.7866 58.6595 64.7729C58.6595 65.2694 58.2576 65.6714 57.761 65.6714C57.2762 65.6714 56.8743 65.2694 56.8743 64.7729C56.8743 60.422 63.4478 60.4338 63.4478 64.7729C63.4478 65.2694 63.0458 65.6714 62.5493 65.6714Z"
                fill="#4F46E5"
              />
              <path
                d="M70.1752 58.0694H66.4628C65.9662 58.0694 65.5642 57.6675 65.5642 57.1709C65.5642 56.6862 65.9662 56.2842 66.4628 56.2842H70.1752C70.6717 56.2842 71.0737 56.6862 71.0737 57.1709C71.0737 57.6675 70.6717 58.0694 70.1752 58.0694Z"
                fill="#4F46E5"
              />
              <path
                d="M53.8596 58.0693H50.1472C49.6506 58.0693 49.2487 57.6673 49.2487 57.1708C49.2487 56.686 49.6506 56.2841 50.1472 56.2841H53.8596C54.3443 56.2841 54.7463 56.686 54.7463 57.1708C54.7463 57.6673 54.3443 58.0693 53.8596 58.0693Z"
                fill="#4F46E5"
              />
              <rect
                x="28.9248"
                y="16.3846"
                width="30.7692"
                height="2.05128"
                rx="1.02564"
                fill="#4F46E5"
              />
              <rect
                x="28.9248"
                y="100.487"
                width="41.0256"
                height="4.10256"
                rx="2.05128"
                fill="#A5B4FC"
              />
              <rect
                x="28.9248"
                y="22.5385"
                width="10.2564"
                height="2.05128"
                rx="1.02564"
                fill="#4F46E5"
              />
              <circle cx="42.2582" cy="23.5641" r="1.02564" fill="#4F46E5" />
              <circle cx="46.3607" cy="23.5641" r="1.02564" fill="#4F46E5" />
              <circle cx="50.4633" cy="23.5641" r="1.02564" fill="#4F46E5" />
            </svg>
            <div>
              <h2 className="text-center text-black text-base font-semibold leading-relaxed pb-1">
                Comming soon...
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
