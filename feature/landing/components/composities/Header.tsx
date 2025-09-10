"use client"
import Image from "next/image"
import CustomButton from "../primitives/Button"
import { navLinks } from "feature/landing/data/landingData"
import LocaleSwitcherSelect from "feature/i18n/components/LocaleSwitcherSelect"
import BurgerMenu from "./BurgerMenu"
import Link from "next/link"

const Header = () => {
  return (
    <header className="relative mx-auto flex w-full items-center justify-between px-4 py-4 lg:max-w-[1440px] lg:px-8">
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src="/images/svg/siteLogo.svg"
            width={46}
            height={40}
            alt="siteLogo"
            className="cursor-pointer"
          />
        </Link>
      </div>

      <nav className="hidden flex-1 justify-center lg:flex">
        <ul className="flex w-[593px] justify-between text-sm text-[15px] text-[#575757]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden items-center justify-between gap-4 lg:flex">
        <LocaleSwitcherSelect />
        <CustomButton
          text="Registration"
          href="/"
          className="flex w-[120px] items-center justify-center bg-[#F2430D] text-center text-[15px] text-white hover:bg-[#B74C2C]"
        />
      </div>
      <BurgerMenu />
    </header>
  )
}

export default Header
