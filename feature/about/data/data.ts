import {
  Art,
  Book,
  Brush,
  Check,
  Puzzle,
  Smile,
  User,
} from "feature/about/assets"
import { FeatureItem, IntroSectionData, TextSegment } from "../types/about"

// Lists

export const EXPERIENCE_LIST: FeatureItem[] = [
  {
    id: "exp-1",
    icon: User,
    iconColour: "#373737",
    content: [
      { text: "5 live, interactive sessions ", isBold: true },
      { text: "with Wato Tsereteli", isBold: false },
    ],
  },
  {
    id: "exp-2",
    icon: Art,
    iconColour: "#373737",
    content: [
      { text: "Overcome creative blocks ", isBold: true },
      { text: "and unlock your artistic expression", isBold: false },
    ],
  },
  {
    id: "exp-3",
    icon: Brush,
    iconColour: "#373737",
    content: [
      { text: "Develop a unique visual style ", isBold: true },
      { text: "and personal symbol vocabulary", isBold: false },
    ],
  },
  {
    id: "exp-4",
    icon: Puzzle,
    iconColour: "#373737",
    content: [
      { text: "Turn ideas into tangible projects ", isBold: true },
      { text: "through a structured process", isBold: false },
    ],
  },
  {
    id: "exp-5",
    icon: Book,
    iconColour: "#373737",
    content: [
      { text: "Practical creativity training ", isBold: true },
      { text: "for all skill levels", isBold: false },
    ],
  },
  {
    id: "exp-6",
    icon: Smile,
    iconColour: "#373737",
    content: [
      { text: "Expert insights and feedback ", isBold: true },
      { text: "to elevate your artistic practice", isBold: false },
    ],
  },
]

export const WHY_JOIN_LIST: FeatureItem[] = [
  {
    id: "exp-1",
    icon: Check,
    iconColour: "#34C759",
    content: [
      {
        text: "Experience the transformative power of creativity",
        isBold: true,
      },
    ],
  },
  {
    id: "exp-2",
    icon: Check,
    iconColour: "#34C759",
    content: [
      {
        text: "Develop a personal visual language for deeper self-expression",
        isBold: true,
      },
    ],
  },
  {
    id: "exp-3",
    icon: Check,
    iconColour: "#34C759",
    content: [
      {
        text: "Learn to create a productive, growth-focused creative space",
        isBold: true,
      },
    ],
  },
  {
    id: "exp-4",
    icon: Check,
    iconColour: "#34C759",
    content: [
      {
        text: "Bring any project to life, from concept to final realization",
        isBold: true,
      },
    ],
  },
  {
    id: "exp-5",
    icon: Check,
    iconColour: "#34C759",
    content: [
      {
        text: "Discover new perspectives with innovative artistic tools & techniques",
        isBold: true,
      },
    ],
  },
  {
    id: "exp-6",
    icon: Art,
    iconColour: "#373737",
    content: [
      {
        text: "Join us and redefine what it means to be a creator in your world.",
        isBold: true,
      },
    ],
  },
]

// Main data

export const INTRO_SECTION: IntroSectionData = {
  title: "Transform Your World Through Creativity",
  subTitle: "Awaken Your Potential with Art as Practice",
  aside: {
    content: "Limited-time mentorship opportunity available at a special rate!",
  },
  article: [
    [
      { text: "Experience a " },
      {
        text: "profound shift in consciousness and personal growth",
        isBold: true,
      },
      { text: " through our exclusive live workshop series." },
    ],
    [
      { text: "Combining art, " },
      { text: "mindfulness, and inner exploration", isBold: true },
      {
        text: ", Wato Tsereteli's unique approach merges practical artistry with a ",
      },
      { text: "deep philosophy of life and creativity ", isBold: true },
      { text: "In this " },
      { text: "immersive 5-day intensive ", isBold: true },
      { text: "you'll go beyond drawing—unlocking your " },
      { text: "full creative potential ", isBold: true },
      { text: "and discovering a new way to express yourself." },
    ],
    [
      {
        text: "For the first time, Wato, an internationally recognized artist, curator, and creative visionary, invites a U.S. audience to ",
      },
      { text: "embark on a personalized artistic journey. ", isBold: true },
      {
        text: "Whether you're an experienced artist or exploring creativity for the first time, this series will ",
      },
      {
        text: "help you refine your narrative, develop your artistic voice, and bring your ideas to life. ",
        isBold: true,
      },
    ],
    [
      {
        text: "With  ",
      },
      {
        text: "motivational insights, hands-on exercises, and expert guidance.",
        isBold: true,
      },
      {
        text: "you'll gain the tools to ",
      },
      {
        text: "transform intuition into meaningful creative expression. ",
        isBold: true,
      },
      {
        text: "In a supportive and interactive environment, you'll learn ",
      },
      {
        text: "not just to create, but to turn any vision into reality ",
        isBold: true,
      },
      {
        text: "—with clarity, confidence, and purpose.",
      },
    ],
  ],
}

export const EXPERIENCE_DATA = {
  title: "What You'll Experience",
  list: EXPERIENCE_LIST,
}

export const WHY_JOIN = {
  title: "Why Join?",
  list: WHY_JOIN_LIST,
}

export const ABOUT_PARAGRAPHS: TextSegment[][] = [
  [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus ex, malesuada nec dolor sed, tincidunt commodo enim. Donec egestas sodales erat, at lobortis purus placerat in. Etiam volutpat accumsan risus sed rutrum. Morbi vel faucibus dui, at tristique odio. Maecenas ornare sollicitudin erat dapibus elementum.",
    },
  ],
  [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus ex, malesuada nec dolor sed, tincidunt commodo enim. Donec egestas sodales erat, at lobortis purus placerat in. Etiam volutpat accumsan risus sed rutrum. Morbi vel faucibus dui, at tristique odio. Maecenas ornare sollicitudin erat dapibus elementum.",
    },
  ],
]
