import { FeatureItem } from "feature/about/types/about"
import React from "react"
import ListItem from "../primitive/ListItem"

type Props = {
  title: string
  content: FeatureItem[]
  aside: {
    label: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    iconColour: string
  }
}

const FeatureList = ({ title, content, aside }: Props) => {
  return (
    <section className="font-montserrat mx-auto mt-14 flex w-full max-w-[1440px] items-center justify-center px-6">
      <div className="flex w-full max-w-[913px] flex-col">
        <h4 className="text-[24px] font-semibold text-[#1F3547] lg:text-[32px] lg:leading-[1.5] lg:tracking-widest">
          {title}
        </h4>
        <ul className="mt-4 space-y-2 md:space-y-5 lg:space-y-4">
          {content.map((item) => (
            <ListItem
              iconColour={item.iconColour}
              content={item.content}
              icon={item.icon}
              key={item.id}
              className="lg:text-basetext-[#373737] text-[14px] lg:leading-[1.5] lg:tracking-[0.1em]"
            />
          ))}
        </ul>
        {aside.label && (
          <aside className="mt-6 flex w-full max-w-[913px] items-center lg:mt-[28px]">
            <ListItem
              iconColour={aside.iconColour}
              icon={aside.icon}
              className="text-[14px] font-bold text-[#373737] lg:text-base lg:leading-[1.5] lg:tracking-[0.1em]"
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
