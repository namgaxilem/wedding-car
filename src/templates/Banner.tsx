"use client";

import { phone_number, phone_number_pretty } from "@/utils/constants";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Section>
    <CTABanner
      title="Chúng tôi có đủ loại xe các bạn cần, với giá cả vô cùng ưu đãi."
      subtitle="Hãy gọi ngay cho chúng tôi."
      button={
        <button
          onClick={() => window.open(`tel:${phone_number}`)}
          className="text-xl"
        >
          Hotline: {phone_number_pretty}
        </button>
      }
    />
  </Section>
);

export { Banner };
