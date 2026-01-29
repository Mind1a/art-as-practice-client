import { FeatureItem } from "feature/about/types/about"
import React from "react"
import ListItem from "../primitive/ListItem"

type Props = {
  title: string
  content: FeatureItem[]
  lastChild: boolean
}

const FeatureList = ({ title, content, lastChild }: Props) => {
  return (
    <div className="flex w-full max-w-[913px] flex-col">
      <h4 className="text-[24px] font-semibold text-[#1F3547] lg:text-[32px] lg:leading-[1.5] lg:tracking-widest">
        {title}
      </h4>
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
    </div>
  )
}

export default FeatureList
