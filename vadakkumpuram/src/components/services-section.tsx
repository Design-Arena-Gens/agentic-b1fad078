import { SectionHeading } from "@/components/section-heading";

const offerings = [
  {
    name: "Raksha Kavacham",
    malayalam: "രക്ഷാ കവചം",
    description:
      "A sacred shield ritual invoking Vishnumaya to guard against negative influences and obstacles.",
    timing: "Every Tuesday & Friday | 6:00 PM",
    contribution: "₹2,500",
  },
  {
    name: "Dhruma Deepa Seva",
    malayalam: "ധ്രുമ ദീപ സേവ",
    description:
      "An ancient fire-lamp offering accompanied by tantric chants for prosperity and harmony in households.",
    timing: "Daily | 5:30 AM & 7:30 PM",
    contribution: "₹1,200",
  },
  {
    name: "Chathan Sankalpa Homam",
    malayalam: "ചാത്തൻ സങ്കൽപ ഹോമം",
    description:
      "Powerful homam to fulfill earnest wishes, conducted under the guidance of the head priest.",
    timing: "Pre-booked | Auspicious Nights",
    contribution: "₹6,500",
  },
];

const concierge = [
  {
    title: "Personal Tantric Guidance",
    details:
      "Book a one-on-one consultation with the chief priest to decode dreams, omens, and life hurdles.",
  },
  {
    title: "Family Blessing Ceremonies",
    details:
      "Royal procession, traditional percussion, and protective blessings for the entire lineage.",
  },
  {
    title: "Virtual Darshan",
    details:
      "High-definition live stream with personalised mantra chanting and guided prayer experience.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="book-pooja"
      className="relative mx-auto mt-24 max-w-6xl space-y-14 px-6 md:px-8"
    >
      <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-red-500/10 via-transparent to-amber-500/10 blur-3xl" />
      <SectionHeading
        label="Sacred Services"
        malayalam="ദൈവിക സേവനങ്ങൾ"
        title="Premium Pooja Experiences & Concierge Rituals"
        description="Reserve signature rituals infused with the fierce grace of Kuttichathan. Each service is curated to immerse you in the temple’s royal mysticism."
        align="center"
      />

      <div className="relative grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {offerings.map((offering) => (
            <article
              key={offering.name}
              className="group card-border bg-night-800/60 p-7 transition duration-500 hover:bg-night-700/80"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-display text-amber-200">
                    {offering.name}
                  </h3>
                  <p className="font-malayalam text-lg text-amber-100/80">
                    {offering.malayalam}
                  </p>
                </div>
                <span className="rounded-full border border-amber-300/40 bg-amber-500/10 px-4 py-1 text-sm text-amber-200">
                  {offering.contribution}
                </span>
              </div>
              <p className="mt-4 text-base text-amber-100/70">
                {offering.description}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-amber-100/50">
                {offering.timing}
              </p>
            </article>
          ))}
        </div>

        <aside className="card-border flex flex-col gap-6 bg-gradient-to-br from-white/5 to-transparent p-8 text-amber-100/80">
          <h4 className="text-xl font-display text-amber-200">
            Luxury Ritual Concierge
          </h4>
          <p className="text-sm text-amber-100/70">
            Our temple concierge crafts a bespoke spiritual experience tailored
            to your family&apos;s lineage and intentions.
          </p>
          <div className="space-y-5 text-sm text-amber-100/70">
            {concierge.map((item) => (
              <div key={item.title} className="space-y-2">
                <p className="font-semibold text-amber-200">{item.title}</p>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
          <a
            href="tel:+919400872574"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/60 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-500/20"
          >
            Call Ritual Director
            <span aria-hidden>↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
