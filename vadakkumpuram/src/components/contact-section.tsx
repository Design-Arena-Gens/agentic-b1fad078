export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-24 max-w-6xl overflow-hidden rounded-[36px] border border-amber-200/15 bg-night-900/70 px-6 py-16 shadow-aura-glow md:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(237,191,76,0.18),_transparent_55%)] opacity-80" />
      <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6 text-amber-100/80">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-100/60">
            Visit the Shrine
          </p>
          <h2 className="text-3xl font-display text-amber-200">
            Vadakkumpuram Vishnumaya Kuttichathan Temple
          </h2>
          <p className="font-malayalam text-xl text-amber-100/80">
            വടക്കുമ്പുറം, നാലുമ്മൂട്ടിൽ, എറണാകുളം, കേരളം
          </p>
          <p className="text-sm text-amber-100/70">
            Temple hours: 4:30 AM – 8:30 PM | Spiritual concierge available 24/7
          </p>

          <div className="grid gap-4 text-sm">
            <a
              href="tel:+919400872574"
              className="rounded-2xl border border-amber-300/30 bg-amber-500/10 px-4 py-3 text-amber-200 transition hover:bg-amber-500/20"
            >
              +91 94008 72574 (Temple Office)
            </a>
            <a
              href="mailto:blessings@vadakkumpuram.in"
              className="rounded-2xl border border-amber-300/30 bg-transparent px-4 py-3 text-amber-200 transition hover:border-amber-300/60"
            >
              blessings@vadakkumpuram.in
            </a>
          </div>

          <div className="rounded-2xl border border-amber-200/20 bg-night-800/80 p-5 text-sm text-amber-100/70">
            <p>
              Premium devotees may request chauffeured temple transfers, curated
              stays, and private darshan chambers through the concierge line.
            </p>
          </div>
        </div>

        <div className="card-border overflow-hidden bg-night-800/80">
          <iframe
            title="Vadakkumpuram Temple Location"
            className="h-full w-full min-h-[320px]"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.189260786793!2d76.22651307605193!3d10.219547489884647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e4b5dac82747%3A0x3ffd31553378eaef!2sVadakkumpuram%20Vishnumaya%20Temple!5e0!3m2!1sen!2sin!4v1731863200001!5m2!1sen!2sin"
          />
        </div>
      </div>
    </section>
  );
}
