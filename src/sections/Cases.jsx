import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow, Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../contexts/LanguageContext";

export function Cases() {
  const { copy } = useI18n();
  const { casesIntro, cases } = copy;
  const featured = cases.find((item) => item.featured);
  const rest = cases.filter((item) => !item.featured);

  return (
    <Section id="cases" className="border-t border-line">
      <Reveal>
        <Eyebrow>{casesIntro.eyebrow}</Eyebrow>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-paper sm:text-5xl">
          {casesIntro.title}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5">
        {featured && <CaseCard item={featured} labels={casesIntro} large />}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((item) => (
            <CaseCard key={item.id} item={item} labels={casesIntro} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function CaseCard({ item, labels, large = false }) {
  const reduce = useReducedMotion();
  const shots = item.images?.length ? item.images : item.image ? [{ src: item.image }] : [];

  return (
    <Reveal>
      <article id={item.id} className="group scroll-mt-28 overflow-hidden rounded-3xl border border-line bg-panel">
        {shots.length > 1 ? (
          <div className="grid grid-cols-2 gap-px bg-line">
            {shots.map((shot) => (
              <figure key={shot.label || shot.src} className="bg-ink">
                <img src={shot.src} alt={shot.label || item.title} className="h-52 w-full object-cover object-top sm:h-64" />
                {shot.label && <figcaption className="px-3 py-2 text-xs text-mute">{shot.label}</figcaption>}
              </figure>
            ))}
          </div>
        ) : shots.length === 1 ? (
          <div className={`overflow-hidden bg-ink ${large ? "max-h-[32rem]" : "max-h-72"}`}>
            <motion.img
              src={shots[0].src}
              alt={item.title}
              className="h-full w-full object-cover object-top"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              transition={{ duration: 0.45 }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-px bg-line">
            {item.stats?.map((stat) => (
              <Metric key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        )}

        <div className="p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-acid">{item.role}</p>
          <h3 className="mt-2 font-serif text-3xl text-paper">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-mute">{item.summary}</p>
          <p className="mt-4 text-sm text-paper">{item.result}</p>
          {item.note && <p className="mt-3 text-xs text-mute">{item.note}</p>}
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-line px-3 py-1 text-xs text-mute">
                {tech}
              </li>
            ))}
          </ul>
          {(item.href || item.repo || item.demo || item.ios || item.android) && (
            <div className="mt-5 flex flex-wrap gap-4">
              {item.href && (
                <a href={item.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-acid">
                  {labels.open}
                </a>
              )}
              {item.ios && (
                <a href={item.ios} target="_blank" rel="noreferrer" className="text-sm font-semibold text-acid">
                  {labels.ios}
                </a>
              )}
              {item.android && (
                <a href={item.android} target="_blank" rel="noreferrer" className="text-sm font-semibold text-acid">
                  {labels.android}
                </a>
              )}
              {item.repo && (
                <a href={item.repo} target="_blank" rel="noreferrer" className="text-sm font-semibold text-acid">
                  {labels.code}
                </a>
              )}
              {item.demo && (
                <a href={item.demo} target="_blank" rel="noreferrer" className="text-sm font-semibold text-acid">
                  {labels.demo}
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function Metric({ value, label }) {
  return (
    <div className="bg-ink px-5 py-8">
      <p className="font-serif text-4xl text-acid">{value}</p>
      <p className="mt-2 line-clamp-3 text-xs text-mute">{label}</p>
    </div>
  );
}
