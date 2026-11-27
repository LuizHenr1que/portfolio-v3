export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 ${className}`}>
      <div className="mx-auto max-w-page">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-acid">
      {children}
    </p>
  );
}
