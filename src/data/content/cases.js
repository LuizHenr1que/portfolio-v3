import academyDemo from "../../assets/cases/academy-demo.jpg";
import academyLanding from "../../assets/cases/academy-landing.jpg";
import cohle from "../../assets/cases/cohle.jpg";
import condo from "../../assets/cases/condo360.jpg";
import crm from "../../assets/cases/crm.jpg";
import pagpegue from "../../assets/cases/pagpegue.jpg";
import { links } from "./site";

export const cases = [
  {
    id: "pagpegue",
    image: pagpegue,
    featured: true,
    href: links.pagpegue,
    title: "PagPegue",
    role: { pt: "Fundador · do zero", en: "Founder · from scratch" },
    summary: {
      pt: "PDV e POS para loja, praça e evento. O caixa roda em várias maquininhas Stone, na PagBank e em outras adquirentes. O app Android valida o ticket na entrada.",
      en: "POS for stores, food courts, and events. The till runs on multiple Stone machines, on PagBank, and on other acquirers. The Android app validates the ticket at the door.",
    },
    result: {
      pt: "Preparado para 400+ vendas por hora. Mais de R$ 15 mil em vendas nos estabelecimentos.",
      en: "Built for 400+ sales an hour. More than R$ 15k in sales for the venues.",
    },
    stack: ["NestJS", "React", "PostgreSQL", "Prisma", "Socket.IO", "Android"],
  },
  {
    id: "condo360",
    image: condo,
    href: links.condo,
    ios: links.condoIos,
    android: links.condoAndroid,
    title: "Condo360",
    role: { pt: "Android · iOS · Web", en: "Android · iOS · Web" },
    summary: {
      pt: "App completo de condomínio para morador, portaria e síndico. Avisos, encomendas, visitas, reservas, chamados e financeiro com Pix e cartão, no celular e na web.",
      en: "A complete condo app for residents, the front desk, and the manager. Notices, packages, visitors, bookings, tickets, and payments by Pix or card, on the phone and on the web.",
    },
    result: {
      pt: "O mesmo produto nas três plataformas: App Store, Play Store e o painel web.",
      en: "The same product on all three platforms: App Store, Play Store, and the web panel.",
    },
    stack: ["Android", "iOS", "Web"],
  },
  {
    id: "cohle",
    image: cohle,
    href: links.cohle,
    repo: links.cohleRepo,
    title: "Cohle",
    role: { pt: "Open source · ao vivo", en: "Open source · live" },
    summary: {
      pt: "Projeto aberto para estudar transmissão ao vivo: câmera, áudio e tela no mesmo app. Desktop e web, a mesma conta.",
      en: "An open project for studying live streaming: camera, audio, and screen in the same app. Desktop and web, same account.",
    },
    result: {
      pt: "Volume por pessoa, modo leve e vídeo que só baixa quando alguém assiste.",
      en: "Per-person volume, a light mode, and video that loads only when someone watches.",
    },
    stack: ["TypeScript", { pt: "Câmera", en: "Camera" }, { pt: "Áudio", en: "Audio" }, "Web"],
  },
  {
    id: "crm",
    image: crm,
    title: "CRM Vértice",
    role: { pt: "Produto vendido", en: "Shipped product" },
    summary: {
      pt: "Atendimento e venda pelo WhatsApp num só lugar. Envio em massa, funil de leads e IA, com o número da empresa protegido e tráfego de verdade.",
      en: "Support and sales on WhatsApp in one place. Mass sending, a lead pipeline, and AI, with the company number protected and real traffic.",
    },
    result: {
      pt: "Conversas, disparos e o funil no mesmo painel. O time atende sem espalhar o contato.",
      en: "Conversations, broadcasts, and the pipeline in one panel. The team replies without spreading the contact.",
    },
    stack: ["WhatsApp", { pt: "Envio em massa", en: "Mass sending" }, { pt: "IA", en: "AI" }, "CRM"],
  },
  {
    id: "academy",
    href: links.academy,
    demo: links.academyDemo,
    title: "Vértice Academy",
    role: { pt: "Venda contínua para professores", en: "Ongoing sales to teachers" },
    summary: {
      pt: "Não é uma entrega fechada. Eu sigo vendendo a plataforma para outros professores, e o lucro fica com a marca deles. O aluno responde questão, faz simulado, sobe no ranking e paga por Pix ou cartão.",
      en: "It is not a one-off delivery. I keep selling the platform to other teachers, and the profit stays with their brand. The student answers questions, takes a mock exam, climbs the ranking, and pays by Pix or card.",
    },
    result: {
      pt: "Landing no ar e demo com quiz, cronômetro e ranking da turma, prontos para a próxima venda.",
      en: "Landing page live, and a demo with the quiz, timer, and class ranking, ready for the next sale.",
    },
    images: [
      { src: academyLanding, label: { pt: "Landing", en: "Landing" } },
      { src: academyDemo, label: { pt: "Demo", en: "Demo" } },
    ],
    stack: ["React", "Quiz", "Ranking", "Pix"],
  },
  {
    id: "usina",
    image: null,
    href: null,
    title: "Usina Itajobi",
    role: {
      pt: "Grupo Itajobi · Analista de programação",
      en: "Grupo Itajobi · Programming analyst",
    },
    summary: {
      pt: "A operação da usina cabe no celular de quem conduz o turno. Quando a frota ou o motorista saem do combinado, o alerta chega na hora, em vez de o problema aparecer só no dia seguinte. O monitoramento de câmeras, feito do zero em Laravel e React, conecta as câmeras e manda o relatório para o celular, inclusive quando o motorista boceja. No mesmo trabalho, um bot com LangChain e RAG lê os PDFs da operação e responde citando a fonte.",
      en: "The mill's operation fits on the phone of whoever runs the shift. When the fleet or the driver leaves the plan, the alert arrives immediately, instead of the problem showing up only the next day. The camera monitor, built from scratch in Laravel and React, connects the cameras and sends the report to the phone, including when the driver yawns. On the same job, a bot built with LangChain and RAG reads the operation's PDFs and answers with the source.",
    },
    result: {
      pt: "40+ bugs críticos corrigidos e cerca de 25% a mais de eficiência operacional.",
      en: "40+ critical bugs fixed and about 25% better operational efficiency.",
    },
    note: {
      pt: "Operação fechada. O print fica disponível sob pedido.",
      en: "Closed operation. Screenshot available on request.",
    },
    stats: [
      {
        value: "40+",
        label: { pt: "bugs críticos", en: "critical bugs" },
      },
      {
        value: "+25%",
        label: {
          pt: "eficiência operacional",
          en: "operational efficiency",
        },
      },
    ],
    stack: ["React Native", "Laravel", "React", "Realm", "LangChain"],
  },
];
