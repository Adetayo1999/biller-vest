"use client";
import Walter1 from "@/assets/images/water1.png";
import Walter2 from "@/assets/images/water2.png";
import { SwiperSlide } from "swiper/react";
import Carousel from "@/components/ui/Carousel";

import Image from "next/image";

// const Carousel = dynamic(() => import("@components/ui/Carousel"), {
//   ssr: false,
// });

const TrustedWallet = () => {
  return (
    <section className="mt-[70px]  ">
      <h3 className="text-[30px] md:text-[43px] font-medium text-center mb-[40px] mb:mb-[75px] ">
        Top Trusted Wallet
      </h3>
      <Carousel breakpoints={breakpoints}>
        {testimonial.map((item) => (
          <SwiperSlide key={`key-${item.id}`}>
            <div className="h-full w-full bg-primary-main flex flex-col md:flex-row items-center gap-4 ">
              <div className="h-full w-full md:h-[400px] md:w-[260px] relative ">
                <Image
                  src={item.image}
                  alt="avatar"
                  className=" w-full md:h-[unset] md:max-w-[unset] aspect-square object-cover h-full "
                />
              </div>
              <div className="flex flex-col items-center md:items-start p-3 md:p-0 ">
                <h2 className="text-[25px] md:text-[40px] font-light leading-[46.66px]  ">
                  {item.name}
                </h2>
                <p className="mt-[20px] font-normal text-center md:text-start text-[16px] md:text-[20px] italic">
                  I use NOW Wallet every day to transfer and receive my assets.
                  It is simple and easy to use, as well as being secure. As I
                  have to move between different countries, NOW Wallet helps me
                  to always have my funds with me in a quick way to use. I’m not
                  restricted by IP limitations and bureaucratic KYC processes.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};
export default TrustedWallet;

const breakpoints = {
  "768": {
    slidesPerView: 2,
    spaceBetween: 0,
  },

  "0": {
    slidesPerView: 1,
  },
};

const testimonial = [
  {
    id: 1,
    name: "Great Water1",
    image: Walter1,
  },
  {
    id: 2,
    name: "Great Water2",
    image: Walter2,
  },
  {
    id: 3,
    name: "Great Water3",
    image: Walter1,
  },
  {
    id: 4,
    name: "Great Water4",
    image: Walter2,
  },
];
