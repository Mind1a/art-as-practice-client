import Link from "next/link"
import React from "react"
import { CustomButtonProps } from "feature/landing/types"

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  href,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`inline-block rounded py-3 px-4${className} transition hover:opacity-80`}
    >
      {text}
    </Link>
  )
}

export default CustomButton
