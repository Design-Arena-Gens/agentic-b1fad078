type SectionHeadingProps = {
  label: string;
  title: string;
  malayalam?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  malayalam,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      } space-y-4`}
    >
      <p className="text-sm uppercase tracking-[0.45em] text-amber-300/70">
        {label}
      </p>
      {malayalam ? (
        <div className="space-y-1">
          <h2 className="font-malayalam text-3xl text-amber-100/90">
            {malayalam}
          </h2>
          <h3 className="text-3xl font-display font-semibold tracking-wide text-white md:text-4xl">
            {title}
          </h3>
        </div>
      ) : (
        <h2 className="text-3xl font-display font-semibold tracking-wide text-white md:text-4xl">
          {title}
        </h2>
      )}
      {description ? (
        <p className="text-lg text-amber-50/70">{description}</p>
      ) : null}
    </div>
  );
}
