import { z } from "zod"

export const FormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, { message: "Full name must be at least 3 characters." })
    .max(60, { message: "Full name must not exceed 60 characters." }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Invalid email address." })
    .max(254, { message: "Email is too long." }),

  phoneNumber: z
    .string()
    .trim()
    .min(8, { message: "Phone number must be at least 8 digits." }),

  language: z
    .array(z.string())
    .min(1, { message: "Please select at least one language." }),

  age: z.string().min(1, "Please select your age."),
})

export type FormValues = z.infer<typeof FormSchema>
