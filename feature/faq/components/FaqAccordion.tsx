"use client"
import { useState } from "react"
import { faqData } from "feature/faq/data/data"
import Image from "next/image"
import chevron from "feature/faq/assets/chevron.png"

function FaqAccordion() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index))
    } else {
      setActiveIndexes([...activeIndexes, index])
    }
  }

  return (
    <div className="mx-auto space-y-7 lg:max-w-[1144px]">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col overflow-hidden rounded-[13px] border border-[#f2430d] bg-white shadow-sm"
        >
          <button
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndexes.includes(index)}
            className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
          >
            <span>{item.question}</span>

            <Image
              src={chevron}
              alt=""
              className={`transform transition-transform duration-300 ${
                activeIndexes.includes(index) ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>

          {activeIndexes.includes(index) && (
            <div className="border-t border-[#f2430d] p-6">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FaqAccordion
