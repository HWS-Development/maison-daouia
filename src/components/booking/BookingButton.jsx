import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"

export default function BookingButton({
  label,                              // button label (defaults to i18n hero.book)
  hotelRunnerBase = "https://maison-daouia.hotelrunner.com/bv3/search",
  className = "",                     // extra classes for the trigger button
  offsetRightPx = 0,                     // extra classes for the trigger button
  offsetTopPx = 0                     // if you need to push the panel below a fixed header
}) {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [checkin, setCheckin] = useState("")
  const [checkout, setCheckout] = useState("")
  const [showPromo, setShowPromo] = useState(false)
  const [promo, setPromo] = useState("")
  const panelRef = useRef(null)

  // helpers
  const fmt = (d) => {
    const yyyy = d.getFullYear()
    const mm = String(d.getMonth() + 1).padStart(2, "0")
    const dd = String(d.getDate()).padStart(2, "0")
    return `${yyyy}-${mm}-${dd}`
  }

  // initialize dates: today/tomorrow
  useEffect(() => {
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    setCheckin(fmt(today))
    setCheckout(fmt(tomorrow))
  }, [])

  // keep checkout >= checkin + 1 day
  useEffect(() => {
    if (!checkin || !checkout) return
    const start = new Date(checkin)
    const end = new Date(checkout)
    if (end <= start) {
      const next = new Date(start)
      next.setDate(start.getDate() + 1)
      setCheckout(fmt(next))
    }
  }, [checkin])

  const dayCount = useMemo(() => {
    if (!checkin || !checkout) return 1
    const start = new Date(checkin)
    const end = new Date(checkout)
    return Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)))
  }, [checkin, checkout])

  const openHR = () => {
    if (!checkin || !checkout) return
    const payload = {
      checkin_date: checkin,
      checkout_date: checkout,
      coupon_code: promo || undefined,
      day_count: dayCount,
    }
    const url = `${hotelRunnerBase}?search=${encodeURIComponent(JSON.stringify(payload))}`
    window.open(url, "_blank") // new tab like your hidden link
  }

  // close when clicking outside
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    const onClick = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        // click outside the panel, but inside overlay
        const overlay = document.getElementById("booking-overlay")
        if (overlay && overlay.contains(e.target)) {
          setOpen(false)
        }
      }
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [open])

  return (
    <>
      {/* Trigger Button — drop this component inside Hero where you want the button */}
      <button
        onClick={() => setOpen(true)}
        className={`inline-block bg-[#879b61] text-white font-bold border border-white px-10 py-[14px] hover:bg-white hover:text-[#6F8A3C] hover:border-[#6F8A3C] transition ${className}`}
      >
        {label || t("hero.book")}
      </button>

      {/* Overlay */}
      {open && (
        <div
          id="booking-overlay"
          className="fixed inset-0 z-[1000] bg-black/30"
          style={{ paddingTop: offsetTopPx ? `${offsetTopPx}px` : undefined }}
        >
          {/* Slide-in Panel */}
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 w-full max-w-[500px] bg-[#f9f6f1] shadow-2xl
                       p-8 pt-10 overflow-y-auto translate-x-0 animate-[slideIn_.4s_ease_forwards]"
            style={{ marginTop: offsetTopPx ? `${offsetTopPx}px` : "0px",  marginRight: offsetRightPx ? `${offsetRightPx}px` : undefined  }}
          >
            {/* Close Row */}
            <div className="mb-5 flex items-start justify-between">
              <h2 className="text-[24px] font-normal text-[#2c2c2c]">
                {i18n.language === "fr" ? "Réservez votre séjour" : "Book your memorable stay"}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-[22px] leading-none text-gray-500 hover:text-gray-700"
                aria-label="Close"
                title="Close"
              >
                &times;
              </button>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-[14px] text-[#555]">
                  {i18n.language === "fr" ? "Arrivée" : "Arrival"}
                </label>
                <input
                  type="date"
                  value={checkin}
                  min={fmt(new Date())}
                  onChange={(e) => setCheckin(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-white px-3 py-3 text-[15px]"
                />
              </div>

              <div>
                <label className="mb-1 block text-[14px] text-[#555]">
                  {i18n.language === "fr" ? "Départ" : "Departure"}
                </label>
                <input
                  type="date"
                  value={checkout}
                  min={checkin ? fmt(new Date(new Date(checkin).getTime() + 24*60*60*1000)) : fmt(new Date())}
                  onChange={(e) => setCheckout(e.target.value)}
                  className="w-full rounded border border-gray-300 bg-white px-3 py-3 text-[15px]"
                />
              </div>

              {/* Promo */}
              {!showPromo ? (
                <button
                  type="button"
                  onClick={() => setShowPromo(true)}
                  className="mt-2 text-left text-[14px] text-[#5a5a5a] underline"
                >
                  {i18n.language === "fr" ? "Vous avez un code promo ?" : "Do you have a promo code?"}
                </button>
              ) : (
                <div>
                  <label className="mb-1 block text-[14px] text-[#555]">
                    {i18n.language === "fr" ? "Code promo" : "Promo code"}
                  </label>
                  <input
                    type="text"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder={i18n.language === "fr" ? "Saisir le code promo" : "Enter promo code"}
                    className="w-full rounded border border-gray-300 bg-white px-3 py-3 text-[15px]"
                  />
                  <button
                    type="button"
                    onClick={() => { setPromo(""); setShowPromo(false); }}
                    className="mt-1 text-[13px] text-gray-500"
                  >
                    {i18n.language === "fr" ? "Annuler" : "Cancel"}
                  </button>
                </div>
              )}

              <button
                onClick={openHR}
                className="mt-1 w-full rounded bg-[#ded2bb] px-4 py-3 font-bold text-[#333] hover:brightness-105"
              >
                {i18n.language === "fr" ? "Réserver maintenant" : "Book Now"}
              </button>
            </div>

            {/* Perks */}
            <ul className="mt-7 list-none border-t border-gray-200 pt-4 text-[13px] text-[#666]">
              <li>✔ {i18n.language === "fr" ? "Meilleur tarif garanti" : "Best rate guaranteed"}</li>
              <li>✔ {i18n.language === "fr" ? "Boisson de bienvenue" : "Welcome drink"}</li>
              <li>✔ {i18n.language === "fr" ? "10% sur votre prochain séjour" : "10% off your next stay"}</li>
            </ul>
          </div>
        </div>
      )}

      {/* keyframes for slide-in */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  )
}
