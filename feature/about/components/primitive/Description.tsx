import React from "react"

interface TextSegment {
  text: string
  isBold?: boolean
}

const Description = ({ paragraphs }: { paragraphs: TextSegment[][] }) => {
  return (
    <>
      {paragraphs.map((paragraph, pIdx) => (
        <p key={pIdx} className="leading-[1.5] tracking-[0.1em]">
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
