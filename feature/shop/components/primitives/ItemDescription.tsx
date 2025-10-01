const ItemDescription = ({
  style,
  size,
  series,
  description,
}: {
  style: string | undefined;
  size: string | undefined;
  series: string | undefined;
  description: string | undefined;
}) => {
  return (
    <div className="lg:hidden flex flex-col gap-4 pt-6 pb-6">
      <h2 className="font-semibold text-2xl">{style}</h2>
      <h3 className="font-bold text-[#373737] text-sm/[20px]">{size}</h3>
      <p className="font-normal text-[#373737] text-sm/[20px]">{description}</p>
      <h3 className="font-bold text-[#373737] text-sm/[20px]">{series}</h3>
      <p className="font-normal text-[#373737] text-sm/[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus
        ex, malesuada nec dolor sed, tincidunt commodo enim.
      </p>
    </div>
  );
};

export default ItemDescription;
