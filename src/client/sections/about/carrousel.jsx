import React, { useState } from "react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, EffectFade } from "swiper/modules";

function Carrousel({ territory }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        modules={[Thumbs, EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
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
        onSwiper={setThumbsSwiper}
        className="gallery-thumbs"
      >
        {territory.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}

export default Carrousel;