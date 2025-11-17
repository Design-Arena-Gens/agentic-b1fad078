import { DivineMask } from "@/components/divine-mask";
import { FloatingParticles } from "@/components/floating-particles";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(237,191,76,0.25),_rgba(6,6,8,0.1)_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 blur-3xl">
        <div className="aura-gradient absolute left-1/2 top-16 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-60" />
      </div>
      <FloatingParticles />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="max-w-2xl space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-amber-200/80 shadow-ember-ring">
            Eternal Guardian
          </p>
          <h1 className="text-4xl font-display font-semibold leading-tight text-white md:text-6xl">
            Vadakkumpuram Vishnumaya{" "}
            <span className="text-glow text-amber-200">
              Kuttichathan Temple
            </span>
          </h1>
          <p className="font-malayalam text-2xl text-amber-100/90">
            വടക്കുമ്പുറം വിഷ്ണുമായ കുത്തിച്ചാത്തൻ ക്ഷേത്രം
          </p>
          <p className="text-lg text-amber-50/70 md:text-xl">
            Within these sacred grounds, the divine energy of Vishnumaya
            manifests with regal splendor – granting protection, unbound
            miracles, and spiritual awakening for every devotee who seeks
            refuge.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#book-pooja"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-500/80 to-red-500/80 px-6 py-3 text-base font-semibold text-night-900 shadow-aura-glow transition duration-500 hover:from-amber-400 hover:to-red-400"
            >
              Book Divine Pooja
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                ✨
              </span>
            </a>
            <a
              href="#darshan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-amber-100/90 transition hover:border-amber-400/40 hover:text-amber-200"
            >
              Explore Miracles
            </a>
          </div>
          <div className="grid grid-cols-3 gap-6 text-sm text-amber-100/70">
            {[
              { value: "300+", label: "Years of Worship" },
              { value: "108", label: "Sacred Offerings" },
              { value: "24/7", label: "Divine Protection" },
            ].map((item) => (
              <div key={item.value}>
                <p className="text-2xl font-display text-amber-200">
                  {item.value}
                </p>
                <p className="text-amber-50/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative translate-y-0 opacity-100 transition duration-1000"
        >
          <div className="absolute -left-16 top-12 hidden h-16 w-16 rotate-12 rounded-full border border-amber-300/30 blur-md md:block" />
          <DivineMask />
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-amber-300/30 bg-night-700/60 px-6 py-2 text-xs uppercase tracking-[0.35em] text-amber-200/70 backdrop-blur-mystic">
            <span className="h-2 w-2 rounded-full bg-amber-300 shadow-aura-glow" />
            Sacred energy active
          </div>
        </div>
      </div>
    </section>
  );
}
