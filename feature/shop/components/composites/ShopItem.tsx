"use client"

import { useQuery } from "@tanstack/react-query"
import ItemDescription from "../primitives/ItemDescription"
import ItemGallery from "../primitives/ItemGallery"
import ItemHeading from "../primitives/ItemHeading"
import ItemPurchase from "../primitives/ItemPurchase"

import { useParams } from "next/navigation"
import { getSingleArtwork } from "api/artworksApi"

const ShopItem = () => {
  const { shopItem } = useParams()

  // Add tanstack quary for single artwork data fetching //

  const { data, isError, isLoading } = useQuery({
    queryKey: ["artwork", shopItem],
    queryFn: () => getSingleArtwork(shopItem),
  })

  if (isError) return <div>Error fetching data...</div>
  if (isLoading) return <div>Loading...</div>

  console.log(data)

  return (
    <div className="mx-auto max-w-[1376px] px-6 lg:px-8">
      <ItemHeading
        name={data?.author}
        style={data?.style}
        size={data?.size}
        series={data?.series}
        description={data?.description}
      />
      <ItemGallery images={data?.images ? data.images : []} />
      <ItemDescription
        style={data?.style}
        size={data?.size}
        series={data?.series}
        description={data?.description}
      />
      <ItemPurchase />
    </div>
  )
}

export default ShopItem
