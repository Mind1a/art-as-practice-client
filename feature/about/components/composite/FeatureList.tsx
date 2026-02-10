import { FeatureItem } from "feature/about/types/about"
import React from "react"
import ListItem from "../primitive/ListItem"

type Props = {
  content: FeatureItem[]
  lastChild: boolean
}

const FeatureList = ({ content, lastChild }: Props) => {
  return (
    <ul className="mt-4 space-y-2 md:space-y-5 lg:space-y-4">
      {content.map((item, index) => (
        <ListItem
          key={item.id}
          iconColour={item.iconColour}
          content={item.content}
          icon={item.icon}
          className={`${lastChild && index === content.length - 1 && "mt-6"} flex gap-4`}
        />
      ))}
    </ul>
  )
}

export default FeatureList
