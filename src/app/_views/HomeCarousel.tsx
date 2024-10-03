"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const listImgSrc = [
    "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/461249855_122130556466360379_1337090020799459597_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHFr8IOPNZBZVTfysTnqqFVZfHe5LqAlyFl8d7kuoCXIXWoJkFKhMFaJ3jEyQGVWegfYbxPmK_DSdqX8Fbcv1v-&_nc_ohc=gyrVA9gVQIwQ7kNvgEYLOO4&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYDK5KBVmzdglqVVcIN7r3UzaqVsvIRY3qIGFhBX-Rp8RQ&oe=6700A35D",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/461195305_122130556274360379_8040808921917633810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGdDF2y9B1PnlEd7lKKcGAvGh-_tBh6ljIaH7-0GHqWMohPo0lBnUdJJe16N7Xbn4uxRyMl89G_dxTqJPnQCsGj&_nc_ohc=Oy8zsiELphkQ7kNvgHCPaXz&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AV0KEBJQbaGGQ_ZEeP-G6zl&oh=00_AYCGRlg5Zdr32mNADjilJbKIwZrnqGoxKGX8SSYuj3OtGg&oe=6700B05A",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/460805917_122130556322360379_2667863702643741768_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE4uXKq6mMW3XL3WW7eP-s2fqGSXnFfG8d-oZJecV8bx-kTVW5GMRc68gcl9qdfNctypTCHHyaXukcPtuHs-i2H&_nc_ohc=DKxjW15yp6QQ7kNvgHXnygV&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYC-A4_tXsTTJFsPpY2nUD0VJJL6d9kI4tBGjBZJY0VVQQ&oe=6700973E",
    "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/461252645_122130556394360379_3436873701086105421_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHT1A7uRJxz3FZIkBu1Tt43KJFmZmYIVRsokWZmZghVG7UUkmwh6NozHXNNdcfjzAIWDiDHqXtnSOtBGCvFE-vW&_nc_ohc=nmbtRxYMti4Q7kNvgFi8u2Q&_nc_ht=scontent.fsgn2-5.fna&oh=00_AYC_w_N-srCknCw1wtHpQDquQj-I30-3x0aagXQ0ugjF-g&oe=6700AA30",
    "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/461318026_122130556562360379_5420959998892736738_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEzisZ_7XF0NtTcGQ0b1neea-5cK0gP50Fr7lwrSA_nQZbWr1xE675HTco1QuNVBLbjufIs5XYu71_YQsKTC6Zv&_nc_ohc=1ZUFleTohCEQ7kNvgGMfmtq&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AkoLpwn2_PdeW49L4Au7xkb&oh=00_AYAuByD6pvaXvqBF6FrUssOhmzM9RrmP7u8y3ywpc_fE5g&oe=6700949A",
    "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/461129543_122130556520360379_9006204432827397631_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGUKqtFkMx0hY-uSLEl2nG2ZJpfGMBNSk1kml8YwE1KTSAI60a3as5NXXXvOHxAwLM3f60AcUQgpoRfffeeQRpm&_nc_ohc=MfiKLEpk8ncQ7kNvgE25L_8&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AOvsIxSsVZsmuhKXkVL1_uC&oh=00_AYDQIaFLhGclDvuLHtx-OuBuaQ9wRScJZWhBjqfnDhgEuA&oe=6700A1D7",
  ];
  return (
    <div className="max-w-[100vw] relative overflow-x-hidden h-[600px]">
      <Slider {...settings} className="w-full">
        {listImgSrc.map((e) => (
          <div key={e} className="h-[500px] bg-black w-full">
            <img
              alt="Hinh anh xe"
              src={e}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
