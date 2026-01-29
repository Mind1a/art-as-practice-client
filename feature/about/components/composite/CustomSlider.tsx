import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar, A11y } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { Images, VectorLeft, VectorRight } from "feature/about/assets"
import Slide from "../primitive/Slide"

const CustomSlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)
  const [scrollbarEl, setScrollbarEl] = useState<HTMLDivElement | null>(null)

  return (
    <div className="w-full bg-white px-4">
      <div className="relative mx-auto w-full max-w-[369px] py-12 md:max-w-[680px]">
        <Swiper
          key={Images.slider.length}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={16}
          loop={true}
          observer={true}
          observeParents={true}
          navigation={{ prevEl, nextEl }}
          scrollbar={{ el: scrollbarEl, draggable: true }}
          centeredSlides={true}
          slidesPerView={1.5}
          breakpoints={{
            768: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
          className="rounded-xl"
        >
          {Images.slider.map((item, index) => (
            <SwiperSlide key={`slide-${index}`}>
              <Slide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* left */}
        <div className="absolute top-1/2 -left-0 z-10 flex h-full w-full max-w-[119px] -translate-y-1/2 lg:-left-14">
          <button
            ref={setPrevEl}
            className="flex w-full items-center bg-gradient-to-r from-white to-transparent lg:bg-none"
          >
            <VectorLeft />
          </button>
        </div>

        {/* right */}
        <div className="absolute top-1/2 -right-0 z-10 flex h-full w-full max-w-[119px] -translate-y-1/2 justify-end lg:-right-14">
          <button
            ref={setNextEl}
            className="flex w-full items-center justify-end bg-gradient-to-l from-white to-transparent lg:bg-none"
          >
            <VectorRight />
          </button>
        </div>

        {/* Scroll */}
        <div className="mt-8 flex justify-center px-4">
          <div
            ref={setScrollbarEl}
            className="relative h-[5px] w-full max-w-[495px] cursor-pointer overflow-hidden rounded-full bg-slate-200"
          ></div>
        </div>

        <style jsx global>{`
          .swiper-scrollbar-drag {
            background-color: #6d88a0 !important;
            height: 100% !important;
            border-radius: 9999px;
          }
        `}</style>
      </div>
    </div>
  )
}

export default CustomSlider
