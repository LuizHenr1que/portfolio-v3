import { Eyebrow, Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../contexts/LanguageContext";

export function Proof() {
  const { copy } = useI18n();
  const { proof } = copy;

  return (
    <Section id="numeros">
      <Reveal>
        <Eyebrow>{proof.eyebrow}</Eyebrow>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-paper sm:text-5xl">
          {proof.title}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {proof.items.map((item) => (
          <Reveal key={item.kicker}>
            <article className="h-full rounded-3xl border border-line bg-panel p-6 sm:p-8">
              <p className="text-sm text-acid">{item.kicker}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <p>
                  <span className="block text-xs uppercase tracking-[0.16em] text-mute">
                    {item.beforeLabel}
                  </span>
                  <span className="mt-2 block font-serif text-3xl text-paper/70 line-through decoration-acid/70">
                    {item.before}
                  </span>
                </p>
                <p>
                  <span className="block text-xs uppercase tracking-[0.16em] text-mute">
                    {item.afterLabel}
                  </span>
                  <span className="mt-2 block font-serif text-3xl text-acid">{item.after}</span>
                </p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-mute">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
