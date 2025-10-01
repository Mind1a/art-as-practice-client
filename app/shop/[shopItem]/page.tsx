import ShopItem from "@/feature/shop/components/composites/ShopItem";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

const ShopItemPage = () => {
  return (
    <TanstackQueryProvider>
      <ShopItem />
    </TanstackQueryProvider>
  );
};

export default ShopItemPage;
