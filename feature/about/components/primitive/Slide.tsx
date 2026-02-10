import React from "react"
import Image, { StaticImageData } from "next/image"
const Slide = ({ item }: { item: StaticImageData }) => {
  return (
    <div className="h-full">
      <Image width={216} height={288} src={item} alt="Slide" />
    </div>
  )
}

export default Slide
