"use client";

import Card from "@/feature/shop/components/primitives/Card";
import Heading from "@/feature/shop/components/primitives/Heading";
import Pagination from "@/feature/shop/components/primitives/Pagination";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { getAllArtworks } from "@/api/artworksApi";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;

  // Add tanstack quary for data fetching //

  const { data, isError, isLoading } = useQuery({
    queryKey: ["artworks", currentPage, cardsPerPage],
    queryFn: () => getAllArtworks({ page: currentPage, limit: cardsPerPage }),
  });

  const totalPages = data ? Math.ceil(data.length / cardsPerPage) : 0;

  return (
    <div className="mx-auto px-6 lg:px-8 max-w-[1376px]">
      {/* Heading */}
      <Heading />

      {/* body */}
      <div className="flex flex-col items-center pt-14 lg:pt-[135px] pb-[102px]">
        <div className="gap-16 md:gap-x-6 lg:gap-x-[211px] lg:gap-y-[112px] grid grid-cols-1 md:grid-cols-2 mb-16 lg:px-[97.5px] w-full">
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error fetching data...</div>
          ) : (
            data?.map((cardData) => (
              <Link href={`/shop/${cardData.id}`} key={cardData.id}>
                <Card cardData={cardData} />
              </Link>
            ))
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Shop;
