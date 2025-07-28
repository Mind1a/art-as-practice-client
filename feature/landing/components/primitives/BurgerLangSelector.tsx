"use client"
import { usePathname, useRouter } from "../../../i18n/routing"
import { useParams } from "next/navigation"
import { Locale } from "../../../i18n/routing"

const LocaleSwitcherButtons = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as Locale

  const changeLocale = (locale: Locale) => {
    router.replace(pathname, { locale })
  }

  return (
    <div className="flex w-[134px] justify-end gap-2">
      <button
        onClick={() => changeLocale("en")}
        className={`h-[43px] min-w-[63px] rounded-[8px] border px-3 py-1 font-medium transition-colors ${
          currentLocale === "en"
            ? "border-[#F2430D] bg-white text-orange-500"
            : "border-gray-300 bg-white text-black hover:bg-gray-50"
        }`}
      >
        ENG
      </button>
      <button
        onClick={() => changeLocale("ka")}
        className={`h-[43px] min-w-[63px] rounded-[8px] border px-3 py-1 font-medium transition-colors ${
          currentLocale === "ka"
            ? "border-orange-500 bg-white text-orange-500"
            : "border-gray-300 bg-white text-black hover:bg-gray-50"
        }`}
      >
        GEO
      </button>
    </div>
  )
}

export default LocaleSwitcherButtons
