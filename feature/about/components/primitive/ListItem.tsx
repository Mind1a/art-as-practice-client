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
    <li className="flex gap-4">
      <IconCopoment width="24" height="24" color={iconColour} />
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
