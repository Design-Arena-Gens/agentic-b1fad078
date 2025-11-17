export function CTASection() {
  return (
    <section className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-[36px] border border-amber-200/20 bg-gradient-to-br from-amber-600/10 via-red-600/10 to-transparent px-6 py-16 md:px-10">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full border border-amber-300/20 blur-2xl" />
        <div className="absolute right-0 top-[-30%] h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 text-center text-amber-50/80">
        <p className="text-sm uppercase tracking-[0.4em] text-amber-100/70">
          Invoke Divine Protection
        </p>
        <h2 className="max-w-4xl text-3xl font-display md:text-4xl">
          Step into the eternal flame of Vishnumaya. Reserve your sacred
          presence and embrace a life aligned with celestial guardianship.
        </h2>
        <p className="font-malayalam text-xl text-amber-100/90">
          ദൈവിക അനുഭവത്തിനായി ഇന്ന് തന്നെ രജിസ്റ്റർ ചെയ്യൂ
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/919400872574?text=Namaste%20Team%20Vadakkumpuram%2C%20I%20wish%20to%20book%20a%20divine%20pooja."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/60 bg-amber-500/20 px-6 py-3 text-sm font-semibold text-amber-200 transition duration-500 hover:bg-amber-500/30"
          >
            WhatsApp Temple Concierge
            <span aria-hidden>➝</span>
          </a>
          <a
            href="#book-pooja"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/30 bg-night-900/80 px-6 py-3 text-sm font-semibold text-amber-200 transition duration-500 hover:border-amber-300/60"
          >
            View Ritual Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
