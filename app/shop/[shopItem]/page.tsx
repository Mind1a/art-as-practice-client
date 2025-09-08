import ItemDescription from "@/feature/shop/components/ItemDescription";
import ItemGallery from "@/feature/shop/components/ItemGallery";
import ItemHeading from "@/feature/shop/components/ItemHeading";
import ItemId from "@/feature/shop/components/ItemId";

const ShopItem = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 max-w-[1376px]">
      <ItemHeading />
      <ItemId />
      <ItemGallery />
      <ItemDescription />
    </div>
  );
};

export default ShopItem;
