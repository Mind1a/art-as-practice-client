const Heading = () => {
  return (
    <div className="lg:flex lg:gap-4 lg:my-6 border-b border-b-[#A8A8A8]">
      <h1 className="font-medium text-[#F2430D] lg:text-[175px]/[175px] text-5xl/[72px]">
        Shop
      </h1>
      <div className="hidden lg:block lg:relative lg:flex-1 lg:px-[94px] lg:py-[10px]">
        <span className="top-0 left-0 absolute bg-[#A8A8A8] w-[1px] h-[250px]"></span>
        <p className="bottom-[-64px] left-[57.5px] absolute text-[16px]/[24px] tracking-[1.6px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          lacus ex, malesuada nec dolor sed, tincidunt commodo enim. Donec
          egestas sodales erat
        </p>
      </div>
    </div>
  );
};

export default Heading;
