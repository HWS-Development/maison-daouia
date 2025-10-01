import { useTranslation } from "react-i18next"

const Li = ({ children }) => (
  <li className="ml-5 list-disc text-[15px] leading-7 text-[#2b2b2b]">{children}</li>
)

const Warning = ({ children }) => (
  <div className="mt-2 flex items-start gap-2 text-[15px] leading-7 text-[#2b2b2b]">
    <span className="mt-1">⚠️</span>
    <p>{children}</p>
  </div>
)

export default function Terms() {
  const { t } = useTranslation()

  return (
    <div className="">
      {/* Page header title (no hero) */}
      <section className="mx-auto w-full  px-40 pt-40 pb-6  !bg-[#6f8a3c]">
        <h1 className="text-4xl md:text-5xl max-w-[32rem] font-semibold text-white">
          {t("terms.title")}
        </h1>
      </section>

      {/* Body */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-20 pb-16">
        <p className="font-bold text-[#2b2b2b] text-[16px]">
          {t("terms.subtitle")}
        </p>

        {/* 1 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            1. {t("terms.s1.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s1.p1")}</Li>
            <Li>
              {t("terms.s1.site")}{" "}
              <a href="https://maisondaouia.com" className="underline" target="_blank" rel="noreferrer">
                https://maisondaouia.com
              </a>{" "}
              {t("terms.s1.p2tail")}
            </Li>
          </ul>
        </div>

        {/* 2 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            2. {t("terms.s2.title")}
          </h2>
          <ul className="mt-2">
            <Li>{t("terms.s2.p1")}</Li>
          </ul>
        </div>

        {/* 3 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            3. {t("terms.s3.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s3.p1")}</Li>
            <Warning>{t("terms.s3.warn1")}</Warning>
          </ul>
        </div>

        {/* 4 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            4. {t("terms.s4.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s4.p1")}</Li>
            <Li>{t("terms.s4.p2")}</Li>
          </ul>
        </div>

        {/* 5 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            5. {t("terms.s5.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s5.p1")}</Li>
            <Li>{t("terms.s5.p2")}</Li>
            <Li>{t("terms.s5.p3")}</Li>
          </ul>
          <Warning>{t("terms.s5.warn1")}</Warning>
          <Warning>{t("terms.s5.warn2")}</Warning>
        </div>

        {/* 6 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            6. {t("terms.s6.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s6.p1")}</Li>
          </ul>
        </div>

        {/* 7 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            7. {t("terms.s7.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s7.b1")}</Li>
            <Li>{t("terms.s7.b2")}</Li>
            <Li>{t("terms.s7.b3")}</Li>
            <Li>{t("terms.s7.b4")}</Li>
          </ul>
          <Warning>{t("terms.s7.warn1")}</Warning>
        </div>

        {/* 8 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            8. {t("terms.s8.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s8.p1")}</Li>
          </ul>
        </div>

        {/* 9 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            9. {t("terms.s9.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s9.p1")}</Li>
          </ul>
        </div>

        {/* 10 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            10. {t("terms.s10.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s10.p1")}</Li>
          </ul>
        </div>

        {/* 11 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            11. {t("terms.s11.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s11.p1")}</Li>
          </ul>
        </div>

        {/* 12 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            12. {t("terms.s12.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s12.p1")}</Li>
          </ul>
        </div>

        {/* 13 */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-[#1f2b18]">
            13. {t("terms.s13.title")}
          </h2>
          <ul className="mt-2 space-y-1">
            <Li>{t("terms.s13.p1")}</Li>
          </ul>
        </div>
      </section>
    </div>
  )
}
