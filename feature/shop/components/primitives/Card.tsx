import Image from "next/image";
import { ArtworkTypes } from "../composites/Shop";

const Card = ({ cardData }: { cardData: ArtworkTypes }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 lg:gap-6">
      <Image
        width={100}
        height={100}
        className="w-full"
        src={`/${cardData.images[0].image_name}`}
        alt="card cover"
      />
      <div className="lg:relative flex lg:flex-col justify-between">
        <div className="flex flex-col gap-[11px]">
          <h2 className="font-semibold text-[#0C0C0C] text-xl">
            {cardData.name}
          </h2>
          <p className="font-normal text-[#000] text-[13px]">{cardData.name}</p>
          <p className="font-normal text-[#000] text-[13px]">
            Author: {cardData.author}
          </p>
        </div>
        <span className="lg:bottom-[-24px] lg:left-6 lg:absolute font-semibold text-[#F2430D] text-xl lg:rotate-[270deg] lg:translate-x-[-55px] lg:translate-y-[-47px]">
          {cardData.price}GEL
        </span>
      </div>
    </div>
  );
};

export default Card;
