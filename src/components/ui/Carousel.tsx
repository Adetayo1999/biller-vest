import React, { useRef } from "react";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Thumbs, Pagination, Autoplay, Grid } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper";
import { useRouter } from "next/router";
import GoogleIcon from "../icons/GoogleIcon";
import AppleIcon from "../icons/AppleIcon";
import ArrowRight from "../icons/ArrowRight";

type CarouselPropsType = {
  className?: string;
  buttonGroupClassName?: string;
  prevActivateId?: string;
  nextActivateId?: string;
  prevButtonClassName?: string;
  nextButtonClassName?: string;
  buttonSize?: "default" | "small";
  centeredSlides?: boolean;
  loop?: boolean;
  slidesPerColumn?: number;
  breakpoints?: {} | any;
  pagination?: {} | any;
  navigation?: {} | any;
  autoplay?: {} | any;
  grid?: {} | any;
};

export default function Carousel({
  children,
  className = "",
  buttonGroupClassName = "",
  prevActivateId = "",
  nextActivateId = "",
  prevButtonClassName = "",
  nextButtonClassName = "",
  buttonSize = "default",
  breakpoints,
  navigation = true,
  pagination = false,
  loop = false,
  grid,
  autoplay,
  ...props
}: React.PropsWithChildren<CarouselPropsType>) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  let nextButtonClasses = "";

  let prevButtonClasses = "";
  return (
    <div
      className={`carouselWrapper relative ${className} ${
        pagination ? "dotsCircle" : "dotsCircleNone"
      }`}
    >
      {Boolean(navigation) && (
        <div
          className={`flex items-center  ${buttonGroupClassName}`}
        >
          {prevActivateId.length > 0 ? (
            <div className={prevButtonClasses} id={prevActivateId}>
              <GoogleIcon />
            </div>
          ) : (
            <div ref={prevRef} className={prevButtonClasses}>
              <AppleIcon />
            </div>
          )}

          <Swiper
            modules={[Navigation, Autoplay, Pagination, Grid]}
            autoplay={autoplay}
            breakpoints={breakpoints}
            pagination={pagination}
            grid={grid}
            navigation={
              navigation
                ? {
                    prevEl: prevActivateId.length
                      ? `#${prevActivateId}`
                      : prevRef.current!, // Assert non-null
                    nextEl: nextActivateId.length
                      ? `#${nextActivateId}`
                      : nextRef.current!, // Assert non-null
                  }
                : {}
            }
            {...props}
          >
            {children}
          </Swiper>

          {nextActivateId.length > 0 ? (
            <div className={nextButtonClasses} id={nextActivateId}>
              <GoogleIcon />
            </div>
          ) : (
            <div role='button' ref={nextRef} className={nextButtonClasses}>
              <ArrowRight />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
