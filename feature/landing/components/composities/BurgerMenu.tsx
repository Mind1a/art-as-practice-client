"use client"
import { navLinks } from "feature/landing/data/landingData"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CustomButton from "../primitives/Button"
import LocaleSwitcherButtons from "../primitives/BurgerLangSelector"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="z-[999] flex items-center lg:hidden">
      <div
        className="right-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/images/svg/burgerMenu.svg"
          width={30}
          height={20}
          alt="Open menu"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-30 bg-black/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="burger-menu"
              className="fixed top-0 right-0 z-40 flex min-h-[852px] w-full max-w-[308px] justify-center overflow-y-auto rounded-[24px] border-l border-[#FFFFFF40] bg-white"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-full w-full flex-col items-center px-[30px]">
                <div className="mt-[20px] flex w-full max-w-[300px] items-center justify-between border-b border-[#A8A8A8] px-[12] py-[12px]">
                  <p className="text-lg font-semibold text-[#575757]">Menu</p>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer"
                  >
                    <Image
                      src="/images/svg/xIcon.svg"
                      width={14}
                      height={14}
                      alt="Close menu"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-4 flex w-[300px] justify-end pr-6">
                    <LocaleSwitcherButtons />
                  </div>
                </div>
                <div className="mb-[30px] flex w-full max-w-[300px] flex-col gap-4">
                  {navLinks.map((item) => (
                    <ul key={item.id}>
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <li className="cursor-pointer border-b border-[#A8A8A8] py-[10px]">
                          <p className="text-[#575757]">{item.label}</p>
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>

                <CustomButton
                  text="Registration"
                  href="/"
                  className="flex w-full items-center justify-end rounded-[8px] border border-[#F2430D] pt-3 text-center text-[15px] font-[600] text-[#F2430D] hover:bg-[#F2430D]"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BurgerMenu
