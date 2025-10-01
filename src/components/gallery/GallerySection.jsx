import { useTranslation } from "react-i18next"
import { galleryImages } from "../../data/gallery"

export default function GallerySection({ showHeader = true }) {
  const { t } = useTranslation()

  return (
    <section className="bg-[#f5f1e6]">
      <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-14">
        {showHeader && ( 
          <div className="mb-12 md:mb-16">
            <h2 className="text-center title font-semibold ">
              {t("galleryPage.title")}
            </h2>
            <p className="mt-2 text-center text-gray-700">
              {t("galleryPage.subtitle")}
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img
                src={src}
                alt={`Maison Daouia photo ${i + 1}`}
                className="w-full aspect-[4/3] object-cover rounded shadow-sm hover:opacity-95 transition"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
