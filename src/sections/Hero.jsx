import { motion, useReducedMotion } from "framer-motion";
import portrait from "../assets/imagens/luizhenrique.png";
import { CountUp } from "../ui/CountUp";
import { useI18n } from "../contexts/LanguageContext";
import { resumeUrl } from "../data/content/site";

export function Hero() {
  const { copy, lang } = useI18n();
  const reduce = useReducedMotion();
  const { hero, metrics } = copy;

  return (
    <section id="topo" className="relative overflow-hidden px-5 pb-8 pt-28 sm:px-8">
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-acid/10 blur-3xl" />
      <div className="mx-auto grid max-w-page items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-acid">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] text-paper sm:text-7xl">
            {hero.title} <span className="italic text-acid">{hero.titleEm}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">{hero.lede}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cases" className="rounded-full bg-acid px-5 py-3 text-sm font-semibold text-ink">
              {hero.primary}
            </a>
            <a
              href={resumeUrl(lang)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-3 text-sm text-paper"
            >
              {hero.secondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[420px] w-full max-w-[340px]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-x-6 top-10 h-56 rounded-full bg-acid/20 blur-3xl" />
          <motion.img
            src={portrait}
            alt={hero.photoAlt}
            className="relative h-full w-full object-contain object-top"
            style={{
              maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
            }}
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <dl className="mx-auto mt-10 grid max-w-page grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
        {metrics.map((item) => (
          <div key={item.label} className="bg-ink px-5 py-6">
            <dt className="font-serif text-4xl text-paper sm:text-5xl">
              <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
            </dt>
            <dd className="mt-2 text-sm leading-snug text-mute">{item.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
