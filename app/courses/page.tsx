import arrowIcon  from "../../feature/courses/assets/arrowIcon.svg"
import Image from "next/image";
import { courseCardsContent } from "../../feature/courses/data/data";
import Link from "next/link";
export default function page() {
  return (
    <div className="max-w-[1376px] m-auto p-5">
      <h1 className="text-[#f2430d] hidden lg:block lg:text-[175px]  font-medium">
        Courses
      </h1>
      <div>
        <h2 className="text-[#f2430d] text-5xl lg:text-[32px] mb-2">Courses</h2>

        <div className="mt-2 border-y-[#a8a8a8] border-solid border-y-[1px] border-b-[1px]">
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[56px] lg:mt-4">
            {courseCardsContent.map((item) => {
              return (
              
                <div className="lg:p-7 py-6 sm:p-6 flex flex-col gap-2">
                  <Image src={item.image} className="w-full" alt="" />
                  <h3 className="text-[#1f3547] text-[16px] lg:text-[23px] lg:mt-1 lg:mb-1 mt-1 mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[#373737] text-[12px] leading-[150%] line-clamp-3">
                    {item.text}
                  </p>
                  <Link href={`courses/${item.id}`}>
                  <button className="text-[#f2430d] cursor-pointer font-semibold leading-[18px] mt-4 ml-auto lg:ml-[initial] text-[12px] lg:text-[14px] flex items-center gap-3">
                    View <Image src={arrowIcon} alt="Arrow icon"/>
                  </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
