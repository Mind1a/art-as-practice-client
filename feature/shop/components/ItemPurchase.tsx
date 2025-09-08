import Image from "next/image";
import copyImage from "@/feature/shop/assets/copy.png";

const ItemPurchase = () => {
  return (
    <div className="hidden lg:flex justify-center items-center">
      <div className="flex items-center gap-[10px] border border-[#F2430D] border-dashed py-[9px] px-4 rounded-md">
        <Image width={24} height={24} src={copyImage} alt="copy button" />
        <span className="text-[#F2430D]">ID879</span>
      </div>
      <button>Buy It Now</button>
    </div>
  );
};

export default ItemPurchase;
