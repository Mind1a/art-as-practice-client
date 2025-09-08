"use client"
import { useState, useRef, useEffect } from "react"
import { Locale, routing, usePathname, useRouter } from "../../routing"
import { useParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { DropDpwnMenuProps } from "feature/landing/types"

const LocaleSwitcherSelect = ({ defaultValue, label }: DropDpwnMenuProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as Locale

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(defaultValue || currentLocale)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const changeLocale = (locale: Locale) => {
    setSelected(locale)
    setOpen(false)
    router.replace(
      // @ts-expect-error
      { pathname, params },
      { locale }
    )
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-[63px] cursor-pointer items-center justify-center rounded-[8px] border border-[#000000] bg-transparent px-3 py-3 text-[15px] font-semibold text-[#000000]"
        aria-label={label}
      >
        {selected.toUpperCase()}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 z-10 mt-1 w-[63px] rounded-[8px] border border-[#000000] bg-[#ffffff] shadow-lg"
          >
            {routing.locales.map((locale) => (
              <motion.div
                key={locale}
                onClick={() => changeLocale(locale)}
                className="cursor-pointer px-3 py-2 text-center text-[15px] text-[#000000]"
              >
                {locale.toUpperCase()}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LocaleSwitcherSelect
