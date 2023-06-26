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
      <h3 className="text-[45px] font-medium text-center mb-[75px] ">
        Top Trusted Wallet
      </h3>
      <Carousel breakpoints={breakpoints}>
        {testimonial.map((item) => (
          <SwiperSlide key={`key-${item.id}`}>
            <div className="h-full w-full bg-primary-main flex items-center gap-4 ">
              <div className="h-[400px] w-[260px] relative ">
                <Image
                  src={item.image}
                  alt="avatar"
                  className="h-[unset] max-w-[unset]"
                />
              </div>
              <div className="">
                <h2 className="text-[40px] font-light leading-[46.66px]  ">
                  {item.name}
                </h2>
                <p className="mt-[20px] font-normal text-[20px] italic">
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
