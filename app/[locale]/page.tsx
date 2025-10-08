import Landing from "feature/landing/components/composities/Landing"

// import { useTranslations } from "next-intl"

const Home = () => {
  // const t = useTranslations("HomePage")
  return (
    <div>
      {/* <LocaleSwitcher />
      <h1 className="text-[color:var(--h2-color)]">{t("title")}</h1>
      <p className="text-[color:var(--username-and-join)]">{t("about")}</p> */}
      <Landing />
    </div>
  )
}

export default Home
