"use client";

import { http } from "@/api/http";
import NotFoundElement from "@/app/_views/NotFoundElement";
import { BASE_API_URL } from "@/config/config";
import { useServiceBreadcrumb } from "@/context/ServiceBreadcrumb";
import { Section } from "@/layout/Section";
import { Car } from "@/types/Car";
import { formatNumberThousandDeliminator } from "@/utils/common";
import { phone_number } from "@/utils/constants";
import { Spinner } from "@nextui-org/react";
import Markdown from "markdown-to-jsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

type Props = {
  carDocumentId: string;
};

export default function CarDetail({ carDocumentId }: Props) {
  const [car, setCar] = useState<Car>();
  const [loading, setLoading] = useState(true);
  const location = usePathname();
  const { setCarName } = useServiceBreadcrumb();

  useEffect(() => {
    setLoading(true);
    const apiPath = location.includes("/dich-vu/xe-cuoi")
      ? "/api/xe-cuois"
      : "/api/xe-dich-vus";
    http
      .get<any>(
        `${apiPath}/${carDocumentId}?populate=thong_tin_xe_common.hinh_xe_dai_dien&populate=thong_tin_xe_common.hinh_xe&populate=thong_tin_xe_common.tien_ich_xes`
      )
      .then(({ data }: { data: Car }) => {
        setCar(data);
        setCarName(data.thong_tin_xe_common?.ten_xe);
      })
      .finally(() => setLoading(false));

    return () => {
      setCarName(undefined);
    };
  }, [location]);

  const onCallNow = () => {
    window.open(`tel:${phone_number}`);
  };

  const onZaloChat = () => {
    window.open(`zalo:${phone_number}`);
  };

  return (
    <Section className="">
      {loading && (
        <div className="w-full flex justify-center items-center h-50vh">
          <Spinner color="success" />
        </div>
      )}
      {!loading && car && (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* <div className="w-full md:w-1/2 px-4 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Product"
                  className="w-full h-auto rounded-lg shadow-md mb-4"
                  id="mainImage"
                />
                <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                  <img
                    src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 1"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 2"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 3"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Thumbnail 4"
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  />
                </div>
              </div> */}

            <div className="w-full md:w-1/2 px-4 mb-8">
              {car.thong_tin_xe_common?.hinh_xe &&
                car.thong_tin_xe_common?.hinh_xe?.length > 0 && (
                  <ImageGallery
                    items={car.thong_tin_xe_common?.hinh_xe.map((e) => ({
                      original: `${BASE_API_URL}${e.formats.thumbnail.url}`,
                      thumbnail: `${BASE_API_URL}${e.formats.thumbnail.url}`,
                    }))}
                  />
                )}
            </div>

            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">
                {car.thong_tin_xe_common?.ten_xe}
              </h2>
              <p className="text-gray-600 mb-4">
                Số chỗ: {car.thong_tin_xe_common?.so_cho_ngoi}
              </p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  {formatNumberThousandDeliminator(
                    car.thong_tin_xe_common?.gia_thue_theo_gio
                  )}
                  /giờ
                </span>
                <span className="text-gray-500 line-through">
                  {formatNumberThousandDeliminator(
                    car.thong_tin_xe_common?.gia_thue_theo_gio
                  )}
                  /giờ
                </span>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2 text-gray-600">4.5 (xếp hạng)</span>
              </div>
              <p className="text-gray-700 mb-6">
                {car.thong_tin_xe_common?.thong_tin_ngan_gon}
              </p>

              {/* <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Color:</h3>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                    <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                    <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                  </div>
                </div> */}

              {/* <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value="1"
                    className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div> */}

              <div className="flex space-x-4 mb-6 max-h-[45px]">
                <button
                  onClick={onCallNow}
                  className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Gọi ngay
                </button>
                <button
                  onClick={onZaloChat}
                  className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                  >
                    <path
                      fill="#2962ff"
                      d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10 c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                    />
                    <path
                      fill="#eee"
                      d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19 c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742 c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083 C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                    />
                    <path
                      fill="#2962ff"
                      d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75 S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                    />
                    <path
                      fill="#2962ff"
                      d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"
                    />
                    <path
                      fill="#2962ff"
                      d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75 S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5 c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                    />
                    <path
                      fill="#2962ff"
                      d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5 c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                    />
                  </svg>
                  Chat Zalo
                </button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tiện nghi:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {car.thong_tin_xe_common?.tien_ich_xes?.map((e) => (
                    <li key={e.documentId}>{e.ten_tien_ich}</li>
                  ))}
                </ul>
              </div>
            </div>

            <br />
            <br />

            <div className="md:mt-20 mt-10 md:px-5 px-2">
              {car.thong_tin_xe_common?.thong_tin_chi_tiet && (
                <Markdown>
                  {car.thong_tin_xe_common?.thong_tin_chi_tiet}
                </Markdown>
              )}
            </div>
          </div>
        </div>
      )}
      {!loading && !car && <NotFoundElement />}
    </Section>
  );
}
