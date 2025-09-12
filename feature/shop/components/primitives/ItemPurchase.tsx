"use client";

import Image from "next/image";
import copyImage from "@/feature/shop/assets/copy.png";
import { useState } from "react";

const ItemPurchase = () => {
  const [copied, setCopied] = useState(false);
  const id = "ID879";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="hidden lg:flex justify-center items-center gap-6 pb-28">
      <button
        onClick={handleCopy}
        className="flex items-center gap-[10px] px-4 py-[9px] border border-[#F2430D] border-dashed rounded-lg cursor-pointer"
      >
        <Image width={24} height={24} src={copyImage} alt="copy button" />
        <span className="font-semibold text-[#F2430D] text-xl">{id}</span>
      </button>
      <button className="bg-[#F2430D] hover:bg-[#B74C2C] px-4 py-3 rounded-lg font-semibold text-[15px] text-white transition-all cursor-pointer">
        Buy It Now
      </button>

      {/* Feedback */}
      {copied && <span className="font-medium text-green-600">Copied!</span>}
    </div>
  );
};

export default ItemPurchase;
