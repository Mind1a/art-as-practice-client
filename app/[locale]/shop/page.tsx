import Shop from "feature/shop/components/composites/Shop"
import TanstackQueryProvider from "providers/TanstackQueryProvider"

const ShopPage = () => {
  return (
    <TanstackQueryProvider>
      <Shop />
    </TanstackQueryProvider>
  )
}

export default ShopPage
