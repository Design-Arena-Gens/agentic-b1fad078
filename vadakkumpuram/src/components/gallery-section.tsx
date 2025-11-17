const galleryItems = [
  {
    title: "Torch-Lit Sanctum",
    subtitle: "നിത്യദീപം",
    description:
      "Perpetual lamps casting golden halos across the ornate granite sanctum during Rathri Aarthi.",
  },
  {
    title: "Mystic Theyyam Procession",
    subtitle: "തെയ്യം ആഘോഷം",
    description:
      "Warrior chants and vibrant garments swirling in reverence to the guardian spirit.",
  },
  {
    title: "Royal Ritual Lounge",
    subtitle: "ആശീർവാദ മണ്ഡപം",
    description:
      "Immersive experience with incense fountains, sandalwood mist, and mantra resonance pods.",
  },
  {
    title: "Sacred Banyan Courtyard",
    subtitle: "ആല്തറം",
    description:
      "Devotees tie crimson threads seeking Vishnumaya’s blessings for protection and prosperity.",
  },
];

export function GallerySection() {
  return (
    <section className="relative mx-auto mt-24 max-w-6xl space-y-12 px-6 md:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {galleryItems.map((item, index) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[30px] border border-amber-200/15 bg-night-900/65 shadow-ember-ring"
          >
            <div
              className={`absolute inset-0 opacity-60 transition duration-700 group-hover:opacity-80 ${
                index % 2 === 0 ? "from-amber-500/20" : "from-red-500/25"
              } bg-gradient-to-br to-transparent`}
            />
            <div className="absolute inset-0 mix-blend-screen opacity-30">
              <div className="aura-gradient h-full w-full scale-110 blur-[60px]" />
            </div>
            <div className="relative z-10 space-y-4 p-8">
              <div className="flex items-center justify-between">
                <p className="font-malayalam text-xl text-amber-100/90">
                  {item.subtitle}
                </p>
                <span className="rounded-full border border-amber-300/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-100/60">
                  PREMIUM
                </span>
              </div>
              <h3 className="text-2xl font-display text-amber-200">
                {item.title}
              </h3>
              <p className="text-sm text-amber-50/70">{item.description}</p>
            </div>
            <div className="absolute bottom-6 right-6 text-4xl text-amber-200/40 transition duration-700 group-hover:text-amber-200/70">
              ✶
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
