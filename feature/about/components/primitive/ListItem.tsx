import { FeatureItem, TextSegment } from "feature/about/types/about"
import Image, { StaticImageData } from "next/image"
import React from "react"

type Props = {
  icon: StaticImageData | string
  content: TextSegment[]
  className: string
}

const ListItem = ({ content, icon, className }: Props) => {
  return (
    <li className="flex gap-4">
      <Image src={icon} alt="svg" />
      <div>
        {content.map((segment, index) => (
          <span key={index} className={className}>
            {segment.isBold ? (
              <strong className="font-semibold">{segment.text}</strong>
            ) : (
              segment.text
            )}
          </span>
        ))}
      </div>
    </li>
  )
}

export default ListItem
