import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

const DATA = [
  { name:"Chama", country:"France", rating:"★★★★★",
    text:"Truly a gem in Marrakech, it’s ideal to disconnect and have some peace. It’s located at 30 min from the center if you don’t have a car it’s okey...",
    date:"13 May 2025" },
  { name:"Marli", country:"United Kingdom", rating:"★★★★★",
    text:"The moment we walked onto the property, we felt a sense of calm wash over us. This property exceeded our expectations and the photos definitely do not...",
    date:"28 April 2025" },
  { name:"Harun", country:"United Kingdom", rating:"★★★★★",
    text:"Amazing family oasis with attention to detail. The management went above and beyond to accommodate all our needs, a big thanks to Youcef",
    date:"9 August 2024" },
  { name:"Mohammed", country:"Morocco", rating:"★★★★☆",
    text:"Everything, mainly the sympathy of staff (Yahya was so welcoming guy)",
    date:"27 June 2024" },
  { name:"Katherine", country:"United Kingdom", rating:"★★★★★",
    text:"Beautiful room, friendly and helpful staff, wonderful breakfast and food, a calm relaxed atmosphere and great pool.",
    date:"24 August 2024" },
]

export default function TestimonialsSlider({ reviews = DATA }) {
  const { t } = useTranslation()
  const viewportRef = useRef(null)
  const [vw, setVw] = useState(0)
  const [index, setIndex] = useState(0)

  const GAP = 20
  const cardsPerView = useMemo(() => (typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 2), [])
  const cardWidth = Math.max(280, Math.floor((vw - GAP * (cardsPerView - 1)) / cardsPerView))
  const maxIndex = Math.max(0, reviews.length - cardsPerView)

  useEffect(() => {
    const measure = () => setVw(viewportRef.current?.getBoundingClientRect().width || 0)
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const go = (dir) => {
    setIndex((prev) => {
      let next = prev + dir * cardsPerView
      if (next > maxIndex) next = 0
      if (next < 0) next = maxIndex
      return next
    })
  }

  return (
    <section className="py-16 ">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center title">
          {t("testimonials.title")}
        </h2>
        <p className="mt-2 text-center text-gray-700">{t("testimonials.subtitle")}</p>

        {/* viewport */}
        <div
          ref={viewportRef}
          className="relative mx-auto mt-8 max-w-[1000px] overflow-hidden"
          style={{ paddingInline: 60 }}
        >
          {/* arrows (pill style) */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-[5px] top-1/2 -translate-y-1/2 z-10 w-10 h-14 rounded-full bg-white shadow ring-1 ring-black/10 hover:bg-white/90"
          >
            <span className="inline-block translate-y-[0px] text-2xl">‹</span>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-[5px] top-1/2 -translate-y-1/2 z-10 w-10 h-14 rounded-full bg-white shadow ring-1 ring-black/10 hover:bg-white/90"
          >
            <span className="inline-block translate-y-[0px] text-2xl">›</span>
          </button>

          {/* slider */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              gap: GAP,
              width: reviews.length * (cardWidth + GAP),
              transform: `translateX(-${index * (cardWidth + GAP)}px)`,
            }}
          >
            {reviews.map((r, i) => (
              <article
                key={i}
                className="relative shrink-0 rounded-xl bg-white p-6 shadow-md"
                style={{ width: cardWidth }}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-[17px]">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.country}</p>
                  </div>
                    {/* stars right */}
                  <p className="text-[#C9A66B] text-base leading-none">{r.rating}</p>
                </div>

                {/* compact body -> keep height small */}
                <p className="text-[15px] leading-7 text-[#333]">
                  {r.text}
                </p>

                {/* date bottom-right */}
                <div className="absolute bottom-3 right-4 text-xs text-gray-500">
                  {r.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
