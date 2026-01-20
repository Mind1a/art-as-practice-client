"use client"

import Image from "next/image"

// placeholder image
import image1 from "feature/shop/assets/gallery/image-1.png"

import { useState } from "react"
import { ArtworkImages } from "../../lib/shopTypes"

const ItemGallery = ({ images }: { images: ArtworkImages[] }) => {
  const [mainImage, setMainImage] = useState(images[0].image_name)

  return (
    <div className="mx-auto flex w-full max-w-[720px] flex-col gap-4 pt-30 md:max-h-[670px] md:flex-row md:gap-6 lg:mb-8 lg:max-h-full lg:max-w-full lg:items-center">
      {/* Main image */}
      <div className="w-full flex-1 px-7 md:max-h-full md:px-0 lg:max-w-[680px]">
        <Image
          className="h-full w-full object-cover"
          src={image1}
          alt="Main image"
          width={800}
          height={500}
          priority
        />
      </div>

      {/* Gallery thumbnails */}
      <div className="flex gap-3 md:max-h-full md:min-w-[220px] md:flex-col md:gap-2 md:overflow-y-auto lg:flex-1 lg:flex-row lg:overflow-visible">
        {images.map((img) => (
          <Image
            key={img.id}
            className="w-1/3 cursor-pointer object-cover md:w-full lg:h-fit"
            // should change url after back provides image
            src={image1}
            alt={`Gallery image`}
            width={250}
            height={200}
            onClick={() => setMainImage(img.image_name)}
          />
        ))}
      </div>
    </div>
  )
}

export default ItemGallery
