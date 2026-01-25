import { StaticImageData } from "next/image"

export type TextSegment = {
  text: string
  isBold?: boolean
}

export interface FeatureItem {
  id: string | number
  icon: StaticImageData | string
  content: TextSegment[]
}

export interface IntroSectionData {
  subTitle: string
  title: string
  article: TextSegment[][]
}
