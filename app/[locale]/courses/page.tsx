import arrowIcon from "@feature/courses/assets/arrowIcon.svg"
import { courseCardsContent } from "feature/courses/data/data"
import Image from "next/image"

import Link from "next/link"
export default function page() {
  return (
    <div className="m-auto max-w-[1440px] p-5">
      <h1 className="text-5xl font-medium text-[#f2430d] lg:text-[175px]">
        Courses
      </h1>
      <div>
        <div className="mt-2 border-y-[1px] border-b-[1px] border-solid border-y-[#a8a8a8]">
          <div className="mt-[56px] grid grid-cols-1 py-4 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4">
            {courseCardsContent.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 py-6 sm:p-6 lg:p-7"
                >
                  <Image src={item.image} className="w-full" alt="" />
                  <h3 className="mt-1 mb-1 line-clamp-1 text-[16px] text-[#1f3547] lg:mt-1 lg:mb-1 lg:text-[23px]">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 text-[12px] leading-[150%] text-[#373737]">
                    {item.text}
                  </p>
                  <Link href={`courses/${item.id}`}>
                    <button className="mt-4 ml-auto flex cursor-pointer items-center gap-3 text-[12px] leading-[18px] font-semibold text-[#f2430d] lg:ml-[initial] lg:text-[14px]">
                      View <Image src={arrowIcon} alt="Arrow icon" />
                    </button>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
