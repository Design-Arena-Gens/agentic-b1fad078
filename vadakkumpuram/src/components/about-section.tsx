import { SectionHeading } from "@/components/section-heading";

const highlights = [
  {
    title: "Temple Legacy",
    detail:
      "A guardian shrine established by the ancestral chieftains of Vadakkumpuram, blessed by the seers of Malabar.",
  },
  {
    title: "Divine Manifestation",
    detail:
      "The mystic presence of Vishnumaya Kuttichathan is felt through the sacred fire lamps that never fade.",
  },
  {
    title: "Protective Aura",
    detail:
      "Devotees witness shields of blessings, prosperity, and liberation from hindrances through dedicated rituals.",
  },
];

const timeline = [
  {
    year: "1702",
    event: "Sacred revelation of Vishnumaya in the Vadakkumpuram forests.",
  },
  {
    year: "1825",
    event: "Consecration of the legendary Kuttichathan divine mask.",
  },
  {
    year: "1956",
    event: "Renovation guided by tantric scholars, enhancing the royal sanctum.",
  },
  {
    year: "Present",
    event: "Temple opens global pilgrim access with guided pooja services.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto mt-12 max-w-6xl space-y-12 rounded-[32px] border border-white/10 bg-night-800/60 px-6 py-16 shadow-aura-glow backdrop-blur-lg md:px-12"
    >
      <div className="absolute -top-10 left-12 hidden h-20 w-20 rounded-full border border-amber-300/40 opacity-60 blur-lg md:block" />
      <SectionHeading
        label="Temple Essence"
        malayalam="ക്ഷേത്ര ചരിത്രം"
        title="Legends Woven in Divine Fire"
        description="For centuries, Vadakkumpuram Vishnumaya Kuttichathan Temple has manifested miracles that protect families, guide seekers, and dissolve the darkest obstacles."
      />

      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-8">
          <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-white/5 via-white/10 to-white/0 p-8 text-amber-50/80">
            <p className="text-lg leading-relaxed">
              The temple stands as a beacon of resilience and royal strength on
              the shores of Vadakkumpuram. The deity&apos;s presence is felt
              through the sacred drumbeats and blazing theevra deepams that
              surround the sanctum, amplifying the essence of Vishnumaya&apos;s
              transformative powers. Devotees travel from across Kerala to
              surrender their worries to the guardian energy that pulsates here.
            </p>
            <p className="mt-4 text-base text-amber-100/70">
              Every ritual performed within these walls intertwines the ancient
              tantric practices of the Theyyam tradition with modern spiritual
              guidance, ensuring that each soul receives personalised blessings.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="card-border bg-night-900/60 p-6 text-amber-100/80"
              >
                <div className="flex h-full flex-col gap-3">
                  <h4 className="text-lg font-semibold text-amber-200">
                    {item.title}
                  </h4>
                  <p className="text-sm text-amber-100/70">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-amber-300/20 bg-white/5 p-6 text-amber-100/80">
          <h4 className="font-display text-lg text-amber-200">
            Sacred Chronology
          </h4>
          <div className="space-y-5">
            {timeline.map((entry) => (
              <div key={entry.year} className="relative pl-5">
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-amber-300 shadow-ember-ring" />
                <p className="text-sm uppercase tracking-[0.3em] text-amber-100/60">
                  {entry.year}
                </p>
                <p className="text-base text-amber-100/80">{entry.event}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-300/10 bg-night-900/70 p-5 text-sm text-amber-100/70">
            <p>
              Legend states that the guardian spirit appears as a luminous child
              during midnight poojas, blessing devotees with instant answers and
              unwavering protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
