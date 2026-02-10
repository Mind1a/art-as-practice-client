"use client"
import { useLocale } from "next-intl"
import LocaleSwitcherSelect from "../LocaleSwitcherSelect"

const LocaleSwitcher = () => {
  const locale = useLocale()
  return (
    <div className="flex cursor-pointer items-center">
      <LocaleSwitcherSelect label="Select a Locale"></LocaleSwitcherSelect>
    </div>
  )
}

export default LocaleSwitcher
