import { titleProps } from "feature/landing/types"

const PageHeader = ({ title }: titleProps) => {
  return (
    <div className="w-full bg-white md:border-white lg:border-b lg:border-black">
      <div className="m-auto w-full max-w-[1440px] px-[24px] pb-[8px] lg:px-[32px] lg:py-[28px]">
        <p className="border-b border-[#A8A8A8] text-[48px] font-medium text-[#F2430D] md:border-b md:border-black lg:border-none lg:text-[175px]">
          {title}
        </p>
      </div>
    </div>
  )
}

export default PageHeader
