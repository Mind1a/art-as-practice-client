import { vector1, vector2 } from "feature/about/assets"
import { FeatureItem } from "feature/about/types/about"
import Image from "next/image"
import React from "react"
import ListItem from "../primitive/ListItem"

type Props = {
  title: string
  content: FeatureItem[]
  aside: { label: string; icon: string }
}

const FeatureList = ({ title, content, aside }: Props) => {
  return (
    <section className="font-montserrat mx-auto mt-14 flex w-full max-w-[1440px] items-center justify-center px-6">
      <div className="flex w-full max-w-[913px] flex-col">
        <h4 className="text-[32px] leading-[1.5] font-semibold tracking-[0.1em] text-[#1F3547]">
          {title}
        </h4>
        <ul className="mt-4 space-y-2">
          {content.map((item) => (
            <ListItem
              content={item.content}
              icon={item.icon}
              key={item.id}
              className="leading-[1.5] tracking-[0.1em] text-[#373737]"
            />
          ))}
        </ul>
        {aside.label && (
          <aside className="b mt-[28px] flex w-full max-w-[913px] items-center">
            <ListItem
              icon={aside.icon}
              className="leading-[1.5] tracking-[0.1em] text-[#373737]"
              content={[
                {
                  text: aside.label,
                  isBold: true,
                },
              ]}
            />
          </aside>
        )}
      </div>
    </section>
  )
}

export default FeatureList
