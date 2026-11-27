import { useEffect, useState } from "react";
import { useI18n } from "../contexts/LanguageContext";
import { links } from "../data/content/site";

export default function Header() {
  const { lang, setLang, copy } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="font-serif text-2xl italic text-paper" onClick={close}>
          LH
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="principal">
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-mute hover:text-paper">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-line p-1 text-xs">
            <LangButton active={lang === "pt"} onClick={() => setLang("pt")}>
              PT
            </LangButton>
            <LangButton active={lang === "en"} onClick={() => setLang("en")}>
              EN
            </LangButton>
          </div>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-acid px-4 py-2 text-sm font-semibold text-ink sm:inline-flex"
          >
            {copy.linkedinCta}
          </a>
          <button
            type="button"
            className="text-sm text-paper md:hidden"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? copy.close : copy.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink px-5 py-6 md:hidden" aria-label="principal">
          <ul className="flex flex-col gap-4">
            {copy.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="font-serif text-3xl text-paper" onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-acid"
                onClick={close}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function LangButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-2.5 py-1 ${active ? "bg-paper text-ink" : "text-mute"}`}
    >
      {children}
    </button>
  );
}
