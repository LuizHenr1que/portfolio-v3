export const links = {
  linkedin: "https://www.linkedin.com/in/luizhenr1que/",
  github: "https://github.com/LuizHenr1que",
  email: "luizhenriquejob4@gmail.com",
  pagpegue: "https://pagpegue.com.br/",
  cohle: "https://cohle.vercel.app/",
  cohleRepo: "https://github.com/LuizHenr1que/cohle",
  vertice: "https://verticeapp.com.br/#contato",
  academy: "https://verticeacademy.verticeapp.com.br/",
  academyDemo: "https://verticeacademy.verticeapp.com.br/#/demo",
  condo: "https://www.condo360.app.br/",
  condoIos: "https://apps.apple.com/br/app/condo360/id6784867589",
  condoAndroid: "https://play.google.com/store/apps/details?id=app.condo360.br",
};

export function resumeUrl(lang = 'pt') {
  const fileName = lang === 'en' 
    ? 'Resume_Luiz_Henrique_EN_v3.pdf'
    : 'Curriculo_Luiz_Henrique_v3.pdf';
  return `${import.meta.env.BASE_URL}assets/${fileName}`;
}

export const stack = [
  {
    label: { pt: "Frontend", en: "Frontend" },
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: { pt: "Mobile", en: "Mobile" },
    items: ["React Native", "Expo", { pt: "Kotlin/Android", en: "Kotlin/Android" }],
  },
  {
    label: { pt: "Backend", en: "Backend" },
    items: ["Node.js", "NestJS", "PHP", "Laravel", "Python", "Django", "FastAPI", "Prisma", "Socket.IO", "WebSockets", "Supabase"],
  },
  {
    label: { pt: "Bancos de Dados", en: "Databases" },
    items: ["PostgreSQL", "PostGIS", "Redis", "MySQL", "MongoDB", "SQLite", "Realm"],
  },
  {
    label: { pt: "Ferramentas/IA", en: "Tools/AI" },
    items: ["Docker", "Git", "Figma", "Stone SDK", "LangChain", "LangGraph", "n8n"],
  },
];
