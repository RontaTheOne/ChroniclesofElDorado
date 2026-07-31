import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

function Carrousel({ territory }) {
  return (
    <div className="carrousel-container">
      <Swiper
        modules={[Thumbs, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="gallery-main"
      >
        {territory.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        direction="vertical"
        slidesPerView={3}
        spaceBetween={16}
        watchSlidesProgress
        className="gallery-thumbs"
      >
        {territory.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrousel;
