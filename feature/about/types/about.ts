export type TextSegment = {
  text: string
  isBold?: boolean
}

export interface FeatureItem {
  id: string | number
  iconColour: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  content: TextSegment[]
}

export interface IntroSectionData {
  subTitle: string
  title: string
  article: TextSegment[][]
}
