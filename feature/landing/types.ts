import { FormValues } from "feature/contact/schema/contactForm"
import { FieldErrors, UseFormRegister } from "react-hook-form"

export type CustomButtonProps = {
  text: string
  href: string
  bgColor?: string // optional with default
  textColor?: string
  className?: string
}
export type DropDpwnMenuProps = {
  defaultValue?: string
  label?: string
}

export type titleProps = {
  title: string
}

export type ReUsableInputProps = {
  label: string
  id: keyof FormValues
  placeholder?: string
  register: UseFormRegister<FormValues>
  errors: FieldErrors<FormValues>
  type?: string
}
