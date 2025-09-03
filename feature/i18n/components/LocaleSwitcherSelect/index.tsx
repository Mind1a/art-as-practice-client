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
      className="h-[47px] w-[63px] appearance-none rounded-[8px] border border-black bg-transparent px-0 text-center text-[15px] font-[600] text-black focus:outline-none"
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
