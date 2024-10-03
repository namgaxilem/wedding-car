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
      image="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/460805923_122104752134532538_4588790491001194646_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEcabRwSlS8JvHo_nrOgmw-MVEVqWpwVzIxURWpanBXMrHKXKErRK-0XD_oEAjWxdMDApfWZySIiQImymFQYIRt&_nc_ohc=5vvGl3TeuP8Q7kNvgEM72Kp&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=AuTnEFCSFLFHXxZTA2A2je5&oh=00_AYC-BUDnzel8dWAunpit9bMNOlABD-ZR7nxo5Hc4oc1zVA&oe=67009A61"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Thân thiện, chu đáo"
      description="The Wedding Car cung cấp dịch vụ xe cưới chuyên nghiệp với nhiều dòng xe sang trọng, hiện đại. Chúng tôi cam kết mang đến trải nghiệm tuyệt vời cho ngày trọng đại của bạn với tài xế thân thiện và dịch vụ chu đáo. Đảm bảo lịch trình chính xác và phong cách, Minh Phát sẽ làm cho khoảnh khắc cưới của bạn thêm phần hoàn hảo."
      image="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/461127995_122104735208532538_5406550573889993249_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHzsPh-Wr6_NMcS_mLgkQREEIL13M-mepoQgvXcz6Z6mpXZ6fkOq9UikeVCBM-Q2uT76dHSuxTQ4rH2WMjFxR7k&_nc_ohc=XeYGE1CDPxwQ7kNvgHnVZsY&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AmrE224Qx1DifwUyamnayFJ&oh=00_AYAUyEMuRI3u592Y-_v5Yt-DJRDmAvfWquT748W9NweiXQ&oe=67008E86"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
