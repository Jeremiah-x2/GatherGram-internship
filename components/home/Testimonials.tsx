"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonies: {
  name: string;
  jobTitle: string;
  level: string;
  image: string;
  testimony?: string;
}[] = [
  {
    name: "Alisa Hester",
    level: "PM, Hourglass",
    jobTitle: "Web Design Agency",
    image: "alisa.png",
  },
  {
    name: "Rich Wilson",
    level: "COO, Command+R",
    jobTitle: "Web Design Agency",
    image: "rich.png",
    testimony: "We've really sped up our workflow using GatherGram",
  },
  {
    name: "Annie Stanley",
    level: "Designer, Catalog",
    jobTitle: "UX Agency",
    image: "annie.png",
  },
  {
    name: "Johnny Bell",
    level: "PM, Sisyphus",
    jobTitle: "Machine Learning",
    image: "johnny.png",
  },
  {
    name: "Mia Ward",
    level: "Fullstack Dev, Quotient ",
    jobTitle: "Performance Marketing",
    image: "mia.png",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 py-14 lg:p-[120px] bg-[#FFF6FC]">
      <div className="lg:px-8 space-y-16">
        <div className="flex justify-between flex-col lg:flex-row gap-4">
          <div className="space-y-5">
            <h4 className="font-semibold text-4xl text-[#101828]">
              Don&apos;t just take our word for it
            </h4>
            <p className="text-xl text-[#475467]">
              Hear from some of our amazing customers who are building faster.
            </p>
          </div>
          <div className="space-x-3 font-semibold">
            <button className="px-5 py-3 bg-white rounded-lg shadow-md border-[1px] border-[#D0D5DD] text-[#344054]">
              Our customers
            </button>
            <button className="px-5 py-3 bg-[#F5169C] rounded-lg shadow-md border-[1px] border-[#F5169C] text-white">
              Create account
            </button>
          </div>
        </div>

        <Swiper
          className=""
          slidesPerView={1}
          modules={[Navigation, Mousewheel]}
          navigation={{ enabled: true, nextEl: ".next", prevEl: ".prev" }}
          mousewheel={{ enabled: true }}
          breakpoints={{
            720: { slidesPerView: 2 },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className="w-[360px] h-[480px] relative">
                <div className="relative w-full h-full ">
                  <Image
                    src={`/images/${testimony.image}`}
                    fill={true}
                    alt={testimony.name}
                    className="object-contain"
                  />
                </div>
                <div className="absolute w-full h-full top-0 left-0 flex items-end px-6 pb-6">
                  <div className="px-5 py-6 bg-white border-[1px] border-white border-opacity-50 bg-opacity-30 text-white w-full mb-6">
                    {testimony.testimony && <p>{testimony.testimony}</p>}
                    <div className="space-y-8">
                      <span className="inline-flex">
                        {new Array(5).fill(null).map((item, index) => (
                          <Star
                            key={index}
                            size={20}
                            stroke="none"
                            fill="white"
                          />
                        ))}
                      </span>
                      <p className="font-semibold text-3xl">{testimony.name}</p>
                    </div>
                    <div className="space-y-1 ">
                      <p className="font-semibold text-lg">{testimony.level}</p>
                      <p className="text-base font-medium">
                        {testimony.jobTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex gap-4">
          <button className=".prev w-14 h-14 rounded-full border flex items-center justify-center border-[#EAECF0]">
            <ChevronLeft size={40} stroke="#667085" strokeWidth={2} />
          </button>
          <button className=".next w-14 h-14 rounded-full border flex items-center justify-center border-[#EAECF0]">
            <ChevronRight size={40} stroke="#667085" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
