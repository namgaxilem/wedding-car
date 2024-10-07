"use client";

import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="Dịch vụ cho thuê xe đám cưới chuyên nghiệp"
    description="Dịch vụ xe cưới The Wedding Car mang đến những chiếc xe hoa sang trọng, trang trí tinh tế, phù hợp với ngày trọng đại của bạn. Với sự lựa chọn đa dạng từ xe cổ điển đến hiện đại, chúng tôi cam kết mang lại trải nghiệm di chuyển thoải mái và ấn tượng nhất cho cô dâu chú rể. Hãy để The Wedding Car là người đồng hành đáng tin cậy trong hành trình hạnh phúc của bạn."
  >
    <VerticalFeatureRow
      title="Dịch vụ tận tâm"
      description="Honda Civic luôn là biểu tượng của sự hoàn hảo khi xuất hiện trong lễ cưới. Với thiết kế sang trọng, đường nét tinh tế và nội thất hiện đại, xe Honda Civic của The Wedding Car giúp tôn vinh ngày trọng đại của bạn thêm lộng lẫy và ấn tượng, đảm bảo một trải nghiệm đẳng cấp."
      image="/assets/images/image_car_1.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Thân thiện, chu đáo"
      description="The Wedding Car cung cấp dịch vụ xe cưới chuyên nghiệp với nhiều dòng xe sang trọng, hiện đại. Chúng tôi cam kết mang đến trải nghiệm tuyệt vời cho ngày trọng đại của bạn với tài xế thân thiện và dịch vụ chu đáo. Đảm bảo lịch trình chính xác và phong cách, Minh Phát sẽ làm cho khoảnh khắc cưới của bạn thêm phần hoàn hảo."
      image="/assets/images/image_car_2.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
