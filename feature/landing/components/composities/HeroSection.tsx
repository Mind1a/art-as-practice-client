"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

const HeroSection = () => {
  const [count, setCount] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth <= 768)
    }

    checkScreen()
    window.addEventListener("resize", checkScreen)

    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col px-[24px] py-[16px]">
      <div className="relative flex min-h-[767px] flex-col justify-between lg:min-h-[792px]">
        <div className="flex flex-col items-center">
          <p className="custom-title-font z-10 text-center text-[48px] font-medium text-[#F2430D] md:text-[96px] md:leading-[72px] lg:text-[192px] lg:leading-[240px]">
            Art as Practice
          </p>
        </div>
        <div>
          <Image
            src="/images/heroSectionImage/png/heroSectionPhoto.png"
            alt="Logo"
            width={580}
            height={793}
            className="absolute top-[0px] left-1/2 h-[543px] w-[341px] -translate-x-1/2 md:h-[543px] md:w-[341px] lg:h-[793px] lg:w-[580px]"
          />
        </div>
        <div className="relative z-10 flex w-full flex-col gap-[40px] lg:mb-[20px] lg:gap-[113px]">
          <p className="custom-heroSection-font font-medium text-[#F2430D] lg:text-[20px]">
            Transform Your World
          </p>
          <div className="flex w-full flex-col items-end gap-[30px]">
            <p className="custom-heroSection-font w-full max-w-[277px] text-end font-medium text-[#F2430D] lg:max-w-[403px] lg:text-[20px]">
              Experience a shift in consciousness and personal growth in our
              exclusive live workshop series
            </p>
            <Link
              href="https://m.me/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="hidden lg:flex"
                src="/images/heroSectionImage/svg/messenger.svg"
                alt="messengerIcon"
                width={34}
                height={34}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-12 lg:mt-10 lg:gap-20">
        <div
          onClick={() => {
            if (!isLargeScreen) setCount(!count)
          }}
          className="mx-auto w-full cursor-pointer lg:max-w-[912px]"
        >
          <p className="custom-heroSection-font block cursor-default text-justify text-[14px] text-[#373737] md:cursor-pointer lg:text-[16px] lg:leading-[166%]">
            Combining art, mindfulness, and inner engineering, Wato Tsereteli’s
            distinctive fusion of practical artistry and life philosophy comes
            alive in a 5-day intensive that extends beyond drawing to
            actualizing your unique potential. An esteemed artist whose
            installations and curatorial work have shaped public spaces and
            perspectives, Wato opens the doors to his personalized creative
            journey for a U.S. audience for the first time
            {isLargeScreen || count ? "." : "..."}
          </p>
          <AnimatePresence>
            {(isLargeScreen || count) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0.3, height: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  opacity: { duration: 0.5, delay: 0.1 },
                }}
                className="overflow-hidden"
              >
                <p className="custom-heroSection-font block cursor-default text-justify text-[14px] text-[#373737] md:cursor-pointer lg:text-[16px] lg:leading-[166%]">
                  Whether you’re an artist or not, this series is your
                  invitation to refining your individual narrative and
                  manifesting your unique power by putting pencil to paper.
                  Merging motivational insights with hands-on skill development,
                  Wato provides the tools to convert your intuition into
                  expressive, meaningful output. In an intimate setting that
                  respects your own unique journey, you’ll learn not only to
                  create but to bring to life any vision with clarity and
                  purpose. Access this limited-time mentorship opportunity now
                  at a special rate, and redefine what it means to be a creator
                  in your world.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="custom-heroSection-font w-full font-medium text-[#F2430D] lg:max-w-[677px] lg:text-xl">
          In this course you will understand the keys to pursuing a creative
          practice that will enrich and expand every aspect of your being
        </p>
      </div>
    </div>
  )
}

export default HeroSection
