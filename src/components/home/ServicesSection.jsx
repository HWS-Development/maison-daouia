import { useTranslation } from "react-i18next"

const CARDS = [
  { k: "food", img: "/images/service-food.avif", btn: "button", link: 'https://drive.google.com/file/d/1chLcCcJmIT21C3EclQbB-Ntp2t0eIrZV/preview' },
  { k: "bar",  img: "/images/service-bar.avif",  btn: "button", link: 'https://drive.google.com/file/d/1-cJYGXvHtP_CKBlP9mLo9VMHx1WUNKPb/preview' },
  { k: "spa",  img: "/images/service-spa.avif",  btn: "button", link: 'https://drive.google.com/file/d/1XGZFOzivvaFIAgY7cozTEyQaZaVrmu6s/preview' },
  { k: "yoga", img: "/images/service-yoga.avif", btn: "button", link: '/contact' }
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

        <div className="mt-10 grid gap-x-10 gap-y-20 md:grid-cols-2">
          {CARDS.map(({ k, img, btn, link }) => (
            <article key={k} className="relative">
              {/* photo */}
              <img
                src={img}
                alt=""
                className="h-[260px] w-full object-cover shadow"
              />

              {/* white overlay card sitting on the image bottom (like reference) */}
              <div className="pointer-events-none h-5" />
              <div className="absolute left-6 right-6 bottom-[-48px]  bg-white p-5  shadow">
                <h3 className="text-lg font-semibold text-center">{t(`services.${k}.title`)}</h3>
                <p className="mt-1 text-[15px] text-center leading-6 text-gray-700">
                  {t(`services.${k}.desc`)}
                </p>
                <div className="mt-3 flex w-full justify-center">
                  <a
                    href={link}
                    className="btn"
                    target={link.startsWith('http') ? "_blank" : undefined}
                  >
                    {t(`services.${k}.${btn}`)}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
