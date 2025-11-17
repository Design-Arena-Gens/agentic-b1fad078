export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-night-900/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-amber-100/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-display text-amber-200">
            Vadakkumpuram Vishnumaya Kuttichathan Temple
          </p>
          <p className="font-malayalam text-amber-100/80">
            വിശ്വാസത്തിന്റെയും ദൈവിക ശക്തിയുടെയും അഭയകേന്ദ്രം
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="transition hover:text-amber-200"
          >
            About
          </a>
          <a
            href="#book-pooja"
            className="transition hover:text-amber-200"
          >
            Pooja Booking
          </a>
          <a
            href="#darshan"
            className="transition hover:text-amber-200"
          >
            Darshan
          </a>
          <a
            href="#contact"
            className="transition hover:text-amber-200"
          >
            Contact
          </a>
        </div>
        <p className="text-xs text-amber-100/40">
          © {new Date().getFullYear()} Vadakkumpuram Devasthanam. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
