import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Section>
    <CTABanner
      title="Chúng tôi có đủ loại xe các bạn cần, với giá cả vô cùng ưu đãi."
      subtitle="Hãy gọi ngay cho chúng tôi."
      button={
        <button
          onClick={() => window.open("tel:0903489745")}
          className="text-xl"
        >
          Hotline: 0903.489.745
        </button>
      }
    />
  </Section>
);

export { Banner };
