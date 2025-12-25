import { useTranslation } from "react-i18next"
import { rooms } from "../data/rooms"
import CustomHero from "../components/layout/CustomHero"
import { useEffect, useState } from "react"

/* ---------------------------
   Detect mobile
--------------------------- */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const handler = e => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return isMobile
}

/* ---------------------------
   Room Block
--------------------------- */
function RoomBlock({ slug, images, flip = false }) {
  const { t } = useTranslation()
  const base = `roomsPage.items.${slug}`
  const isMobile = useIsMobile()

  /* 🔥 Slider state */
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openSlider = (i) => {
    setIndex(i)
    setOpen(true)
  }

  const next = () => setIndex((index + 1) % images.length)
  const prev = () => setIndex((index - 1 + images.length) % images.length)

  /* Keyboard support */
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, index])

  const Text = (
    <div className="space-y-4">
      <h2 className="text-2xl md:text-[28px] font-extrabold tracking-wide text-[#2f3a24] uppercase">
        {t(`${base}.title`)}
      </h2>
      <p className="text-[12px] tracking-wide text-[#6b6b6b] uppercase">
        {t(`${base}.meta`)}
      </p>
      <p className="text-[13px] font-semibold text-[#333]">
        {t(`${base}.beds`)}
      </p>
      <p className="mt-3 text-[15px] leading-7 text-[#333] max-w-3xl">
        {t(`${base}.desc`)}
      </p>
    </div>
  )

  const Gallery = (
    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {images.map((src, i) => (
        <button
          key={i}
          onClick={() => openSlider(i)}
          className="focus:outline-none"
        >
          <img
            src={src}
            alt=""
            className="aspect-[4/3] w-full object-cover shadow cursor-zoom-in hover:opacity-90 transition"
          />
        </button>
      ))}
    </div>
  )

  return (
    <section className="py-10 md:mx-40">
      <div className="mx-auto w-full max-w-6xl px-4 grid gap-8 md:grid-cols-5">

        {(flip && !isMobile) ? (
          <>
            <div className="md:col-span-2">{Gallery}</div>
            <div className="md:col-span-3">{Text}</div>
          </>
        ) : (
          <>
            <div className="md:col-span-3">{Text}</div>
            <div className="md:col-span-2">{Gallery}</div>
          </>
        )}

      </div>

      {/* 🔥 SLIDER LIGHTBOX */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[index]}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded shadow-xl"
          />

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 md:right-10 text-white text-4xl"
          >
            ›
          </button>
        </div>
      )}

    </section>
  )
}

/* ---------------------------
   Rooms Page
--------------------------- */
export default function Rooms() {
  const { t } = useTranslation()

  return (
    <>
      <CustomHero
        bgImage="rooms-hero-daouia-YBgb0K0vgLSvKpZe.avif"
        title={t("roomsPage.title")}
        subtitle={t("roomsPage.subtitle")}
      />

      <div className="bg-[#f5f1e6] md:px-32">
        {rooms.map((r, idx) => (
          <RoomBlock
            key={r.slug}
            slug={r.slug}
            images={r.images}
            flip={idx % 2 === 1}
          />
        ))}
      </div>
    </>
  )
}
