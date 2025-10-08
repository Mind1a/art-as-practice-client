"use client";
import { useState } from "react";
import { faqData } from "@feature/faq/data/data";
import Image from "next/image";
import chevron from "@feature/faq/assets/chevron.png";

function FaqAccordion() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="space-y-7 lg:max-w-[1144px] mx-auto">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col border border-[#f2430d] bg-white rounded-[13px] shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndexes.includes(index)}
            className="flex justify-between items-center p-6 w-full text-left cursor-pointer"
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
            <div className="p-6 border-t border-[#f2430d]">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
