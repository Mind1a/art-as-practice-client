"use client"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full flex-row items-center justify-between border-t border-gray-300 px-4 py-6 lg:h-[240px] lg:max-w-[1440px] lg:px-10">
      <div className="flex w-1/3 justify-start lg:ml-[32px]">
        <div className="block lg:hidden">
          <Image
            alt="Logo"
            width={58}
            height={47}
            src="/images/svg/siteLogo.svg"
          />
        </div>

        <div className="hidden lg:block">
          <Image
            alt="Logo"
            width={88}
            height={72}
            src="/images/svg/siteLogo.svg"
          />
        </div>
      </div>

      <div className="hidden w-2/3 flex-col items-end text-sm text-[#575757] lg:mr-[32px] lg:flex">
        <div className="flex gap-[16px] leading-[24px]">
          <span>10 Dodo Abashidze St T'bilisi</span>
          <span>+995 567 567 567</span>
          <span>Artaspractice20@gmail.com</span>
        </div>

        <div className="flex gap-[24px] pt-[24px] text-[#575757]">
          <div className="flex items-center gap-1">
            <Image
              alt="Facebook"
              height={18}
              width={18}
              src="/images/svg/facebook.svg"
            />
            <span>Facebook</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              alt="Instagram"
              height={18}
              width={18}
              src="/images/svg/instagram.svg"
            />
            <span>Instagram</span>
          </div>
          <div className="flex items-center gap-1">
            <Image
              alt="LinkedIn"
              height={18}
              width={18}
              src="/images/svg/linkedin.svg"
            />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>

      <div className="flex w-2/3 flex-col gap-2 lg:hidden">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[12px] text-[#575757]">
            10 Dodo Abashidze St T'bilisi
          </span>
          <div className="flex items-center gap-[4px] text-[10px] text-[#575757]">
            <Image
              alt="Facebook"
              height={16}
              width={15}
              src="/images/svg/facebook.svg"
            />
            <span>Facebook</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="text-[12px] text-[#575757]">+995 567 567 567</span>
          <div className="flex items-center gap-[4px] text-[10px] text-[#575757]">
            <Image
              alt="Instagram"
              height={16}
              width={15}
              src="/images/svg/instagram.svg"
            />
            <span>Instagram</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="text-[12px] text-[#575757]">
            Artaspractice20@gmail.com
          </span>
          <div className="mr-[5px] flex items-center gap-[4px] text-[10px] text-[#575757]">
            <Image
              alt="LinkedIn"
              height={16}
              width={15}
              src="/images/svg/linkedin.svg"
            />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
