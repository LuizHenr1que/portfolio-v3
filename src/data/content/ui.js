import agro from "../../assets/posts/agro.jpg";
import evento from "../../assets/posts/evento.jpg";
import pagpeguePoster from "../../assets/posts/pagpegue.jpg";
import pagpegueVideo from "../../assets/posts/pagpegue.mp4";
import performance from "../../assets/posts/performance.jpg";
import produto from "../../assets/posts/produto.jpg";
import { links } from "./site";

export const ui = {
  meta: {
    title: {
      pt: "Luiz Henrique · Full stack",
      en: "Luiz Henrique · Full stack",
    },
    description: {
      pt: "Fundador da PagPegue e criador da Vértice Softwares. PDV, Condo360, CRM, Academy e a operação do Grupo Itajobi.",
      en: "Founder of PagPegue and creator of Vértice Softwares. POS, Condo360, CRM, Academy, and Grupo Itajobi operations.",
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
      pt: "Full stack · Rio de Janeiro",
      en: "Full stack · Rio de Janeiro",
    },
    title: { pt: "Eu entrego o sistema", en: "I ship the system" },
    titleEm: { pt: "e fico no pico.", en: "and stay for the rush." },
    lede: {
      pt: "Fundador da PagPegue e criador da Vértice Softwares. No ar: PDV em Stone e PagBank, Condo360, CRM, Academy e a operação do Grupo Itajobi.",
      en: "Founder of PagPegue and creator of Vértice Softwares. Live: POS on Stone and PagBank, Condo360, CRM, Academy, and Grupo Itajobi operations.",
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
        pt: "mais performance na telemetria",
        en: "faster telemetry app",
      },
    },
    {
      value: 30,
      suffix: "%",
      label: {
        pt: "menos incidentes em produção",
        en: "fewer production incidents",
      },
    },
    {
      value: 400,
      suffix: "+",
      label: { pt: "vendas por hora no pico", en: "sales an hour at peak" },
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
        kicker: { pt: "API de timeline", en: "Timeline API" },
        beforeLabel: { pt: "Antes", en: "Before" },
        before: { pt: "mais de 3 min", en: "over 3 min" },
        afterLabel: { pt: "Depois", en: "After" },
        after: "214 ms",
        text: {
          pt: "O endpoint lia cerca de 14 horas de histórico de rotas com consultas N+1 entre Redis e MySQL. Reescrevi a leitura, cortei ida e volta redundante e passei a usar o cache de propósito.",
          en: "The endpoint read about 14 hours of route history with N+1 queries between Redis and MySQL. I rebuilt the read path, cut redundant round-trips, and started using the cache on purpose.",
        },
      },
      {
        kicker: { pt: "App de telemetria", en: "Telemetry app" },
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
      pt: "Site, sistema e app sob medida, já vendidos.",
      en: "Custom sites, systems, and apps, already sold.",
    },
    lede: {
      pt: "A Vértice Softwares é a empresa. Eu desenho e entrego o produto do cliente, do briefing ao que está no ar. O CRM atende e vende no WhatsApp. A Academy eu sigo vendendo para professores lucrarem com a própria marca.",
      en: "Vértice Softwares is the company. I design and ship the client's product, from the brief to what is live. The CRM handles support and sales on WhatsApp. I keep selling the Academy to teachers so they profit under their own brand.",
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
          pt: "Sigo vendendo para outros professores. Eles lucram com a própria marca: questão, simulado, ranking e pagamento por Pix ou cartão.",
          en: "I keep selling it to other teachers. They profit under their own brand: questions, mock exams, ranking, and payment by Pix or card.",
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
      pt: "O que eu contei quando o sistema estava em campo.",
      en: "What I wrote while the system was in the field.",
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
        image: evento,
        tag: { pt: "Evento", en: "Event" },
        quote: {
          pt: "Do código direto para estoque, setores e venda em tempo real no evento.",
          en: "From the code straight into live stock, sections, and sales at the event.",
        },
      },
      {
        href: "https://pt.linkedin.com/posts/luiz-henrique44_softwareengineering-techlead-fullstack-activity-7506155705775726592--KZo",
        image: produto,
        tag: { pt: "Produto", en: "Product" },
        quote: {
          pt: "A PagPegue saiu do zero para um ecossistema: painel, POS e validação na entrada.",
          en: "PagPegue went from zero to an ecosystem: panel, POS, and door validation.",
        },
      },
      {
        href: "https://pt.linkedin.com/posts/luiz-henrique44_agro-log%C3%ADstica-tecnologia-activity-7459620047020453888-zwqn",
        image: agro,
        tag: { pt: "Agro", en: "Farming" },
        quote: {
          pt: "O sistema entrou na colheita e na logística: telemetria, rastreamento e a operação do dia.",
          en: "The system joined harvest and logistics: telemetry, tracking, and the daily operation.",
        },
      },
    ],
  },
  experience: {
    eyebrow: { pt: "Trajetória", en: "Path" },
    title: { pt: "Onde o código encontra a operação.", en: "Where the code meets the operation." },
    items: [
      {
        period: { pt: "Jan 2023 — hoje", en: "Jan 2023 — now" },
        role: {
          pt: "Criador · Full stack e mobile",
          en: "Creator · Full stack and mobile",
        },
        place: "Vértice Softwares",
        text: {
          pt: "Sites, sistemas e apps sob medida. CRM no WhatsApp, Condo360 nas três plataformas e a Academy, que sigo vendendo para professores.",
          en: "Custom sites, systems, and apps. WhatsApp CRM, Condo360 on all three platforms, and the Academy, which I keep selling to teachers.",
        },
      },
      {
        period: { pt: "Produto no ar", en: "Live product" },
        role: { pt: "Fundador", en: "Founder" },
        place: "PagPegue",
        text: {
          pt: "PDV em Stone, PagBank e outras adquirentes, com validação de caixa no app.",
          en: "POS on Stone, PagBank, and other acquirers, with till validation in the app.",
        },
      },
      {
        period: { pt: "Set 2024 — hoje", en: "Sep 2024 — now" },
        role: { pt: "Analista de programação", en: "Programming analyst" },
        place: "Usina Itajobi (Grupo Itajobi)",
        text: {
          pt: "A frota e o motorista no celular de quem conduz o turno. O alerta chega na hora, e as câmeras, feitas do zero, entregam o relatório antes do incidente.",
          en: "The fleet and the driver on the phone of whoever runs the shift. The alert arrives immediately, and the cameras, built from scratch, deliver the report before the incident.",
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
      pt: "Se o problema é de produção, escreva.",
      en: "If the problem is in production, write.",
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
