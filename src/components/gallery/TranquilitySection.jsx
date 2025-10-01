import { useTranslation } from "react-i18next"

export default function TranquilitySection() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#f5f1e6]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-4 py-12 md:py-16">
        {/* Title */}
        <h2 className="title">
          {t("galleryTranquility.title")}
        </h2>

        {/* Two-column copy */}
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-[#1f2721]">
              {t("galleryTranquility.col1.heading")}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-[#2c2c2c]">
              {t("galleryTranquility.col1.body")}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#1f2721]">
              {t("galleryTranquility.col2.heading")}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-[#2c2c2c]">
              {t("galleryTranquility.col2.body")}
            </p>
          </div>
        </div>

        {/* Large image */}
        <div className="mt-8 md:mt-10">
          <img
            src="/images/gallery/gallery-pool.avif"
            alt={t("galleryTranquility.imgAlt")}
            className="w-full h-96 rounded-[22px] object-cover shadow"
          />
        </div>
      </div>
    </section>
  )
}
