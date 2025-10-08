import { baseUrl } from "feature/shop/components/composites/Shop"
import { ArtworkTypes } from "feature/shop/lib/shopTypes"
import { ParamValue } from "next/dist/server/request/params"

export const getAllArtworks = async ({
  page,
  limit,
}: {
  page: number
  limit: number
}): Promise<ArtworkTypes[]> => {
  const res = await fetch(`${baseUrl}/Artworks/?page=${page}&limit=${limit}`)
  if (!res.ok) throw new Error("Failed to fetch artworks")
  return res.json()
}

export const getSingleArtwork = async (
  id: ParamValue
): Promise<ArtworkTypes> => {
  const res = await fetch(`${baseUrl}/Artworks/${id}`)
  if (!res.ok) throw new Error("Failed to fetch artwork")
  return res.json()
}
