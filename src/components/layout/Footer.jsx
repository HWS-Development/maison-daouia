import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#6f8a3c] text-[#eef0e6]">
      {/* Top 3 columns */}
      <div className="mx-auto w-full max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3">
        {/* Escape */}
        <div className="text-center md:text-left flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Escape</h3>
          <p className="mt-3 text-base opacity-90 text-center">
            {t("footer.hero", {
              defaultValue: "Discover tranquility in our Moroccan charm retreat."
            })}
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-5">
            {/* Facebook (white round) */}
            <a href="#" aria-label="Facebook"
               className="inline-flex h-14 w-14 items-center justify-center ">
              {/* <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 4.99 3.64 9.14 8.4 9.94v-7.03H7.96v-2.9h2.32V9.87c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.24h-1.14c-1.13 0-1.49.7-1.49 1.41v1.68h2.54l-.41 2.9h-2.13V22c4.74-.8 8.4-4.95 8.4-9.94z"/>
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640">
                <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/>
              </svg>
            </a>
            {/* Instagram (white outline) */}
            <a href="#" aria-label="Instagram"
               className="inline-flex h-16 w-16 items-center justify-center ">
              {/* <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.7">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" stroke="none" />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640">
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight">{t("footer.contact","Contact")}</h3>
          <p className="mt-4 text-lg">+212666915557</p>
          <p className="mt-2">
            <a href="mailto:contact@maisondaouia.com" className="underline">
              contact@maisondaouia.com
            </a>
          </p>
        </div>

        {/* Explore */}
        <div className="text-center md:text-righ flex flex-col items-center justify-centert">
          <h3 className="text-3xl md:text-4xl font-semibold leading-tight">Explore</h3>

          <a
            href="https://maison-daouia.hotelrunner.com/bv3/search"
            className="mt-6 inline-block bg-[#efe7d6] px-9 py-3 font-semibold text-[#506332] shadow hover:brightness-105"
          >
            {t("hero.book","BOOK NOW")}
          </a>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mx-auto w-full max-w-6xl px-4 pb-8">
        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <a href="/terms" className="underline">{t("footer.terms","General Terms")}</a>
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}. {t("footer.rights","All rights reserved")}
          </p>
          <p className="text-right">
            {t("footer.madeby","Developed by")} <a href="https://hospitalitywebservices.com/" target="_blank" rel="noopener noreferrer" className="underline"><strong>HWS</strong></a>
          </p>
        </div>
      </div>
    </footer>
  )
}
