import { useTranslation } from "react-i18next"

function ServiceCard({ img, title, desc, btnLabel, btnHref = "#" }) {
  return (
    <div className="relative w-full md:w-[46%] mb-32  ">
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-[250px] object-cover shadow"
      />
      {/* White overlay card */}
      <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[90%] bg-white shadow p-4 text-center">
        <h3 className="text-2xl font-semibold text-[#2e3a23]">{title}</h3>
        <p className="mt-1 text-[14px] leading-0 text-black/50">{desc}</p>
        <a
          href={btnHref}
          className="btn !text-sm !py-2"
        >
          {btnLabel}
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const { t } = useTranslation()

  return (
    <div
      className="relative min-h-screen bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/service-cover.avif')"
      }}
    >
      {/* Overlay for darkening if needed */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-32 pt-44">
        {/* Title + subtitle */}
        <div className="text-center text-white drop-shadow">
          <h1 className="title !text-[#fffbee]">
            {t("servicesPage.title")}
          </h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            {t("servicesPage.subtitle")}
          </p>
        </div>

        {/* Cards row */}
        <div className="mt-16 flex flex-col md:flex-row md:justify-between gap-14">
          <ServiceCard
            img="/images/hammam.avif"
            title={t("servicesPage.hammam.title")}
            desc={t("servicesPage.hammam.desc")}
            btnLabel={t("servicesPage.hammam.button")}
            btnHref="#spa-menu"
          />
          <ServiceCard
            img="/images/food.avif"
            title={t("servicesPage.food.title")}
            desc={t("servicesPage.food.desc")}
            btnLabel={t("servicesPage.food.button")}
            btnHref="#restaurant-menu"
          />
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:justify-between gap-14">
          <ServiceCard
            img="/images/Conciergerie.avif"
            title={t("servicesPage.Conciergerie.title")}
            desc={t("servicesPage.Conciergerie.desc")}
            btnLabel={t("servicesPage.Conciergerie.button")}
            btnHref="#spa-menu"
          />
          <ServiceCard
            img="/images/pool.avif"
            title={t("servicesPage.pool.title")}
            desc={t("servicesPage.pool.desc")}
            btnLabel={t("servicesPage.pool.button")}
            btnHref="#restaurant-menu"
          />
        </div>
      </div>
    </div>
  )
}
