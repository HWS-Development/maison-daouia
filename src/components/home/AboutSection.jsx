import { useTranslation } from "react-i18next"

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* two-column */}
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h2 className="title uppercase">
              {t("about.title")}
            </h2>

            <div className="mt-4 space-y-4 text-[15px] leading-7 text-text">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>
          </div>

          <div className="flex justify-end">
            <img
              src="/images/about-side.avif"
              alt="Maison Daouia"
              className="w-full max-w-[400px] shadow"
            />
          </div>
        </div>

        {/* centered reserve button below block, like the reference */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://maison-daouia.hotelrunner.com/bv3/search"
            className="btn !px-16"
          >
            {t("hero.book")}
          </a>
        </div>
      </div>
    </section>
  )
}
