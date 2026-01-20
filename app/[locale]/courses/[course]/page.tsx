import React from "react"
import Image from "next/image"
import banner from "feature/courses/assets/banner.png"
import { consultationPoints } from "feature/courses/data/data"

function CoursePage() {
  return (
    <div>
      <Image
        className="h-[166px] w-full object-cover md:h-[230px] xl:h-[332px]"
        src={banner}
        alt="Course banner"
      />
      <div className="m-auto max-w-[912px] px-6 lg:px-0">
        <div className="flex flex-col gap-20 xl:gap-10">
          <div className="mt-14">
            <h2 className="mb-6 text-2xl xl:mb-4 xl:text-[32px]">
              Art as Practice: Courses & Workshops
            </h2>
            <p>
              Explore the world of creativity through our tailored courses and
              workshops designed for individuals, groups, children, and
              corporate teams. Whether you're looking to unlock your artistic
              potential, reconnect with the joy of drawing, or foster teamwork
              through art, Art as Practice offers a unique, hands-on experience
              for all skill levels.
            </p>
          </div>
          <div className="flex flex-col gap-6 xl:gap-4">
            <h2 className="text-2xl text-[#f2430d] xl:text-[32px]">
              Individual Consultation
            </h2>
            <p>
              A personalized session to
              <strong> renew and reset your creative process. </strong> Receive
              <strong> constructive feedback </strong> on your work and tailored
              recommendations to enhance your artistic journey. Whether you're
              seeking a <strong> one-time review </strong> or
              <strong> ongoing mentorship </strong>, we provide flexible options
              to help you refine your vision and develop your creative
              potential.
            </p>
            <div className="flex flex-col gap-4 px-4 lg:px-10">
              {consultationPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-4 lg:gap-6">
                  <span className="inline-block h-[10px] w-[10px] shrink-0 rotate-45 bg-blue-600"></span>
                  <div className="flex flex-col lg:flex-row lg:gap-2">
                    <strong>{point.title}</strong>{" "}
                    <span>{point.description}</span>
                  </div>
                </div>
              ))}
            </div>
            <span className="mt-4 hidden text-[16px] font-semibold lg:block">
              Book your consultation today!
            </span>

            <div className="my-10">
              <button className="block w-full cursor-pointer rounded-[8px] bg-[#f2430d] py-3 text-white sm:m-auto sm:max-w-[120px]">
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
