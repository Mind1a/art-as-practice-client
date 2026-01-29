"use client"
import { useState } from "react"
import { faqData } from "feature/faq/data/data"
import { ArrowDown } from "../assets"

function FaqAccordion() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setActiveIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="mx-auto space-y-7 lg:max-w-[1144px]">
      {faqData.map((item, index) => {
        const isOpen = activeIndexes.includes(index)

        return (
          <div
            key={index}
            className={`flex flex-col overflow-hidden rounded-[13px] border bg-white shadow-sm ${isOpen ? "border-[#f2430d]" : "border-[#828282]"}`}
          >
            <button
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
            >
              <span className="font-bai-jamjuree leading-6 font-medium">
                {item.question}
              </span>
              <ArrowDown
                width={24}
                heigth={24}
                className={`duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-[#f2430d] p-6">
                  <p className="font-inter leading-[1.5] tracking-[10%]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FaqAccordion
