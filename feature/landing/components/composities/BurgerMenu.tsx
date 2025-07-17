"use client"
import { navLinks } from "feature/landing/data/landingData"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="lg:hidden">
      <div>
        <div
          className="z-50 block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={
              isOpen ? "/images/svg/xIcon.svg" : "/images/svg/burgerMenu.svg"
            }
            width={30}
            height={20}
            alt={isOpen ? "Close menu" : "Open menu"}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="burger-menu"
            className="fixed top-0 right-0 z-40 h-full w-full max-w-[300px] overflow-y-auto border-l border-[#FFFFFF40] bg-[#000000]"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex h-full w-full flex-col justify-center">
              <h1>Hello</h1>
              {navLinks.map((item) => (
                <ul key={item.id}>
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    <li className="flex min-h-[130px] w-full items-center gap-[30px] px-[30px] text-[#FFFFFF70] transition-all duration-300 ease-in-out hover:bg-[#1E1E1E] hover:text-[#ffffff]">
                      <div className="space-y-[10px]">
                        <p className="text-[22px] font-bold">{item.label}</p>
                      </div>
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BurgerMenu
