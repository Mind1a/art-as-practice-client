import Image from "next/image";
import copyImage from "@/feature/shop/assets/copy.png";

const ItemPurchase = () => {
  return (
    <div className="hidden lg:flex justify-center items-center gap-6 pb-28">
      <div className="flex items-center gap-[10px] px-4 py-[9px] border border-[#F2430D] border-dashed rounded-lg">
        <Image width={24} height={24} src={copyImage} alt="copy button" />
        <span className="font-semibold text-[#F2430D] text-xl">ID879</span>
      </div>
      <button className="bg-[#F2430D] hover:bg-[#B74C2C] px-4 py-3 rounded-lg font-semibold text-[15px] text-white transition-all cursor-pointer">
        Buy It Now
      </button>
    </div>
  );
};

export default ItemPurchase;
