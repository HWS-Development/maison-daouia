import { useTranslation } from "react-i18next"
import BookingButton from "../booking/BookingButton"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      className="relative flex  md:h-screen"
      style={{
        backgroundImage: "url('/images/hero-pool.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "86vh"
      }}
    >
      {/* dark overlay like builder */}
      <div className="absolute inset-0 bg-black/45" />

      {/* LEFT-ALIGNED COPY with big spacing */}
      <div className="relative pt-60 z-10 mx-auto w-full max-w-6xl px-4 pb-14">
        <div className="max-w-2xl">
          <h1 className="text-white leading-tight font-semibold text-[36px] md:text-[66px]">
            {t("hero.title")}
          </h1>
          <p className="mt-3 text-white/90 text-base md:text-lg max-w-xl">
            {t("hero.subtitle")}
          </p>
          {/* <a
            href="#booking"
            className="mt-6 absolute bottom-10 right-10 rounded bg-[#879b61] px-6 py-2 font-semibold text-white shadow hover:brightness-105"
          >
            {t("hero.book")}
          </a> */}
          <div className="mt- absolute bottom-36 right-10">
            <BookingButton className="mt-6" offsetTopPx={160} offsetRightPx={140} />
          </div>
        </div>
      </div> 

      {/* compensate fixed header space so text sits lower like the screenshot */}
      <div className="absolute top-0 h-14 w-full" aria-hidden />
    </section>
  )
}
