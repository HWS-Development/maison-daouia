import { useTranslation } from "react-i18next"

export default function LocationSection() {
  const { t } = useTranslation()

  return (
    <section className="py-12">
      <div className="mx-auto  w-full max-w-6xl grid items-start gap-10 md:grid-cols-2">
        {/* left: text */}
        <div className="w-[80%]">
          <h2 className="title">{t("location.title")}</h2>
          <p className="mt-2 max-w-prose text-gray-700">{t("location.desc")}</p>

          <div className="mt-6 text-[15px] leading-7">
            <h4 className="mb-2 font-semibold">Address</h4>
            <p>
              VILLA AMAMRE SIDI EL OUADIAR OULED EL GARNE FHAMID, AL OUDANNE,
              40000 MARRAKECH, MOROCCO
            </p>
            <p className="mt-2">
              Whatsapp:{" "}
              <a className="underline" href="https://wa.me/212666915556">
                +212666915556
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="underline" href="mailto:contact@maisondaouia.com">
                contact@maisondaouia.com
              </a>
            </p>
          </div>
        </div>

        {/* right: map (use your real embed src from Google Maps → Share → Embed) */}
        <div className="h-80 w-full overflow-hidden rounded-lg  pl-20">
          <a href="https://www.google.com/maps/place/Maison+Daouia/@31.6600948,-7.8658913,17z/data=!4m9!3m8!1s0xdaff54ea35a05fd:0x3fe900fc602196b!5m2!4m1!1i2!8m2!3d31.6600903!4d-7.8633164!16s%2Fg%2F11sxyg51ml?entry=tts&g_ep=EgoyMDI1MDkyNC4wIPu8ASoASAFQAw%3D%3D&skid=3bdfd91d-65b3-49e7-810c-e85d05c88912" target="_blank" rel="noopener noreferrer">
            <img src="/images/map.avif" alt="" className="w-full h-full" />
          </a>
        </div>
      </div>
    </section>
  )
}
