"use client";

import Header from "@/app/_views/Header";
import { phone_number, phone_number_pretty } from "@/utils/constants";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-0">
      <div className="flex gap-10 flex-row-reverse py-1 md:text-sm text-xs">
        <ul className="flex md:gap-3 gap-2">
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-4 size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>Giờ làm việc: 08:00 - 20:00</span>
          </li>
          <li className="h-70 bg-gray-500 w-[1px]"></li>
          <li className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="md:size-4 size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span
              className="cursor-pointer"
              onClick={() => window.open(`tel:${phone_number}`)}
            >
              SĐT: {phone_number_pretty}
            </span>
          </li>
        </ul>
      </div>
    </Section>
    <hr />
    <Header />
  </Background>
);

export { Hero };
