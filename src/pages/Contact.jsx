import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function Contact() {
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !message) return
    // Build a mailto link
    const subject = encodeURIComponent(t("contact.subject"))
    const body = encodeURIComponent(
      `${t("contact.form.name")}: ${name}\n${t("contact.form.email")}: ${email}\n\n${message}`
    )
    window.location.href = `mailto:contact@maisondaouia.com?subject=${subject}&body=${body}`
  }

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/contact-cover.avif')" }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 md:py-28">
        {/* Title like screenshot (large, centered, white) */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-center text-white text-4xl md:text-5xl font-extrabold">
            {t("contact.title")}
          </h1>
          <p className="mt-2 text-center text-white max-w-96">
            {t("contact.subtitle")}
          </p>

        </div>

        {/* Card */}
        <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/95 p-6 md:p-8 shadow-2xl">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t("contact.form.name")}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("contact.placeholder.name")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#879b61]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t("contact.form.email")}*
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t("contact.placeholder.email")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#879b61]"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t("contact.form.message")}*
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder={t("contact.placeholder.message")}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#879b61]"
              />
            </div>

            {/* Button */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="btn"
              >
                {t("contact.submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
