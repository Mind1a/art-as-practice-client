import FaqAccordion from "@/feature/faq/components/FaqAccordion";
function FaqPage() {
  return (
    <div className="max-w-[1440px] m-auto p-5">
      <h1 className="text-[#f2430d] text-5xl lg:text-[175px]  font-medium">
        FAQ
      </h1>
      <div className="mt-2 border-y-[#a8a8a8] border-solid border-y-[1px] border-b-[1px] ">
        <div className="mt-8 mb-16">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
