import Image from "next/image"
import image1 from "feature/shop/assets/gallery/image-1.png"
import { ArtworkTypes } from "../../lib/shopTypes"

const Card = ({ cardData }: { cardData: ArtworkTypes }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
      <Image
        width={100}
        height={100}
        className="w-full"
        src={image1}
        alt="card cover"
      />
      <div className="flex justify-between lg:relative lg:flex-col">
        <div className="flex flex-col gap-[11px]">
          <h2 className="text-xl font-semibold text-[#0C0C0C]">
            {cardData.name}
          </h2>
          <p className="text-[13px] font-normal text-[#000]">{cardData.name}</p>
          <p className="text-[13px] font-normal text-[#000]">
            Author: {cardData.author}
          </p>
        </div>
        <span className="origin-bottom-left text-xl font-semibold text-[#F2430D] lg:absolute lg:bottom-0 lg:left-6 lg:rotate-[-90deg]">
          {cardData.price}GEL
        </span>
      </div>
    </div>
  )
}

export default Card
