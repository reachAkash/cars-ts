import React from "react";
import SwiperCore from "swiper/core";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination, Scrollbar]);

interface ImgCarouselProps {
  href: string;
}

interface ImgCarouselData {
  data: ImgCarouselProps[];
}

const customStyles = `
  .swiper-pagination-bullet {
    background: white;
  }
  .swiper-pagination-bullet-active {
    background: #e02d2d;
  }
`;

const ImgCarousel: React.FC<ImgCarouselData> = ({ data }) => {
  return (
    <>
      <style>{customStyles}</style>
      <Swiper
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[13rem] group-hover:scale-105 transition-all duration-300 ease-in-out"
              src={item.href}
              alt="Carousel item"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImgCarousel;
