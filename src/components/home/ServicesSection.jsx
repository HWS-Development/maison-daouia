import { useTranslation } from "react-i18next"

const CARDS = [
  { k: "food", img: "/images/service-food.avif", btn: "button", link: "https://drive.google.com/file/d/1chLcCcJmIT21C3EclQbB-Ntp2t0eIrZV/preview" },
  { k: "spa",  img: "/images/service-spa.avif",  btn: "button", link: "https://drive.google.com/file/d/1XGZFOzivvaFIAgY7cozTEyQaZaVrmu6s/preview" },
  { k: "yoga", img: "/images/service-yoga.avif", btn: "button", link: "/contact" }
]

export default function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-6xl px-4">

        <h2 className="text-center title !text-4xl">
          {t("services.title")}
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-700">
          {t("services.subtitle")}
        </p>

        <div className="mt-14 grid gap-y-20">
          
          {/* FULL WIDTH FOOD CARD */}
          <article className="relative w-full">
            <img
              src={CARDS[0].img}
              alt=""
              className="h-[350px] w-full object-cover shadow rounded-lg"
            />

            <div className="pointer-events-none h-6" />

            <div className="absolute left-6 right-6 bottom-[-48px] bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-center">
                {t(`services.food.title`)}
              </h3>

              <p className="mt-1 text-[15px] text-center text-gray-700 leading-6">
                {t(`services.food.desc`)}
              </p>

              <div className="mt-3 flex justify-center">
                <a
                  href={CARDS[0].link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(`services.food.button`)}
                </a>
              </div>
            </div>
          </article>

          {/* 2-COLUMN GRID FOR SPA + YOGA (UNCHANGED STYLE) */}
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
            {CARDS.slice(1).map(({ k, img, btn, link }) => (
              <article key={k} className="relative">

                <img
                  src={img}
                  alt=""
                  className="h-[300px] w-full object-cover shadow rounded-lg"
                />

                <div className="pointer-events-none h-6" />

                <div className="absolute left-6 right-6 bottom-[-48px] bg-white p-5 shadow rounded-lg">
                  <h3 className="text-lg font-semibold text-center">
                    {t(`services.${k}.title`)}
                  </h3>

                  <p className="mt-1 text-[15px] text-center text-gray-700 leading-6">
                    {t(`services.${k}.desc`)}
                  </p>

                  <div className="mt-3 flex justify-center">
                    <a
                      href={link}
                      className="btn"
                      target={link.startsWith("http") ? "_blank" : undefined}
                    >
                      {t(`services.${k}.${btn}`)}
                    </a>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
