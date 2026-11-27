import { Eyebrow, Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../contexts/LanguageContext";

export function Stack() {
  const { copy } = useI18n();

  return (
    <Section className="border-t border-line">
      <Reveal>
        <Eyebrow>{copy.stackSection.eyebrow}</Eyebrow>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-paper sm:text-5xl">
          {copy.stackSection.title}
        </h2>
        <div className="mt-10 grid gap-8">
          {copy.stack.map((group) => (
            <div key={group.label}>
              <p className="text-xs uppercase tracking-[0.16em] text-acid">{group.label}</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-line px-4 py-2 text-sm text-paper">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
