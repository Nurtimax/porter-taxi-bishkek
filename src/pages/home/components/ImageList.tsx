/* eslint-disable @typescript-eslint/no-explicit-any */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FC } from "react";
import classes from "../index.module.css";

import "swiper/css/pagination";
import "swiper/css/navigation";

interface INumberDetailImageListProps {
  images: string[];
}

const ContentImageList: FC<INumberDetailImageListProps> = ({ images }) => {
  // Инициализация рекламы при монтировании компонента

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      pagination={pagination}
      navigation
      modules={[Pagination, Navigation]}
    >
      {images &&
        images.length > 0 &&
        images.map((image: string, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Number Image ${index + 1}`}
              className={classes.uploadedImage}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ContentImageList;
