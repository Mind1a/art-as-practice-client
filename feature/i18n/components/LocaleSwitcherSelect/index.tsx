"use client"
import { Locale, routing, usePathname, useRouter } from "../../routing"
import { useParams } from "next/navigation"

type Props = {
  defaultValue?: string
  label?: string
}

const LocaleSwitcherSelect = ({ defaultValue, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as Locale

  const changeLocale = (locale: Locale) => {
    router.replace(
      // @ts-expect-error
      { pathname, params },
      { locale }
    )
  }

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    router.replace(
      // @ts-expect-error: Ensures known params and pathname combination
      { pathname, params },
      { locale: nextLocale as Locale }
    )
  }

  return (
    <select
      defaultValue={defaultValue}
      onChange={onSelectChange}
      aria-label={label}
      className="h-[43px] w-[63px] rounded border border-[#000000] bg-transparent px-2 py-1 text-sm"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  )
}

export default LocaleSwitcherSelect
