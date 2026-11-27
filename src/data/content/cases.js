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
    role: { pt: "Desenvolvedor Full Stack & Mobile · do zero", en: "Full Stack & Mobile Developer · from scratch" },
    summary: {
      pt: "Sistema de pagamento para estabelecimentos com dashboard web, aplicativo de caixa e integração com Stone e PagBank. O app Android valida o ticket na entrada.",
      en: "Payment system for establishments with web dashboard, cashier app, and Stone and PagBank integration. The Android app validates the ticket at the door.",
    },
    result: {
      pt: "Preparado para 400+ vendas por hora. Usado por 2 estabelecimentos, mais de R$ 15.000 em vendas, elogiado pela velocidade.",
      en: "Built for 400+ sales an hour. Used by 2 establishments, over R$ 15,000 in sales, praised for speed.",
    },
    stack: ["NestJS", "React", "TypeScript", "PostgreSQL", "Prisma", "Socket.IO", "Redis", "Stone SDK", "Android"],
  },
  {
    id: "condo360",
    image: condo,
    href: links.condo,
    ios: links.condoIos,
    android: links.condoAndroid,
    title: "Condo360",
    role: { pt: "React Native · React · TypeScript", en: "React Native · React · TypeScript" },
    summary: {
      pt: "App completo de condomínio para morador, portaria e síndico. Avisos, encomendas, visitas, reservas, chamados e financeiro com Pix e cartão, no celular e na web.",
      en: "A complete condo app for residents, the front desk, and the manager. Notices, packages, visitors, bookings, tickets, and payments by Pix or card, on the phone and on the web.",
    },
    result: {
      pt: "O mesmo produto nas três plataformas: App Store, Play Store e o painel web.",
      en: "The same product on all three platforms: App Store, Play Store, and the web panel.",
    },
    stack: ["React Native", "Expo", "TypeScript", "React", "Node.js"],
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
    role: { pt: "Plataforma de ensino web", en: "Web educational platform" },
    summary: {
      pt: "Plataforma de ensino já usada por professores. O aluno responde questão, faz simulado, sobe no ranking e paga por Pix ou cartão.",
      en: "Educational platform already used by teachers. The student answers questions, takes a mock exam, climbs the ranking, and pays by Pix or card.",
    },
    result: {
      pt: "Landing no ar e demo com quiz, cronômetro e ranking da turma, prontos e usados por professores.",
      en: "Landing page live and demo with quiz, timer, and class ranking, ready and used by teachers.",
    },
    images: [
      { src: academyLanding, label: { pt: "Landing", en: "Landing" } },
      { src: academyDemo, label: { pt: "Demo", en: "Demo" } },
    ],
    stack: ["React", "TypeScript", "Node.js", "Quiz", "Ranking", "Pix"],
  },
  {
    id: "itajobi",
    title: { pt: "Usina Itajobi (Grupo Itajobi)", en: "Usina Itajobi (Grupo Itajobi)" },
    role: { pt: "Analista de Programação — Full Stack & Mobile", en: "Software Developer — Full Stack & Mobile" },
    summary: {
      pt: "Apps web e mobile de rastreamento e telemetria em tempo real no agronegócio. Dashboards React, APIs e rastreamento Bluetooth em hardware real Android.",
      en: "Real-time tracking and telemetry web and mobile apps in agribusiness. React dashboards, APIs, and Bluetooth tracking on real Android hardware.",
    },
    result: {
      pt: "40+ bugs críticos corrigidos, ~30% menos incidentes em produção. API de histórico saiu de 3+ min para 214 ms. App migrado para Realm, ~40% mais rápido, crashes pararam.",
      en: "40+ critical bugs fixed, ~30% fewer production incidents. History API went from 3+ min to 214 ms. App migrated to Realm, ~40% faster, crashes stopped.",
    },
    stats: [
      {
        value: "214 ms",
        label: { pt: "API de histórico", en: "history API" },
      },
      {
        value: "+40%",
        label: { pt: "performance do app", en: "app performance" },
      },
      {
        value: "~30%",
        label: { pt: "menos incidentes", en: "fewer incidents" },
      },
    ],
    stack: ["React Native", "Laravel", "React", "Realm", "Redis", "MySQL", "Bluetooth", "Android"],
  },
  {
    id: "larzin",
    title: "LarZin",
    role: { pt: "App de organização doméstica", en: "Home organization app" },
    ios: "https://apps.apple.com/app/larzin",
    summary: {
      pt: "App de organização doméstica publicado na App Store. Gestão de tarefas, listas e organização do lar.",
      en: "Home organization app published on the App Store. Task management, lists, and home organization.",
    },
    result: {
      pt: "Publicado na App Store e disponível para download.",
      en: "Published on the App Store and available for download.",
    },
    stack: ["React Native", "Expo", "TypeScript"],
  },
];
