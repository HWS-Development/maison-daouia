import { useTranslation } from "react-i18next"
import { rooms } from "../data/rooms"
import CustomHero from "../components/layout/CustomHero"
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // md = 768px

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}

function RoomBlock({ slug, images, flip = false }) {
  const { t } = useTranslation()
  const base = `roomsPage.items.${slug}`
  const isMobile = useIsMobile();

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
        <img
          key={i}
          src={src}
          alt=""
          className="aspect-[4/3] w-full object-cover shadow"
        />
      ))}
    </div>
  )

  return (
    <section className="py-10 md:mx-40">
      <div className="mx-auto w-full max-w-6xl px-4 grid items-center gap-8 md:grid-cols-5">
        {(flip && !isMobile) ? (
          <>
            <div className="md:col-span-2  md:pl-10">
              {Gallery}
            </div>
            <div className="md:col-span-3  md:pl-8">
              {Text}

            </div>
          </>
        ) : (
          <>
            <div className="md:col-span-3  md:pr-8">
              {Text}
            </div>
            <div className="md:col-span-2  md:pr-10">
              {Gallery}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default function Rooms() {
  const { t } = useTranslation()
  return (
    <>
      <CustomHero bgImage='rooms-hero-daouia-YBgb0K0vgLSvKpZe.avif' title={t('roomsPage.title')} subtitle={t('roomsPage.subtitle')} />
      <div className="bg-[#f5f1e6] md:px-32">
        {/* Your hero goes above this page content */}
        {rooms.map((r, idx) => (
          <RoomBlock key={r.slug} slug={r.slug} images={r.images} flip={idx % 2 === 1} />
        ))}
      </div>
    </>
  )
}
