"use client";

import Card from "@/feature/shop/components/primitives/Card";
import Heading from "@/feature/shop/components/primitives/Heading";
import Pagination from "@/feature/shop/components/primitives/Pagination";
// import { cardsData } from "@/feature/shop/lib/shopData";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState, useEffect } from "react";

const BASE_URL = "https://artaspractice.onrender.com/";

type ArtworkImages = {
  id: number;
  image_name: string;
};

export type ArtworkTypes = {
  author: string;
  description: string;
  id: number;
  images: ArtworkImages[];
  link: string;
  name: string;
  price: number;
  series: string;
  size: string;
  style: string;
};

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  // Add tanstack quary for data fetching //

  const getAllArtworks = async ({
    page,
    limit,
  }: {
    page: number;
    limit: number;
  }): Promise<ArtworkTypes[]> => {
    const res = await fetch(
      `${BASE_URL}/Artworks/?page=${page}&limit=${limit}`
    );
    if (!res.ok) throw new Error("Failed to fetch artworks");
    return res.json();
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["artworks", currentPage, cardsPerPage],
    queryFn: () => getAllArtworks({ page: currentPage, limit: cardsPerPage }),
  });

  console.log(data);

  // // Adjust cards per page based on screen width
  // useEffect(() => {
  //   const updateCardsPerPage = () => {
  //     if (window.innerWidth >= 768) {
  //       setCardsPerPage(6); // Tablet & up
  //     } else {
  //       setCardsPerPage(4); // Mobile
  //     }
  //   };

  //   updateCardsPerPage();
  //   window.addEventListener("resize", updateCardsPerPage);
  //   return () => window.removeEventListener("resize", updateCardsPerPage);
  // }, []);

  // const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // // Slice cards
  // const startIndex = (currentPage - 1) * cardsPerPage;
  // const endIndex = startIndex + cardsPerPage;
  // const currentCards = cardsData.slice(startIndex, endIndex);

  if (isError) return <div>Error fetching data...</div>;
  if (isLoading) return <div>Loading...</div>;

  const totalPages = data ? Math.ceil(data.length / cardsPerPage) : 0;

  return (
    <div className="mx-auto px-6 lg:px-8 max-w-[1376px]">
      {/* Heading */}
      <Heading />

      {/* body */}
      <div className="flex flex-col items-center pt-14 lg:pt-[135px] pb-[102px]">
        <div className="gap-16 md:gap-x-6 lg:gap-x-[211px] lg:gap-y-[112px] grid grid-cols-1 md:grid-cols-2 mb-16 lg:px-[97.5px] w-full">
          {/* {currentCards.map((cardData) => (
            <Link href={`/shop/${cardData.id}`} key={cardData.id}>
              <Card cardData={cardData} />
            </Link>
          ))} */}
          {data?.map((cardData) => (
            <Link href={`/shop/${cardData.id}`} key={cardData.id}>
              <Card cardData={cardData} />
            </Link>
          ))}
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
