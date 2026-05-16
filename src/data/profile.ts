export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  skills: string[];
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
  skills: string[];
  experiences: Experience[];
  projects: {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
  }[];
}

export const profileData: Profile = {
  name: "Sérgio Sposito",
  title: "Senior Software Engineer | Backend & Scalability",
  summary: "Engenheiro de Software focado na construção de plataformas digitais de grande escala. Arquiteto de sistemas críticos para CNN Brasil e Grupo Abril, especialista em PHP (WordPress VIP) e Node.js (NestJS), aplicando SOLID, Clean Code e Design Patterns para garantir performance e resiliência em ambientes de alto tráfego.",
  email: "sergio.devweb@gmail.com",
  linkedin: "https://www.linkedin.com/in/sergio-sposito/",
  github: "https://github.com/sergiosposito",
  skills: [
    "PHP / WordPress VIP",
    "Node.js / NestJS",
    "Clean Architecture & SOLID",
    "System Design & Scalability",
    "Cloud Architecture (AWS/GCP)",
    "Payment Gateways (Stripe)",
    "Real-time Data Ingestion",
    "Clean Code & Unit Testing"
  ],
  experiences: [
    {
      company: "CNN Brasil",
      role: "Software Engineer",
      period: "Fev 2021 — Presente",
      description: "Liderança técnica na evolução de produtos digitais de alta escala. Responsável pela arquitetura do Sistema de Esportes em tempo real, plataforma de Eleições e os produtos CNN Stocks e CNN Pay (gateway de pagamentos com Stripe). Foco em refatoração para OOP/SOLID e otimização de performance para milhões de acessos.",
      logo: "https://logodownload.org/wp-content/uploads/2020/03/cnn-brasil-logo.png",
      skills: ["WordPress VIP", "PHP", "Node.js", "System Design", "Stripe"]
    },
    {
      company: "Grupo Abril",
      role: "Full-stack Developer",
      period: "Mar 2020 — Fev 2021",
      description: "Desenvolvimento de portais críticos como VEJA, Superinteressante, Quatro Rodas e Capricho. Foco em estabilidade e performance para sites com volume massivo de acessos, criando temas e plugins personalizados para o ecossistema editorial.",
      logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2c/Logo_Grupo_Abril.png/250px-Logo_Grupo_Abril.png",
      skills: ["PHP", "JavaScript", "WordPress", "Scalable UI"]
    },
    {
      company: "Vector ITC",
      role: "Full-stack Developer",
      period: "Mai 2019 — Mar 2020",
      description: "Desenvolvimento de APIs e integração de autenticação robusta utilizando AWS Cognito. Foco em automação de testes com Codeception e gerenciamento de infraestrutura cloud.",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&q=80",
      skills: ["AWS Cognito", "PHP", "API Design", "Codeception"]
    },
    {
      company: "Proton",
      role: "Full-stack Developer",
      period: "Set 2017 — Set 2018",
      description: "Desenvolvimento de sistemas personalizados em PHP (Laravel) com foco em arquitetura MVC para diversos segmentos de serviços.",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&q=80",
      skills: ["Laravel", "PHP", "MVC", "MySQL"]
    },
    {
      company: "Agência Master12",
      role: "Full-stack Developer",
      period: "Set 2016 — Set 2017",
      description: "Desenvolvimento de layouts customizados e integração com WordPress, utilizando padrões de Orientação a Objetos e banco de dados MySQL.",
      logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&h=100&fit=crop&q=80",
      skills: ["WordPress", "PHP OOP", "MySQL"]
    }
  ],
  projects: [
    {
      title: "Plataforma CNN Esportes",
      description: "Ingestão de dados em tempo real para jogos ao vivo, tabelas e campeonatos com baixa latência.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
      link: "https://www.cnnbrasil.com.br/esportes/",
      tags: ["Real-time", "High Traffic", "Architecture"]
    },
    {
      title: "Sistema de Eleições CNN",
      description: "Arquitetura resiliente para cobertura eleitoral com picos massivos de processamento de dados do TSE.",
      image: "https://images.unsplash.com/photo-1540910419892-f0c742c353c1?w=800&q=80",
      link: "#",
      tags: ["Scalability", "Backend", "Critical Data"]
    },
    {
      title: "CNN Pay Gateway",
      description: "Gateway interno de pagamentos integrado ao Stripe para gestão de planos e assinaturas recorrentes.",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80",
      link: "#",
      tags: ["Stripe", "Fintech", "Security"]
    }
  ]
};
