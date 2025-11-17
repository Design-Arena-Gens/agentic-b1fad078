export function DivineMask() {
  return (
    <div className="relative flex h-[420px] w-[320px] items-center justify-center">
      <div className="mask-spotlight aura-gradient animate-drift absolute inset-0 rounded-[38%] opacity-60 blur-[18px]" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center rounded-[38%] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-transparent p-8 shadow-aura-glow">
        <div className="absolute inset-[6%] rounded-[34%] border border-amber-200/40" />
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 text-center">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-amber-200/90 via-orange-400/80 to-amber-600/80 shadow-ember-ring" />
          <div className="space-y-2">
            <p className="font-malayalam text-xl text-amber-100/90">
              വിഷ്ണുമായൻ
            </p>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
              Sacred Protector
            </p>
          </div>
          <div className="w-28 border-b border-dashed border-amber-200/40" />
          <p className="text-sm text-amber-100/70 max-w-xs">
            The mystic form of Kuttichathan radiating divine guardianship and
            blessings for every devotee who seeks guidance.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 rotate-12 rounded-[38%] border border-amber-500/20 blur-xl" />
      <div className="absolute inset-0 -z-20 animate-pulse-slow rounded-[38%] bg-gradient-to-t from-amber-500/20 via-transparent to-red-500/20" />
    </div>
  );
}
