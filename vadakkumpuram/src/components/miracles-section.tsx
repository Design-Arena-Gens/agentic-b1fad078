import { SectionHeading } from "@/components/section-heading";

const experiences = [
  {
    devotee: "Ananya Pillai",
    location: "Dubai, UAE",
    testimony:
      "After the Chathan Sankalpa Homam, our business turned around within weeks. The guidance from the oracle was exact – we still feel the protective aura around our home.",
  },
  {
    devotee: "Colonel Madhavan",
    location: "Palakkad, Kerala",
    testimony:
      "The Raksha Kavacham brought peace to our ancestral house. Nightmares faded and the temple's lamp continues to glow at our altar every evening.",
  },
  {
    devotee: "Priya & Arjun",
    location: "Bengaluru, Karnataka",
    testimony:
      "We booked the virtual darshan during an overseas assignment. The personal mantra chanting and fire lamp ritual felt as though we were right inside the sanctum.",
  },
];

const experiencesStats = [
  { label: "Devotees Guided", value: "52K+" },
  { label: "Miracle Testimonies", value: "18K+" },
  { label: "Global Countries Reached", value: "32" },
];

export function MiraclesSection() {
  return (
    <section className="relative mx-auto mt-24 max-w-6xl space-y-14 px-6 md:px-8">
      <div className="absolute inset-0 -z-10 rounded-[42px] bg-gradient-to-r from-amber-500/10 via-transparent to-red-500/10 blur-3xl" />

      <SectionHeading
        label="Living Miracles"
        malayalam="അദ്ഭുത സാക്ഷ്യങ്ങൾ"
        title="Witness the Blessings of Vishnumaya"
        description="Every whispered prayer carries a story of transformation. Devotees across the globe share their luminous encounters."
        align="center"
      />

      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="card-border flex flex-col gap-6 bg-night-900/60 p-8 text-amber-100/80">
          <h4 className="text-xl font-display text-amber-200">Divine Impact</h4>
          <p className="text-sm text-amber-100/70">
            The Kuttichathan oracle conducts bespoke readings every full moon,
            decoding energies that shape destinies. Families experience
            generational healing and prosperity realignments.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {experiencesStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-amber-300/20 bg-amber-500/5 p-4">
                <p className="text-2xl font-display text-amber-200">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-100/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-amber-200/20 bg-night-800/80 p-5 text-sm text-amber-100/70">
            <p>
              Submit your experience at the divine chronicle desk. Selected
              stories are illuminated during the Rathri Aarthi procession.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {experiences.map((story) => (
            <figure
              key={story.devotee}
              className="card-border bg-gradient-to-br from-white/5 via-amber-500/5 to-transparent p-6 text-amber-50/80"
            >
              <blockquote className="text-base leading-relaxed text-amber-50/75">
                “{story.testimony}”
              </blockquote>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-sm text-amber-100/60">
                <div>
                  <p className="font-semibold text-amber-200">
                    {story.devotee}
                  </p>
                  <p>{story.location}</p>
                </div>
                <span className="rounded-full border border-amber-300/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-100/60">
                  BLESSED
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
