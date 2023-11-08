import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, A11y, FreeMode } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

interface Media {
  type: "image" | "video";
  src: string | StaticImageData;
}

export interface Data {
  media: Media[];
  left: string;
  right: string;
}

export interface Props {
  title: string;
  data: Data;
}

const Slider = ({ title, data }: Props) => {
  return (
    <div className="flex slider flex-col gap-10">
      <h2
        className="text-3xl md:text-5xl lg:text-7xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Swiper
        spaceBetween={-80}
        slidesPerView="auto"
        modules={[Navigation, FreeMode, Autoplay, A11y]}
        loop
        centeredSlides
        freeMode
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slideToClickedSlide
      >
        {data.media.map((media, index) => (
          <SwiperSlide className="max-w-fit" key={index}>
            <Image
              className="w-[350px] sm:w-[500px] md:w-[800px] lg:w-[991px]"
              src={media.src}
              alt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 font-medium">
        <div
          className="md:min-w-[300px]"
          dangerouslySetInnerHTML={{ __html: data.left }}
        />
        <div className="" dangerouslySetInnerHTML={{ __html: data.right }} />
      </div>
    </div>
  );
};

export default Slider;
