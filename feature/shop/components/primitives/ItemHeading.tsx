import Link from "next/link";
import { ArtworkTypes } from "../../lib/shopTypes";

const ItemHeading = ({
  name,
  style,
  size,
  series,
  description,
}: {
  name: string | undefined;
  style: string | undefined;
  size: string | undefined;
  series: string | undefined;
  description: string | undefined;
}) => {
  return (
    <div className="lg:flex lg:flex-col lg:gap-10 lg:py-8 border-b border-b-[#A8A8A8] lg:border-none">
      <div className="flex lg:flex-row flex-col gap-2 lg:gap-4">
        <Link href="/shop">
          <h1 className="font-medium lg:font-semibold text-[#F2430D] text-5xl/[72px] lg:text-8xl/[115.7px]">
            Take Me Back
          </h1>
        </Link>

        <p className="self-end mb-2 lg:mb-0 font-normal text-[#373737] text-[13px] lg:text-[#707070] lg:text-lg">
          Author: {name}
        </p>
      </div>
      <div className="hidden lg:flex lg:justify-between">
        <div className="flex flex-col gap-8 basis-[564px]">
          <div className="flex justify-between">
            <h3 className="font-normal text-[16px]">{style}</h3>
            <h3 className="font-normal text-[16px] basis-1/2">{size}</h3>
          </div>
          <p className="font-normal text-[16px]/[24px] tracking-[1.6px]">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-8 ml-11 basis-[449px]">
          <h3 className="self-end font-normal text-[16px]">{series}</h3>
          <p className="font-normal text-[16px]/[24px] tracking-[1.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lacus ex, malesuada nec dolor sed, tincidunt commodo enim. Donec
            egestas sodales erat, at lobortis purus placerat
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemHeading;
