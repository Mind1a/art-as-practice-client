import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="font-bai-jamjuree mx-auto flex w-full max-w-[1440px] items-center justify-between border-t border-[#a8a8a8] bg-[#ffffff] px-8 py-10">
      <div className="flex w-[58px] shrink-0 items-center lg:h-[72px] lg:w-[88px]">
        <Image
          src="/images/svg/AAPLogo.svg"
          alt="logo"
          width={88}
          height={72}
        />
      </div>

      <div className="flex flex-row items-end gap-[32px] text-right text-sm font-medium text-gray-700 lg:flex-col lg:gap-[24px]">
        <div className="flex flex-col flex-wrap gap-4 text-[10px] lg:flex-row lg:text-[16px]">
          <span>10 Dodo Abashidze St T'bilisi</span>
          <Link
            href="tel:+995567567567"
            className="whitespace-nowrap hover:underline"
          >
            +995 567 567 567
          </Link>
          <Link
            href="mailto:Artaspractice20@gmail.com"
            className="whitespace-nowrap hover:underline"
          >
            Artaspractice20@gmail.com
          </Link>
        </div>

        <div className="mt-2 flex flex-col gap-4 lg:flex-row">
          <Link
            href="#"
            aria-label="Instagram"
            className="flex items-center text-[#575757] hover:text-orange-800 lg:gap-[13px]"
          >
            <Image
              src="/images/svg/fb.svg"
              alt="Instagram"
              width={18}
              height={18}
              className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]"
            />
            <span className="ml-[6px] text-[10px] lg:ml-0 lg:text-[16px]">
              Facebook
            </span>
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="flex items-center text-[#575757] hover:text-orange-800 lg:gap-[13px]"
          >
            <Image
              src="/images/svg/ig.svg"
              alt="Instagram"
              width={18}
              height={18}
              className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]"
            />
            <span className="ml-[6px] text-[10px] lg:ml-0 lg:text-[16px]">
              Instagram
            </span>
          </Link>
          <Link
            href="#"
            aria-label="LinkedIn"
            className="flex items-center text-[#575757] hover:text-orange-800 lg:gap-[13px]"
          >
            <Image
              src="/images/svg/lnkdin.svg"
              alt="LinkedIn"
              width={18}
              height={18}
              className="h-[16px] w-[16px] lg:h-[18px] lg:w-[18px]"
            />
            <span className="ml-[6px] text-[10px] lg:ml-0 lg:text-[16px]">
              Linkedin
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
