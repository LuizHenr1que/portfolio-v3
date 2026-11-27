export interface LinkedInPost {
  id: string;
  url: string;
  author: string;
  excerpt: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  problem: {
    pt: string;
    en: string;
  };
  solution: {
    pt: string;
    en: string;
  };
  stack: string[];
  media: {
    type: 'image' | 'video' | 'gif';
    src: string;
    alt: string;
  };
  links?: {
    live?: string;
    github?: string;
  };
  highlight?: {
    pt: string;
    en: string;
  };
  linkedInPosts?: LinkedInPost[];
}

export const projects: Project[] = [
  {
    id: 'pagpegue',
    title: 'PagPegue',
    description: {
      pt: 'Sistema completo de pagamento com painel web e app de caixa',
      en: 'Complete payment system with web dashboard and cashier app',
    },
    problem: {
      pt: 'Estabelecimentos precisavam de uma solução rápida e confiável para processar pagamentos em alto volume.',
      en: 'Businesses needed a fast and reliable solution to process high-volume payments.',
    },
    solution: {
      pt: 'Painel web + app de caixa em React Native com módulos nativos Kotlin, integração com Stone e PagBank (homologação). Em produção em 2 estabelecimentos que já geraram mais de R$ 15 mil em vendas.',
      en: 'Web dashboard + cashier app in React Native with native Kotlin modules, integration with Stone and PagBank (staging). In production at 2 establishments that have already generated over R$15k in sales.',
    },
    stack: ['React', 'React Native', 'Kotlin', 'NestJS', 'PostgreSQL', 'Prisma', 'Socket.IO', 'Stone SDK'],
    media: {
      type: 'image',
      src: '/portfolio-v3/assets/projects/pagpegue.svg',
      alt: 'PagPegue system',
    },
    highlight: {
      pt: 'Mais de R$ 15 mil em vendas processadas em 2 estabelecimentos',
      en: 'Over R$15k in sales processed across 2 establishments',
    },
    linkedInPosts: [
      {
        id: 'post1',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:PLACEHOLDER1',
        author: 'Luiz Henrique',
        excerpt: 'Hoje quero compartilhar um marco importante do PagPegue: já processamos mais de R$ 15 mil em vendas reais...',
        date: '2024-01-15',
      },
      {
        id: 'post2',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:PLACEHOLDER2',
        author: 'Luiz Henrique',
        excerpt: 'Construir um sistema de pagamento completo com integração Stone foi um desafio técnico imenso...',
        date: '2024-02-20',
      },
    ],
  },
  {
    id: 'vertice-academy',
    title: 'Vértice Academy',
    description: {
      pt: 'Plataforma de ensino online',
      en: 'Online learning platform',
    },
    problem: {
      pt: 'Necessidade de uma plataforma robusta para hospedar e vender cursos online.',
      en: 'Need for a robust platform to host and sell online courses.',
    },
    solution: {
      pt: 'Plataforma completa de ensino com gestão de cursos, alunos e pagamentos. Já teve cliente pagante e gerou receita.',
      en: 'Complete learning platform with course, student, and payment management. Already had paying customer and generated revenue.',
    },
    stack: ['React', 'TypeScript', 'Laravel', 'MySQL', 'Tailwind CSS'],
    media: {
      type: 'image',
      src: '/portfolio-v3/assets/projects/vertice-academy.svg',
      alt: 'Vértice Academy platform',
    },
  },
  {
    id: 'cohle',
    title: 'Cohle',
    description: {
      pt: 'Plataforma de comunicação em tempo real',
      en: 'Real-time communication platform',
    },
    problem: {
      pt: 'Demonstrar competências em desenvolvimento full-stack e arquitetura de sistemas distribuídos com comunicação em tempo real.',
      en: 'Demonstrate full-stack development skills and distributed systems architecture with real-time communication.',
    },
    solution: {
      pt: 'Plataforma completa com chat, chamadas de voz/vídeo, compartilhamento de tela e personalização. Disponível como app desktop (macOS/Windows) e versão web.',
      en: 'Complete platform with chat, voice/video calls, screen sharing and customization. Available as desktop app (macOS/Windows) and web version.',
    },
    stack: ['React', 'TypeScript', 'Node.js', 'Fastify', 'Socket.IO', 'WebRTC', 'LiveKit', 'Prisma', 'PostgreSQL', 'Electron'],
    media: {
      type: 'image',
      src: '/portfolio-v3/assets/projects/cohle.png',
      alt: 'Cohle platform screenshot',
    },
    links: {
      live: 'https://cohle.vercel.app',
      github: 'https://github.com/LuizHenr1que/cohle',
    },
  },
  {
    id: 'condo360',
    title: 'Condo360',
    description: {
      pt: 'Plataforma de gestão para condomínios',
      en: 'Condominium management platform',
    },
    problem: {
      pt: 'Condomínios precisam de uma solução completa para gerenciar operações do dia a dia.',
      en: 'Condominiums need a complete solution to manage daily operations.',
    },
    solution: {
      pt: 'App multi-tenant publicado nas lojas (iOS, Android e Web) com gestão de portaria, leitura de encomendas por OCR, pagamentos via Pix (Asaas) e conformidade com LGPD.',
      en: 'Multi-tenant app published on stores (iOS, Android and Web) with concierge management, package reading via OCR, Pix payments (Asaas) and LGPD compliance.',
    },
    stack: ['React Native', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'Asaas API'],
    media: {
      type: 'image',
      src: '/portfolio-v3/assets/projects/condo360.svg',
      alt: 'Condo360 app',
    },
  },
  {
    id: 'larzin',
    title: 'LarZin',
    description: {
      pt: 'App de organização compartilhada do lar',
      en: 'Shared home organization app',
    },
    problem: {
      pt: 'Famílias precisam coordenar tarefas domésticas de forma eficiente.',
      en: 'Families need to coordinate household tasks efficiently.',
    },
    solution: {
      pt: 'App publicado na App Store (iOS) com sincronização em tempo real, widgets nativos e lembretes locais.',
      en: 'App published on the App Store (iOS) with real-time sync, native widgets and local reminders.',
    },
    stack: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'iOS Widgets'],
    media: {
      type: 'image',
      src: '/portfolio-v3/assets/projects/larzin.svg',
      alt: 'LarZin app',
    },
  },
];
