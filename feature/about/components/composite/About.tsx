"use client"

import React from "react"
import { Infinity } from "feature/about/assets"
import {
  ABOUT_PARAGRAPHS,
  EXPERIENCE_DATA,
  INTRO_SECTION,
  WHY_JOIN,
} from "feature/about/data/data"

import { MentorProfile } from "./MentorProfile"
import FeatureList from "./FeatureList"
import Description from "../primitive/Description"
import ListItem from "../primitive/ListItem"

const About = () => {
  return (
    <main className="mx-auto w-full max-w-[1440px]">
      <header className="border-b border-[#A8A8A8] p-6 py-[10px]">
        <h1 className="font-bai-jamjuree text-[48px] leading-[72px] font-medium text-[#F2430D] md:text-[48px] lg:text-[175px] lg:leading-none">
          About Us
        </h1>
      </header>

      <section className="font-montserrat mt-14 flex flex-col items-center px-6">
        <div className="mb-6 flex w-full max-w-[913px] lg:mb-7 lg:justify-center">
          <h2 className="text-[24px] font-semibold text-[#1F3547] lg:text-[32px] lg:leading-[1.5] lg:tracking-widest">
            {INTRO_SECTION.title}
          </h2>
        </div>

        <article className="w-full max-w-[720px] self-start text-[#1F3547] lg:max-w-[913px] lg:self-center">
          <h3 className="mb-4 text-[14px] font-bold lg:text-base lg:leading-[1.5] lg:tracking-widest">
            {INTRO_SECTION.subTitle}
          </h3>
          <div className="space-y-4 lg:space-y-8">
            <Description
              className={
                "text-[14px] lg:text-base lg:leading-[1.5] lg:tracking-[0.1em]"
              }
              paragraphs={INTRO_SECTION.article}
            />
          </div>
        </article>
        <aside className="mt-[24px] flex w-full max-w-[913px] items-center lg:mt-[28px]">
          <ListItem
            iconColour="#373737"
            icon={Infinity}
            className="text-[14px] text-[#373737] lg:leading-[1.5] lg:tracking-[0.1em]"
            content={[
              {
                text: "Limited-time mentorship opportunity available at a special rate!",
                isBold: true,
              },
            ]}
          />
        </aside>
      </section>

      <section>
        <FeatureList
          content={EXPERIENCE_DATA.list}
          title={EXPERIENCE_DATA.title}
          aside={EXPERIENCE_DATA.aside}
        />
      </section>
      <section aria-labelledby="why-join-title">
        <FeatureList
          content={WHY_JOIN.list}
          title={WHY_JOIN.title}
          aside={WHY_JOIN.aside}
        />
      </section>

      <section>
        <MentorProfile />
      </section>

      <section className="mt-[72px] mb-20 flex items-center justify-center px-6">
        <div className="font-inter w-full max-w-[912px] space-y-12">
          <Description
            className="text-[14px] leading-[20px] lg:text-base lg:leading-[1.5] lg:tracking-widest"
            paragraphs={ABOUT_PARAGRAPHS}
          />
        </div>
      </section>
    </main>
  )
}

export default About
