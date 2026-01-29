import { TextSegment } from "feature/about/types/about"
import React from "react"

type Props = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  content: TextSegment[]
  className: string
  iconColour: string
}

const ListItem = ({
  content,
  icon: IconCopoment,
  className,
  iconColour,
}: Props) => {
  return (
    <li className={className}>
      <IconCopoment
        width="24"
        height="24"
        className="flex shrink-0"
        color={iconColour}
      />
      <div>
        {content.map((segment, index) => (
          <span
            key={index}
            className="text-[14px] break-words text-[#373737] lg:leading-[1.5] lg:tracking-[0.1em]"
          >
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
