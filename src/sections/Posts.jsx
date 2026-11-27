import { Eyebrow, Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { useI18n } from "../contexts/LanguageContext";

export function Posts() {
  const { copy } = useI18n();
  const { posts } = copy;

  return (
    <Section className="border-t border-line">
      <Reveal>
        <Eyebrow>{posts.eyebrow}</Eyebrow>
        <h2 className="max-w-2xl font-serif text-4xl leading-tight text-paper sm:text-5xl">
          {posts.title}
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {posts.items.map((post) => (
          <li key={post.href}>
            <Reveal>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel hover:border-acid/50">
                <PostMedia post={post} />
                <a href={post.href} target="_blank" rel="noreferrer" className="block flex-1 p-6">
                  <span className="text-xs uppercase tracking-[0.16em] text-acid">{post.tag}</span>
                  <p className="mt-4 font-serif text-2xl leading-snug text-paper">“{post.quote}”</p>
                </a>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function PostMedia({ post }) {
  if (post.video) {
    return (
      <video
        src={post.video}
        poster={post.image}
        controls
        playsInline
        preload="metadata"
        aria-label={post.quote}
        className="max-h-[28rem] w-full bg-ink object-contain"
      />
    );
  }

  return (
    <a href={post.href} target="_blank" rel="noreferrer" className="block bg-ink">
      <img src={post.image} alt={post.quote} className="max-h-[28rem] w-full object-contain" />
    </a>
  );
}
