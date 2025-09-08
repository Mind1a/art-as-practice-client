import Image from "next/image";

import image1 from "@/feature/shop/assets/gallery/image-1.png";
import image2 from "@/feature/shop/assets/gallery/image-2.png";
import image3 from "@/feature/shop/assets/gallery/image-3.png";
import image4 from "@/feature/shop/assets/gallery/image-4.png";

const ItemGallery = () => {
  const images = [image1, image2, image3, image4];

  return (
    <div className="flex md:flex-row flex-col gap-4 md:gap-6 mx-auto w-full max-w-[720px] md:max-h-[670px]">
      {/* Main image */}
      <div className="flex-1 px-7 md:px-0 w-full md:max-h-full">
        <Image
          className="w-full h-full object-cover"
          src={image1}
          alt="Main image"
          width={800}
          height={500}
          priority
        />
      </div>

      {/* Gallery thumbnails */}
      <div className="flex md:flex-col gap-3 md:gap-2 md:min-w-[220px] md:max-h-full md:overflow-y-auto">
        {images.slice(1).map((img, i) => (
          <Image
            key={i}
            className="w-1/3 md:w-full object-cover cursor-pointer"
            src={img}
            alt={`Gallery image ${i + 1}`}
            width={250}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemGallery;
