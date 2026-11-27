import { Eyebrow, Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../contexts/LanguageContext";

export function Experience() {
  const { copy } = useI18n();
  const { experience } = copy;

  return (
    <Section className="border-t border-line">
      <Reveal>
        <Eyebrow>{experience.eyebrow}</Eyebrow>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-paper sm:text-5xl">
          {experience.title}
        </h2>
      </Reveal>
      <ol className="mt-12 divide-y divide-line border-y border-line">
        {experience.items.map((item) => (
          <li key={item.place} className="grid gap-3 py-8 md:grid-cols-[180px_1fr_1.2fr] md:items-baseline">
            <p className="text-sm text-mute">{item.period}</p>
            <div>
              <h3 className="font-serif text-2xl text-paper">{item.place}</h3>
              <p className="text-sm text-acid">{item.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-mute">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
