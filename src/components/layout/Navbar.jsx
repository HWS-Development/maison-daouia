import { Link, NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

const linkBase =
  "px-3 py-2 text-[19px] font-medium tracking-[0.5px] transition-all hover:opacity-85";
  const linkActive = "underline underline-offset-8"

  function LangPill({ className = "" }) {
    const { i18n } = useTranslation()
    const [openSel, setOpenSel] = useState(false)

    const langs = [
      { code: "fr", label: "FR", flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/fr.svg" },
      { code: "en", label: "EN", flag: "https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.3.2/flags/4x3/us.svg" },
    ]
    const current = langs.find((l) => l.code === i18n.language) || langs[0]

    const changeLang = (lng) => {
      i18n.changeLanguage(lng)
      document.documentElement.lang = lng
      setOpenSel(false)
    }

    return (
      <div className={`relative ${className}`}>
        <button onClick={() => setOpenSel(v => !v)} className="flex items-center gap-1 rounded-full px-2 py-1">
          <img src={current.flag} alt={current.label} className="w-10 h-5 rounded-full" />
          <svg className="w-5 h-5 text-white ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        {openSel && (
          <div className="absolute right-0 mt-1 w-28 bg-white rounded-lg shadow-lg overflow-hidden z-50">
            {langs.map(l => (
              <button key={l.code} onClick={() => changeLang(l.code)} className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100">
                <img src={l.flag} alt={l.label} className="w-10 h-5 rounded-full" />
                <span className="text-black">{l.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    // Transparent overlay over hero; NOT sticky on scroll
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
     <div className="w-full px-6">
<div className="flex w-full items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
           <img
  src="/images/logo_white_transparent-YanJ4l86raHEGQwp.webp"
  alt="Maison Daouia"
  className="h-36 w-auto md:h-40 lg:h-44 transition-all duration-300"
/>
          </Link>

          {/* Desktop nav */}
       {/* CENTER — LINKS */}
  <nav className="hidden md:flex items-center gap-8 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
    <NavLink to="/" className={({isActive}) => `text-[17px] ${linkBase} ${isActive ? linkActive : ""}`}>{t("nav.home")}</NavLink>
    <NavLink to="/rooms" className={({isActive}) => `text-[17px] ${linkBase} ${isActive ? linkActive : ""}`}>{t("nav.rooms")}</NavLink>
    <NavLink to="/services" className={({isActive}) => `text-[17px] ${linkBase} ${isActive ? linkActive : ""}`}>{t("nav.services")}</NavLink>
    <NavLink to="/gallery" className={({isActive}) => `text-[17px] ${linkBase} ${isActive ? linkActive : ""}`}>{t("nav.gallery")}</NavLink>
    <NavLink to="/contact" className={({isActive}) => `text-[17px] ${linkBase} ${isActive ? linkActive : ""}`}>{t("nav.contact")}</NavLink>
  </nav>

        <div className="hidden md:flex items-center">
    <LangPill />
  </div>
    

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded bg-white/70 px-2 py-1 text-sm"
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/80 text-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
            <NavLink to="/" onClick={()=>setOpen(false)}>{t("nav.home")}</NavLink>
            <NavLink to="/rooms" onClick={()=>setOpen(false)}>{t("nav.rooms")}</NavLink>
            <NavLink to="/services" onClick={()=>setOpen(false)}>{t("nav.services")}</NavLink>
            <NavLink to="/gallery" onClick={()=>setOpen(false)}>{t("nav.gallery")}</NavLink>
            <NavLink to="/contact" onClick={()=>setOpen(false)}>{t("nav.contact")}</NavLink>
            <div className="flex gap-2 pt-2">
              <button onClick={() => i18n.changeLanguage("fr")} className="rounded bg-[#879b61] px-2 py-1 text-xs">FR</button>
              <button onClick={() => i18n.changeLanguage("en")} className="rounded bg-[#879b61] px-2 py-1 text-xs">EN</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
