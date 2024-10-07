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
    "/assets/images/image_car_1.jpg",
    "/assets/images/image_car_2.jpg",
    "/assets/images/image_car_3.jpg",
    "/assets/images/image_car_4.jpg",
    "/assets/images/image_car_5.jpg",
    "/assets/images/image_car_6.jpg",
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
