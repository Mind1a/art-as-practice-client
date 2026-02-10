"use client"
import { Locale, routing, usePathname, useRouter } from "../../routing"
import { useParams } from "next/navigation"

type Props = {
  label?: string
}

const LocaleSwitcherSelect = ({ label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const currentLocale = (params.locale as Locale) || routing.defaultLocale

  const nextLocale = currentLocale === "en" ? "ka" : "en"

  const toggleLocale = () => {
    router.replace(
      // @ts-expect-error: Ensures known params and pathname combination
      { pathname, params },
      { locale: nextLocale }
    )
  }

  return (
    <button
      onClick={toggleLocale}
      aria-label={label || `Switch to ${nextLocale.toUpperCase()}`}
      className="flex h-[43px] w-[63px] items-center justify-center rounded-[8px] border border-black bg-transparent text-sm font-medium"
    >
      {nextLocale.toUpperCase()}
    </button>
  )
}

export default LocaleSwitcherSelect
