"use client";

import { useQuery } from "@tanstack/react-query";
import ItemDescription from "../primitives/ItemDescription";
import ItemGallery from "../primitives/ItemGallery";
import ItemHeading from "../primitives/ItemHeading";
import ItemPurchase from "../primitives/ItemPurchase";
import { getSingleArtwork } from "@/api/artworksApi";
// import { useParams } from "next/navigation";

const ShopItem = () => {
  // const { id } = useParams();
  // const artworkId = Number(id);

  // Add tanstack quary for single artwork data fetching //

  const { data, isError, isLoading } = useQuery({
    queryKey: ["artwork"],
    queryFn: getSingleArtwork,
  });

  console.log(data);

  if (isError) return <div>Error fetching data...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="mx-auto px-6 lg:px-8 max-w-[1376px]">
      <ItemHeading
        name={data && data[0].author}
        style={data && data[0].style}
        size={data && data[0].size}
        series={data && data[0].series}
        description={data && data[0].description}
      />
      <ItemGallery />
      <ItemDescription
        style={data && data[0].style}
        size={data && data[0].size}
        series={data && data[0].series}
        description={data && data[0].description}
      />
      <ItemPurchase />
    </div>
  );
};

export default ShopItem;
