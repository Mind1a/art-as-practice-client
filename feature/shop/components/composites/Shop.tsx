"use client";

import Card from "@/feature/shop/components/primitives/Card";
import Heading from "@/feature/shop/components/primitives/Heading";
import Pagination from "@/feature/shop/components/primitives/Pagination";
import { cardsData } from "@/feature/shop/lib/shopData";
import Link from "next/link";
import { useState, useEffect } from "react";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  // Adjust cards per page based on screen width
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 768) {
        setCardsPerPage(6); // Tablet & up
      } else {
        setCardsPerPage(4); // Mobile
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // Slice cards
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cardsData.slice(startIndex, endIndex);

  return (
    <div className="mx-auto px-6 lg:px-8 max-w-[1376px]">
      {/* Heading */}
      <Heading />

      {/* body */}
      <div className="flex flex-col items-center pt-14 lg:pt-[135px] pb-[102px]">
        <div className="gap-16 md:gap-x-6 lg:gap-x-[211px] lg:gap-y-[112px] grid grid-cols-1 md:grid-cols-2 mb-16 lg:px-[97.5px] w-full">
          {currentCards.map((cardData) => (
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
