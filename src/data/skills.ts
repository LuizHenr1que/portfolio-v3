export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'Kotlin'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'PHP', 'Laravel', 'Prisma', 'Socket.IO', 'WebSockets', 'Supabase'],
  },
  {
    title: 'Banco de Dados',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Realm'],
  },
  {
    title: 'Ferramentas',
    skills: ['Docker', 'Git', 'Figma', 'Python'],
  },
];
