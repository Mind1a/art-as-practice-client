// feature/about/components/MentorSection.tsx
import { mentorMain } from "feature/about/assets"
import Image from "next/image"

export const MentorProfile = () => (
  <section className="mx-auto mt-10 flex flex-col items-center px-6 pt-10">
    <div className="flex w-full max-w-[1010px] flex-col items-center justify-between lg:flex-row">
      <div className="max-w-[651px] px-[60px]">
        <h1 className="font-bai-jamjuree text-center text-[48px] font-semibold text-[#F2430D] lg:text-start lg:text-[100px]">
          MEET YOUR MENTOR
        </h1>
      </div>
      <div className="group relative flex w-full max-w-[332px] flex-col p-7">
        <div className="relative flex items-center justify-center overflow-hidden">
          <Image
            src={mentorMain}
            alt="Wato Tsereteli"
            className="transition-all duration-300 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
          <div className="absolute z-10 scale-75 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            <button className="cursor-pointer rounded-md bg-[#F2430D] p-3 text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="font-bai-jamjuree text-[23px] font-semibold">
            Wato Tsereteli
          </h1>
          <span className="font-montserrat text-[12px] tracking-[0.1em]">
            Artist & Curator
          </span>
        </div>
      </div>
    </div>
  </section>
)
