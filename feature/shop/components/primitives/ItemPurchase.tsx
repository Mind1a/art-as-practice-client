"use client"

import Image from "next/image"
import copyImage from "feature/shop/assets/copy.png"
import { useState } from "react"

const ItemPurchase = () => {
  const [copied, setCopied] = useState(false)
  const id = "ID879"

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy!", err)
    }
  }

  return (
    <div className="flex flex-col gap-[10px] pb-28 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-6">
      <button
        onClick={handleCopy}
        className="flex cursor-pointer items-center justify-center gap-[10px] rounded-lg border border-dashed border-[#F2430D] px-4 py-[9px]"
      >
        <Image
          width={24}
          height={24}
          src={copyImage}
          alt="copy button"
          className="hidden lg:block"
        />
        <span className="text-xl font-semibold text-[#F2430D]">{id}</span>
      </button>
      <button className="cursor-pointer rounded-lg bg-[#F2430D] px-4 py-3 text-[15px] font-semibold text-white transition-all hover:bg-[#B74C2C]">
        Buy It Now
      </button>

      {/* Feedback */}
      {copied && <span className="font-medium text-green-600">Copied!</span>}
    </div>
  )
}

export default ItemPurchase
