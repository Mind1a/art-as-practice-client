export type Testimonial = {
  id: number
  name: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity.",
    rating: 5,
  },
  {
    id: 2,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity.",
    rating: 3,
  },
  {
    id: 3,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity.",
    rating: 5,
  },
  {
    id: 4,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity.",
    rating: 5,
  },
  {
    id: 5,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity.",
    rating: 2,
  },
  {
    id: 6,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity. It was a very interesting experience, thank you for this opportunity.",
    rating: 5,
  },
  {
    id: 7,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity.It was a very interesting experience,",
    rating: 3,
  },
  {
    id: 8,
    name: "Name",
    text: "It was a very interesting experience, thank you for this opportunity. It was a very interesting experience, thank you for this opportunity.  interesting experience.",
    rating: 5,
  },
]

export default testimonials
