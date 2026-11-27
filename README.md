# 🚀 Portfólio Pessoal - Luiz Henrique

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Portfólio pessoal com design minimalista estilo Apple, apresentando projetos, experiências e habilidades de forma elegante e profissional.**

🌐 **[Ver Portfólio Online](https://luizhenr1que.github.io/portfolio-v3)**

---

## 📋 Sobre Este Portfólio

Portfólio pessoal desenvolvido com foco em **design minimalista**, **performance** e **experiência do usuário**. Interface limpa e clara inspirada no design da Apple, com muito espaço em branco, tipografia grande e animações suaves.

### 🎯 Objetivo
Demonstrar habilidades técnicas e projetos através de:
- **Design minimalista** e profissional
- **Código TypeScript** limpo e bem estruturado
- **Animações suaves** com Framer Motion
- **Experiência do usuário** otimizada
- **Bilíngue**: Português e Inglês

---

## ✨ Funcionalidades

### 🌐 Multilíngue
- **Português** (padrão)
- **Inglês**
- Troca rápida entre idiomas com botão no navbar

### 🎨 Design Minimalista
- **Inspiração Apple**: Design limpo com muito espaço em branco
- **Tipografia Grande**: Hierarquia visual clara
- **Paleta Clara**: Background branco com acentos em azul e cinza
- **Responsivo**: Mobile-first, otimizado para todos os dispositivos

### ✨ Animações Suaves
- **Scroll Reveal**: Elementos aparecem conforme navegação
- **Hover Effects**: Interações suaves em cards e botões
- **Transições**: Animações fluidas entre estados
- **Micro-interações**: Feedback visual em todas as ações

### 📊 Seções do Portfólio
- **🏠 Hero**: Apresentação pessoal com stack completa
- **💼 Projetos**: Destaque para PagPegue + outros projetos principais
- **🏢 Experiência**: Histórico profissional detalhado
- **⚙️ Stack**: Tecnologias organizadas por categoria
- **📧 Contato**: Informações de contato com links diretos

---

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.2.0** - Biblioteca para interfaces
- **TypeScript 5.2.2** - Type-safety
- **Vite 5.2.0** - Build tool rápida
- **Framer Motion 11.0.0** - Animações

### Estilização
- **TailwindCSS 3.4.4** - Framework CSS utilitário

### Deploy
- **GitHub Pages** - Hospedagem estática
- **GitHub Actions** - CI/CD automático

---

## 🎨 Design

### 🎭 Sistema de Cores
Paleta minimalista e profissional:
- **Branco**: Background principal
- **Cinza 50-900**: Hierarquia de texto
- **Azul 600**: Call-to-actions
- **Cinza 100**: Backgrounds sutis

### 📱 Responsividade
- **Mobile First**: Otimizado para celulares
- **Breakpoints**: sm, md, lg adaptados
- **Touch Friendly**: Elementos adequados para toque

---

## 💼 Projetos em Destaque

### 🌟 PagPegue
Sistema completo de pagamento em destaque:
- **Painel web** + **app de caixa** React Native
- Módulos nativos em **Kotlin**
- Integração **Stone** e **PagBank**
- **Em produção** em 2 estabelecimentos
- **Mais de R$ 15 mil** em vendas processadas
- Área de **prova social** com posts do LinkedIn

### 🚀 Outros Projetos
- **Vértice Academy**: Plataforma de ensino online
- **Cohle**: Comunicação em tempo real (chat, voz, vídeo)
- **Condo360**: Gestão de condomínios
- **LarZin**: App de organização do lar

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/LuizHenr1que/portfolio-v3.git
cd portfolio-v3

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build local
npm run lint     # Verificação de código
npm run deploy   # Deploy para GitHub Pages
```

---

## 📁 Estrutura do Projeto

```
portfolio-v3/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   └── Navbar.tsx
│   ├── sections/        # Seções da página
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Stack.tsx
│   │   └── Contact.tsx
│   ├── data/           # Dados editáveis
│   │   ├── projects.ts
│   │   └── experience.ts
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entry point
│   └── index.css       # Estilos globais
├── public/
│   └── assets/
│       └── projects/   # Imagens/vídeos dos projetos
└── README.md
```

---

## 🎬 Como Atualizar Conteúdo

### 📝 Textos e Dados
Todos os textos estão em arquivos TypeScript editáveis:

**Projetos**: `src/data/projects.ts`
- Adicione/edite projetos
- Atualize descrições PT/EN
- Configure links e stacks

**Experiência**: `src/data/experience.ts`
- Adicione empresas
- Atualize períodos
- Edite descrições PT/EN

**Posts do LinkedIn** (PagPegue): `src/data/projects.ts`
```typescript
linkedInPosts: [
  {
    id: 'post1',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:...',
    author: 'Luiz Henrique',
    excerpt: 'Texto do post...',
    date: '2024-01-15',
  },
]
```

### 🖼️ Imagens e Vídeos

**Localização**: `public/assets/projects/`

**Suporte**:
- `.png`, `.jpg` - Imagens estáticas
- `.mp4`, `.webm` - Vídeos (autoplay mudo em loop)
- `.gif` - GIFs animados

**Como trocar**:
1. Coloque o arquivo em `public/assets/projects/`
2. Use o mesmo nome ou atualize em `src/data/projects.ts`
3. Para vídeos, crie também um `.jpg` para poster (mesmo nome)

**Exemplo**:
```
public/assets/projects/
  pagpegue.mp4      # Vídeo principal
  pagpegue.jpg      # Poster/fallback
  cohle.png         # Screenshot estático
```

---

## 🔧 Deploy

O deploy é **automático** via GitHub Actions quando você faz push para `main`:

```bash
git add .
git commit -m "Atualizar portfólio"
git push origin main
```

O site será atualizado em: `https://luizhenr1que.github.io/portfolio-v3/`

---

## 📧 Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-henrique44/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LuizHenr1que)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:luizhenriquejob4@gmail.com)

---

<div align="center">

**🚀 Desenvolvido por Luiz Henrique**

*Design minimalista, código limpo e experiências excepcionais*

**[🌐 Ver Portfólio](https://luizhenr1que.github.io/portfolio-v3)** | **[📱 Contato](mailto:luizhenriquejob4@gmail.com)**

</div>
