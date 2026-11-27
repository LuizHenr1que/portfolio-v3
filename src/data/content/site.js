export const links = {
  linkedin: "https://www.linkedin.com/in/luiz-henrique44/",
  github: "https://github.com/LuizHenr1que",
  email: "luiizhenrique97444@gmail.com",
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

export function resumeUrl() {
  return `${import.meta.env.BASE_URL}assets/CurriculoLuizHenrique.pdf`;
}

export const stack = [
  {
    label: { pt: "IA", en: "AI" },
    items: [
      "LangChain",
      "RAG",
      { pt: "Bots de IA", en: "AI bots" },
      "Python",
      "FastAPI",
      "Groq",
      "FAISS",
    ],
  },
  {
    label: { pt: "Produto", en: "Product" },
    items: ["React", "TypeScript", "React Native", "Node.js", "NestJS", "Laravel"],
  },
  {
    label: { pt: "Dados", en: "Data" },
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma", "Docker", "Socket.IO"],
  },
];
