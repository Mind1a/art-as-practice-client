import { baseUrl } from "@/feature/shop/components/composites/Shop";
import { ArtworkTypes } from "@/feature/shop/lib/shopTypes";

export const getAllArtworks = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<ArtworkTypes[]> => {
  const res = await fetch(`${baseUrl}/Artworks/?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch artworks");
  return res.json();
};

export const getSingleArtwork = async (): Promise<ArtworkTypes[]> => {
  const res = await fetch(`${baseUrl}/Artworks`);
  if (!res.ok) throw new Error("Failed to fetch artworks");
  return res.json();
};
