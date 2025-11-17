import { SectionHeading } from "@/components/section-heading";

const schedule = [
  {
    title: "Prabhatha Darshanam",
    time: "4:45 AM – 6:30 AM",
    focus:
      "Witness the awakening of the deity accompanied by chenda melam and oil lamp ablution.",
  },
  {
    title: "Madhyahnna Abhishekam",
    time: "12:00 PM – 1:00 PM",
    focus:
      "Granite sanctum shimmering under sandalwood paste, turmeric, and perfumed oils.",
  },
  {
    title: "Rathri Aarthi",
    time: "7:00 PM – 8:30 PM",
    focus:
      "Torch-lit procession with Theyyam hymns invoking fierce protection through the night.",
  },
];

const guidance = [
  "Arrive 20 minutes before your slot for personalized briefings.",
  "Dress in traditional attire; silk and kasavu garments recommended.",
  "Devotees may submit written sankalpas at the darshan desk.",
  "Photography within the sanctum is restricted to temple-approved crew.",
];

export function DarshanSection() {
  return (
    <section
      id="darshan"
      className="relative mx-auto mt-24 max-w-6xl space-y-12 rounded-[32px] border border-white/10 bg-night-900/70 px-6 py-16 backdrop-blur-lg md:px-10"
    >
      <SectionHeading
        label="Divine Schedule"
        malayalam="ദർശന സമയങ്ങൾ"
        title="Darshan Timings & Sacred Protocol"
        description="Immerse yourself in the temple’s luminous aura throughout the day. Respectful adherence to the rituals amplifies the grace you receive."
      />

      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-6">
          {schedule.map((slot) => (
            <div
              key={slot.title}
              className="card-border flex flex-col gap-3 bg-gradient-to-br from-amber-500/10 via-transparent to-red-500/10 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-display text-amber-200">
                    {slot.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-100/60">
                    {slot.time}
                  </p>
                </div>
                <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-100/70">
                  SEVA
                </span>
              </div>
              <p className="text-base text-amber-50/70">{slot.focus}</p>
            </div>
          ))}
        </div>

        <aside className="card-border flex flex-col gap-6 bg-white/5 p-6 text-amber-100/80">
          <h4 className="text-lg font-display text-amber-200">
            Royal Darshan Etiquette
          </h4>
          <ul className="space-y-4 text-sm text-amber-100/70">
            {guidance.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-amber-300 shadow-aura-glow" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-amber-200/20 bg-night-800/70 p-5 text-sm text-amber-100/70">
            <p>
              Premium darshan lounges with herbal refreshments and mantra audio
              immersion are available for patrons with prior bookings.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
