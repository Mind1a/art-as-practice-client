import FaqAccordion from "feature/faq/components/FaqAccordion"

function FaqPage() {
  return (
    <div className="m-auto max-w-[1440px] p-5">
      <h1 className="text-5xl font-medium text-[#f2430d] lg:text-[175px]">
        FAQ
      </h1>
      <div className="mt-2 border-y-[1px] border-b-[1px] border-solid border-y-[#a8a8a8]">
        <div className="mt-8 mb-16">
          <FaqAccordion />
        </div>
      </div>
    </div>
  )
}

export default FaqPage
