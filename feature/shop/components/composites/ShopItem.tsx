import ItemDescription from "../primitives/ItemDescription";
import ItemGallery from "../primitives/ItemGallery";
import ItemHeading from "../primitives/ItemHeading";
import ItemId from "../primitives/ItemId";
import ItemPurchase from "../primitives/ItemPurchase";

const ShopItem = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 max-w-[1376px]">
      <ItemHeading />
      <ItemId />
      <ItemGallery />
      <ItemDescription />
      <ItemPurchase />
    </div>
  );
};

export default ShopItem;
