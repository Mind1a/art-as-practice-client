import { TextSegment } from "feature/about/types/about"
import React from "react"

type Props = {
  paragraphs: TextSegment[][]
  className: string
}

const Description = ({ paragraphs, className }: Props) => {
  return (
    <>
      {paragraphs.map((paragraph, pIdx) => (
        <p key={pIdx} className={className}>
          {paragraph.map((segment, sIdx) => (
            <span
              key={sIdx}
              className={segment.isBold ? "font-semibold" : "font-normal"}
            >
              {segment.text}
            </span>
          ))}
        </p>
      ))}
    </>
  )
}

export default Description
