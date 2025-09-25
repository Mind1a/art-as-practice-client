"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import Image from "next/image"
import testimonials from "feature/landing/data/TestemonialsData"

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="mx-auto w-full max-w-[1440px] px-4">
      <h2 className="mt-[16px] mb-10 text-center text-[24px] text-[#f2430d] lg:ml-[32px] lg:text-left lg:text-[32px]">
        Testimonials
      </h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((eachItem) => (
            <div
              key={eachItem.id}
              className="mt-auto grid h-[313px] w-[308px] flex-shrink-0 items-center p-4 text-center md:w-[41.2%] lg:w-[24.1%]"
            >
              <Image
                src="/Profile.svg"
                alt="profile"
                width={120}
                height={120}
                className="mb-[12px] max-w-[100%] justify-self-center"
              />
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-[20px] lg:text-[23px]">{eachItem.name}</h2>
                <p className="max-w-[220px] text-[12px] leading-[150%]">
                  {eachItem.text}
                </p>
              </div>
              <div className="mt-[12px] flex justify-center gap-1">
                {[...Array(eachItem.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src="/star.svg"
                    alt="star"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-[39px] md:mr-[24px] md:justify-end lg:justify-end">
        <button onClick={scrollPrev}>
          <Image src="/leftArrow.svg" alt="Left Arrow" width={25} height={25} />
        </button>
        <button onClick={scrollNext}>
          <Image
            src="/rightArrow.svg"
            alt="Right Arrow"
            width={25}
            height={25}
          />
        </button>
      </div>
    </div>
  )
}

export default Testimonials
