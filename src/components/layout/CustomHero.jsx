
export default function CustomHero({ bgImage, subtitle, title}) {

  return (
    <section
      className="relative flex  md:h-screen"
      style={{
        backgroundImage: `url('/images/${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "86vh"
      }}
    >
      {/* dark overlay like builder */}
      <div className="absolute inset-0 bg-black/25" />

      {/* LEFT-ALIGNED COPY with big spacing */}
      <div className="relative pt-60 z-10 mx-auto w-full max-w-6xl px-4 pb-14">
        <div className="max-w-2xl">
          <h1 className="text-white leading-tight font-semibold text-[36px] md:text-[66px]">
            {title}
          </h1>
          <p className="mt-3 text-white/90 text-base md:text-lg max-w-xl">
            {subtitle}
          </p>
        </div>
      </div> 

      {/* compensate fixed header space so text sits lower like the screenshot */}
      <div className="absolute top-0 h-14 w-full" aria-hidden />
    </section>
  )
}
