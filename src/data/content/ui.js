import agro from "../../assets/posts/agro.jpg";
import pagpeguePoster from "../../assets/posts/pagpegue.jpg";
import pagpegueVideo from "../../assets/posts/pagpegue.mp4";
import performance from "../../assets/posts/performance.jpg";
import produto from "../../assets/posts/produto.jpg";
import { links } from "./site";

export const ui = {
  meta: {
    title: {
      pt: "Luiz Henrique | Desenvolvedor Full Stack & Mobile",
      en: "Luiz Henrique | Full Stack & Mobile Developer",
    },
    description: {
      pt: "Desenvolvedor Full Stack & Mobile | React, TypeScript, React Native, Node.js/NestJS, PHP/Laravel | Sistemas de pagamento em produção | Redis, PostgreSQL/PostGIS, Kotlin/Android",
      en: "Full Stack & Mobile Developer | React, TypeScript, React Native, Node.js/NestJS, PHP/Laravel | Payment systems in production | Redis, PostgreSQL/PostGIS, Kotlin/Android",
    },
  },
  nav: [
    { href: "#cases", label: { pt: "Trabalho", en: "Work" } },
    { href: "#vertice", label: { pt: "Vértice", en: "Vértice" } },
    { href: "#numeros", label: { pt: "Números", en: "Numbers" } },
    { href: "#contato", label: { pt: "Contato", en: "Contact" } },
  ],
  hero: {
    eyebrow: {
      pt: "Desenvolvedor Full Stack & Mobile · Rio de Janeiro",
      en: "Full Stack & Mobile Developer · Rio de Janeiro",
    },
    title: { pt: "Eu construo sistemas e apps", en: "I build systems and apps" },
    titleEm: { pt: "que já estão em produção.", en: "that are already in production." },
    lede: {
      pt: "Desenvolvedor Full Stack & Mobile na Vértice Softwares (2023–atual). React, TypeScript, React Native, Node.js/NestJS, PHP/Laravel e Python. Entre os produtos em produção está a PagPegue, sistema de pagamento usado por 2 estabelecimentos, que já gerou mais de R$ 15.000 e foi elogiado pela velocidade.",
      en: "Full Stack & Mobile Developer at Vértice Softwares (2023–present). React, TypeScript, React Native, Node.js/NestJS, PHP/Laravel, and Python. Among the products in production is PagPegue, a payment system used by 2 establishments, which has already generated over R$ 15,000 and has been praised for its speed.",
    },
    primary: { pt: "Ver o trabalho", en: "See the work" },
    secondary: { pt: "Currículo", en: "Resume" },
    photoAlt: { pt: "Luiz Henrique", en: "Luiz Henrique" },
  },
  metrics: [
    {
      value: 40,
      suffix: "%",
      label: {
        pt: "mais performance no app (telemetria)",
        en: "faster app (telemetry project)",
      },
    },
    {
      value: 30,
      suffix: "%",
      label: {
        pt: "menos incidentes (telemetria)",
        en: "fewer incidents (telemetry project)",
      },
    },
    {
      value: 400,
      suffix: "+",
      label: { pt: "vendas por hora no pico (PagPegue)", en: "sales an hour at peak (PagPegue)" },
    },
  ],
  proof: {
    eyebrow: { pt: "Medido em produção", en: "Measured in production" },
    title: {
      pt: "O antes e o depois, sem arredondar para cima.",
      en: "The before and after, without rounding up.",
    },
    items: [
      {
        kicker: { pt: "API de histórico", en: "History API" },
        beforeLabel: { pt: "Antes", en: "Before" },
        before: { pt: "mais de 3 min", en: "over 3 min" },
        afterLabel: { pt: "Depois", en: "After" },
        after: "214 ms",
        text: {
          pt: "O endpoint de um histórico longo fazia consultas N+1 entre Redis e MySQL. Reescrevi a leitura, cortei ida e volta redundante e passei a usar o cache de propósito.",
          en: "A long-history endpoint ran N+1 queries between Redis and MySQL. I rebuilt the read path, cut redundant round-trips, and started using the cache on purpose.",
        },
      },
      {
        kicker: { pt: "App mobile", en: "Mobile app" },
        beforeLabel: { pt: "Antes", en: "Before" },
        before: { pt: "travava no volume", en: "stalled under load" },
        afterLabel: { pt: "Depois", en: "After" },
        after: "+40%",
        text: {
          pt: "O app parava quando o volume subia. Mudei o armazenamento local para Realm, refatorei o fluxo de dados e os crashes pararam.",
          en: "The app stalled as volume climbed. I moved local storage to Realm, refactored the data flow, and the crashes stopped.",
        },
      },
    ],
  },
  vertice: {
    eyebrow: { pt: "Vértice Softwares", en: "Vértice Softwares" },
    title: {
      pt: "Na Vértice Softwares eu desenho e entrego produtos web e mobile.",
      en: "At Vértice Softwares I design and deliver web and mobile products.",
    },
    lede: {
      pt: "Na Vértice Softwares eu desenho e entrego produtos web e mobile, do briefing ao que está no ar: CRM no WhatsApp, Condo360 nas lojas e a Academy, plataforma de ensino já usada por professores.",
      en: "At Vértice Softwares I design and deliver web and mobile products, from briefing to production: WhatsApp CRM, Condo360 in stores, and Academy, an educational platform already used by teachers.",
    },
    contactLabel: { pt: "Falar com a Vértice", en: "Talk to Vértice" },
    imageAlt: { pt: "Site da Vértice Softwares", en: "Vértice Softwares website" },
    products: [
      {
        name: "CRM Vértice",
        text: {
          pt: "WhatsApp com envio em massa, funil e IA. O tráfego chega e o time atende no mesmo lugar.",
          en: "WhatsApp with mass sending, a pipeline, and AI. Traffic arrives and the team replies in the same place.",
        },
      },
      {
        name: "Vértice Academy",
        href: "#academy",
        text: {
          pt: "Plataforma de ensino já usada por professores: questões, simulados, ranking e pagamento por Pix ou cartão.",
          en: "Educational platform already used by teachers: questions, mock exams, ranking, and payment by Pix or card.",
        },
      },
    ],
  },
  casesIntro: {
    eyebrow: { pt: "Cases", en: "Cases" },
    title: {
      pt: "Produto no ar, com a tela na frente.",
      en: "Live product, with the screen in front.",
    },
    open: { pt: "Abrir", en: "Open" },
    code: { pt: "Código", en: "Code" },
    demo: { pt: "Demo", en: "Demo" },
    ios: "App Store",
    android: "Play Store",
  },
  posts: {
    eyebrow: { pt: "LinkedIn", en: "LinkedIn" },
    title: {
      pt: "O que eu contei quando o sistema estava no ar.",
      en: "What I shared while the system was live.",
    },
    items: [
      {
        href: "https://pt.linkedin.com/posts/luiz-henrique44_backend-api-performance-activity-7463064721017991168-a0Xm",
        image: performance,
        tag: { pt: "Performance", en: "Performance" },
        quote: {
          pt: "O histórico de 14 horas saiu de mais de 3 minutos e chegou a cerca de 214 ms.",
          en: "Fourteen hours of history went from over 3 minutes to about 214 ms.",
        },
      },
      {
        href: "https://pt.linkedin.com/posts/luiz-henrique44_buildinginpublic-pagpegue-pdv-activity-7507508755861983233-6QrG",
        image: pagpeguePoster,
        video: pagpegueVideo,
        tag: "PagPegue",
        quote: {
          pt: "Dezenas de maquininhas no login, prontas para o pico da operação.",
          en: "Dozens of terminals on the login screen, ready for the rush.",
        },
      },
      {
        href: "https://pt.linkedin.com/posts/luiz-henrique44_pagpegue-techlead-saas-activity-7513357461097975808-i5H4",
        image: agro,
        tag: { pt: "Produção", en: "Production" },
        quote: {
          pt: "Do código direto para estoque, setores e venda em tempo real em produção.",
          en: "From the code straight into live stock, sections, and sales in production.",
        },
      },
      {
        href: "https://pt.linkedin.com/posts/luiz-henrique44_softwareengineering-techlead-fullstack-activity-7506155705775726592--KZo",
        image: produto,
        tag: { pt: "Produto", en: "Product" },
        quote: {
          pt: "A PagPegue saiu do zero para um ecossistema: painel, app de caixa e validação na entrada.",
          en: "PagPegue went from zero to an ecosystem: panel, cashier app, and door validation.",
        },
      },
    ],
  },
  experience: {
    eyebrow: { pt: "Trajetória", en: "Path" },
    title: { pt: "Onde o código foi para produção.", en: "Where the code shipped." },
    items: [
      {
        period: { pt: "2023 — Atual", en: "2023 — Present" },
        role: {
          pt: "Desenvolvedor Full Stack & Mobile",
          en: "Full Stack & Mobile Developer",
        },
        place: "Vértice Softwares",
        text: {
          pt: "Na Vértice Softwares eu desenho e entrego produtos web e mobile, do briefing ao que está no ar: CRM no WhatsApp, Condo360 nas lojas e a Academy, plataforma de ensino já usada por professores.",
          en: "At Vértice Softwares I design and deliver web and mobile products, from briefing to production: WhatsApp CRM, Condo360 in stores, and Academy, an educational platform already used by teachers.",
        },
      },
      {
        period: { pt: "Produto no ar", en: "Live product" },
        role: { pt: "Desenvolvedor Full Stack & Mobile", en: "Full Stack & Mobile Developer" },
        place: "PagPegue",
        text: {
          pt: "Sistema de pagamento para estabelecimentos (dashboard web, app de caixa, integração Stone e PagBank), usado por 2 estabelecimentos que já geraram mais de R$ 15.000 em vendas.",
          en: "Payment system for establishments (web dashboard, cashier app, Stone and PagBank integration), used by 2 establishments that have already generated over R$ 15,000 in sales.",
        },
      },
      {
        period: { pt: "Set 2024", en: "Sep 2024" },
        role: { pt: "Desenvolvedor de Sistemas", en: "Software Developer" },
        place: { pt: "Projeto de Telemetria", en: "Telemetry Project" },
        text: {
          pt: "Desenvolvimento e manutenção de aplicações web e mobile com foco em performance. Sistemas de telemetria em produção: API de histórico saiu de 3+ min para 214 ms, app 40% mais rápido.",
          en: "Development and maintenance of web and mobile applications focused on performance. Telemetry systems in production: history API went from 3+ min to 214 ms, app 40% faster.",
        },
      },
    ],
  },
  stackSection: {
    eyebrow: { pt: "Stack", en: "Stack" },
    title: {
      pt: "O que entra no sistema que vai para produção.",
      en: "What goes into a system that ships.",
    },
  },
  contact: {
    eyebrow: { pt: "Contato", en: "Contact" },
    title: {
      pt: "Aberto a novas oportunidades",
      en: "Open to new opportunities",
    },
    lede: {
      pt: "Aberto a full stack, front-end, back-end, mobile e engenharia de IA. Remoto ou híbrido no Rio de Janeiro.",
      en: "Open to full stack, front-end, back-end, mobile, and AI engineering. Remote or hybrid in Rio de Janeiro.",
    },
    linkedin: "LinkedIn",
    github: "GitHub",
    email: "Email",
    resume: { pt: "Currículo", en: "Resume" },
  },
  footer: {
    pt: "Luiz Henrique · Rio de Janeiro",
    en: "Luiz Henrique · Rio de Janeiro",
  },
  menu: { pt: "Menu", en: "Menu" },
  close: { pt: "Fechar", en: "Close" },
  linkedinCta: "LinkedIn",
};

export const external = links;
