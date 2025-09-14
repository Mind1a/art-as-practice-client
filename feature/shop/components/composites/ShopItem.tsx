import ItemDescription from "../primitives/ItemDescription";
import ItemGallery from "../primitives/ItemGallery";
import ItemHeading from "../primitives/ItemHeading";
import ItemPurchase from "../primitives/ItemPurchase";

const ShopItem = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 max-w-[1376px]">
      <ItemHeading />
      <ItemGallery />
      <ItemDescription />
      <ItemPurchase />
    </div>
  );
};

export default ShopItem;
