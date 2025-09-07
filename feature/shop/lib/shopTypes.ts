import { StaticImageData } from "next/image";

export type CardTypes = {
  id: number;
  image: StaticImageData;
  title: string;
  name: string;
  author: string;
  price: string;
};

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
