"use client"
import Image from "next/image"
import { useState } from "react"
import CustomButton from "../primitives/Button"
import { navLinks } from "feature/landing/data/landingData"

const Header = () => {
  return (
    <header className="mx-auto flex h-[100px] w-full items-center justify-between bg-[aqua] px-4 lg:max-w-[1440px] lg:px-8">
      <div className="flex items-center justify-center">
        <Image
          src="/images/svg/siteLogo.svg"
          width={46}
          height={40}
          alt="siteLogo"
        />
      </div>
      <div className="block lg:hidden">
        <Image
          src="/images/svg/burgerMenu.svg"
          width={30}
          height={20}
          alt="burgerMenu"
        />
      </div>

      <nav className="hidden max-w-[900px] flex-1 justify-center lg:flex">
        <ul className="flex gap-[132px] text-sm text-[15px] text-[#575757]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden lg:block">
        <CustomButton
          text="Registration"
          href="/"
          className="flex w-[87px] items-center justify-center bg-[#575757] text-center text-[10px] text-white hover:bg-[#F2430D]"
        />
      </div>
    </header>
  )
}

export default Header
