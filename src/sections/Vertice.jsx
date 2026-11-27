import shot from "../assets/cases/vertice.jpg";
import { Eyebrow, Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../contexts/LanguageContext";
import { links } from "../data/content/site";

export function Vertice() {
  const { copy } = useI18n();
  const { vertice } = copy;

  return (
    <Section id="vertice" className="border-t border-line">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Eyebrow>{vertice.eyebrow}</Eyebrow>
          <h2 className="max-w-xl font-serif text-4xl leading-tight text-paper sm:text-5xl">
            {vertice.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{vertice.lede}</p>
          <a
            href={links.vertice}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-acid px-5 py-3 text-sm font-semibold text-ink"
          >
            {vertice.contactLabel}
          </a>
        </Reveal>
        <Reveal delay={0.08}>
          <a href={links.vertice} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-3xl border border-line">
            <img src={shot} alt={vertice.imageAlt} className="h-full max-h-[28rem] w-full object-cover object-top" />
          </a>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {vertice.products.map((product) => (
          <Reveal key={product.name}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProductCard({ product }) {
  const className = "block h-full rounded-3xl border border-line p-6";
  const body = (
    <>
      <h3 className="font-serif text-2xl text-paper">{product.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mute">{product.text}</p>
    </>
  );

  if (!product.href) {
    return <div className={className}>{body}</div>;
  }

  return (
    <a href={product.href} className={`${className} hover:border-acid/50`}>
      {body}
    </a>
  );
}
