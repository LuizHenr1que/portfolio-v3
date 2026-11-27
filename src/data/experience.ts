export interface Experience {
  id: string;
  company: string;
  position: {
    pt: string;
    en: string;
  };
  period: {
    pt: string;
    en: string;
  };
  description: {
    pt: string[];
    en: string[];
  };
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 'usina-itajobi',
    company: 'Usina Itajobi',
    position: {
      pt: 'Analista de Programação — Full Stack & Mobile',
      en: 'Programming Analyst — Full Stack & Mobile',
    },
    period: {
      pt: 'Set/2024 – Atual',
      en: 'Sep/2024 – Present',
    },
    description: {
      pt: [
        'Desenvolvo e mantenho aplicações web e mobile de rastreamento e telemetria em tempo real, dashboards em React e APIs.',
        'Corrigi mais de 40 bugs críticos e reduzi incidentes em produção em cerca de 30%.',
        'Migrei armazenamento local para Realm e ganhei cerca de 40% de performance no app de telemetria.',
        'Integrei rastreamento via Bluetooth e concluí o ciclo de build Android.',
      ],
      en: [
        'Develop and maintain real-time tracking and telemetry web and mobile applications, React dashboards and APIs.',
        'Fixed over 40 critical bugs and reduced production incidents by approximately 30%.',
        'Migrated local storage to Realm and gained approximately 40% performance in the telemetry app.',
        'Integrated Bluetooth tracking and completed the Android build cycle.',
      ],
    },
    tech: ['React Native', 'PHP', 'Node.js', 'MongoDB', 'MySQL'],
  },
  {
    id: 'vertice',
    company: 'Vértice Softwares',
    position: {
      pt: 'Desenvolvedor Full Stack & Mobile',
      en: 'Full Stack & Mobile Developer',
    },
    period: {
      pt: '2023 – Atual',
      en: '2023 – Present',
    },
    description: {
      pt: [
        'Plataforma de vendas (painel web e app de caixa) em produção em 2 estabelecimentos que já geraram mais de R$ 15 mil em vendas.',
        'App de gestão de condomínio publicado nas lojas (iOS, Android e Web).',
        'App de organização do lar publicado na App Store (iOS).',
        'Sistemas web e mobile de gestão de frota agrícola com alocação em tempo real.',
      ],
      en: [
        'Sales platform (web dashboard and cashier app) in production at 2 establishments that have generated over R$15k in sales.',
        'Condominium management app published on stores (iOS, Android and Web).',
        'Home organization app published on the App Store (iOS).',
        'Web and mobile agricultural fleet management systems with real-time allocation.',
      ],
    },
    tech: ['React Native', 'NestJS', 'Laravel', 'PostgreSQL', 'Prisma', 'Socket.IO'],
  },
  {
    id: 'mtrek',
    company: 'Mtrek Startup',
    position: {
      pt: 'Desenvolvedor Front-end',
      en: 'Front-end Developer',
    },
    period: {
      pt: 'Jan/2023 – Set/2024',
      en: 'Jan/2023 – Sep/2024',
    },
    description: {
      pt: [
        'Construí interfaces e dashboards responsivos, formulários com validação e integrações REST.',
        'Foco em performance e consistência entre navegadores.',
      ],
      en: [
        'Built responsive interfaces and dashboards, forms with validation and REST integrations.',
        'Focus on performance and cross-browser consistency.',
      ],
    },
    tech: ['React', 'PHP', 'Tailwind CSS'],
  },
];
