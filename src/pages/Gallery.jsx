import { useTranslation } from "react-i18next"
import GallerySection from "../components/gallery/GallerySection"
import CustomHero from "../components/layout/CustomHero"
import TranquilitySection from "../components/gallery/TranquilitySection"

export default function Gallery() {
  const { t } = useTranslation()
  return (
    <>
      <CustomHero bgImage='rooms-hero-daouia-YBgb0K0vgLSvKpZe.avif' title={t('galleryPage.hero_title')} subtitle={t('galleryPage.hero_ubtitle')} />
      <div className="bg-[#f5f1e6]">
        <GallerySection showHeader />
        <TranquilitySection />
      </div>    
    </>
  )
}