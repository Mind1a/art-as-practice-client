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

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
