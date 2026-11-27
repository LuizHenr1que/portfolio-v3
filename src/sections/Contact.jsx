import { Eyebrow, Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../contexts/LanguageContext";
import { links, resumeUrl } from "../data/content/site";

export function Contact() {
  const { copy, lang } = useI18n();
  const { contact } = copy;

  const actions = [
    { label: contact.linkedin, href: links.linkedin },
    { label: contact.github, href: links.github },
    { label: contact.email, href: `mailto:${links.email}` },
    { label: contact.resume, href: resumeUrl(lang) },
  ];

  return (
    <Section id="contato" className="border-t border-line">
      <Reveal>
        <Eyebrow>{contact.eyebrow}</Eyebrow>
        <h2 className="max-w-3xl font-serif text-5xl leading-tight text-paper sm:text-6xl">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-mute">{contact.lede}</p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {actions.map((action) => (
            <li key={action.label}>
              <a
                href={action.href}
                target={action.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="inline-flex rounded-full border border-line px-5 py-3 text-sm text-paper hover:border-acid hover:text-acid"
              >
                {action.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="mt-20 text-sm text-mute">{copy.footer}</p>
    </Section>
  );
}
