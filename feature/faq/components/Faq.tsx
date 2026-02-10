import React from "react"
import FaqAccordion from "./FaqAccordion"

const Faq = () => {
  return (
    <main className="m-auto max-w-[1440px]">
      <header className="border-b-1 border-[#A8A8A8] px-6">
        <h1 className="font-bai-jamjuree text-5xl leading-[72px] font-medium text-[#f2430d] lg:py-[10px] lg:text-[175px] lg:leading-none">
          FAQ
        </h1>
      </header>
      <section className="mt-8 mb-[102px] px-6">
        <FaqAccordion />
      </section>
    </main>
  )
}

export default Faq
