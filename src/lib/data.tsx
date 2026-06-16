import { Linkedin, InstagramIcon, PhoneCall, Mail } from 'lucide-react';

import LogoIpcl from '/public/images/logos/ipcl.svg';
import StepUp from '/public/images/logos/StepUp.png';


import ProjectGreen from '/public/images/project-green.png';
import ProjectAlvoCerto from '/public/images/project-alvo-certo.png';
import ProjectPluralmente from '/public/images/project-pluralmente.png';
import ProjectLabhum from '/public/images/project-labhum.png';
import ProjectTrinusJR from 'public/images/ProjectTrinusJR.jpeg';


import AvatarMel from '/public/images/avatar-mel.png';
import AvatarPedro from '/public/images/avatar-pedro.png';
import AvatarDiego from '/public/images/avatar-diego.png';

import AvatarAdm from '/public/images/logos/Administração.png';
import AvatarPsi from '/public/images/logos/Psicologia.png';
import AvatarGes from '/public/images/logos/Gestão de Talentos.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  github: 'https://github.com/ODigaas/portfolio-ana-beatriz',
  linkedin: 'https://www.linkedin.com/in/analistarh-anaalencar/',
  instagram: 'https://www.instagram.com/bia.alencarf/'
};

export const NAV_LINKS = [
  {
    label: 'Sobre',
    href: '#Sobre mim',
  },
  {
    label: 'Habilidades',
    href: '#interests',
  },
  {
    label: 'Experiência',
    href: '#experience',
  },
  {
    label: 'Cursos',
    href: '#courses',
  },
  {
    label: 'Indicações',
    href: '#Indicações',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/analistarh-anaalencar',
  },
  {
    icon: InstagramIcon,
    url: 'https://www.instagram.com/biaaf.estudos/',
  },
  {
    icon: PhoneCall,
    url: 'http://wa.me/11961002857',
  },
   {
    icon: Mail,
    url: 'mailto:ana0507ferreira@gmail.com',
  },
];

export const INTERESTS = [
  {
    personName: 'Administração',
    personAvatar: AvatarAdm,
    testimonial: [
      '◦ Word',
      '◦ Excel',
      '◦ Liderança',
      '◦ Recursos Humanos',
      '◦ Rescisão Contratual',
    ],
    title: 'Senai',
  },
  {
    personName: 'Psicologia',
    personAvatar: AvatarPsi, 
    testimonial: [
      '◦ TEA',
      '◦ Neurociência',
      '◦ Saúde Mental',   
      '◦ Psicologia Organizacional',
      '◦ Transtornos de aprendizagem',   
    ],
    title: 'Bacharelanda',
  },
  {
    personName: 'Gestão de Talentos',
    personAvatar: AvatarGes,
    testimonial: [
      '◦ PDI',
      '◦ 5W2H',
      '◦ Feedback',
      '◦ Análise swot',
      '◦ Comunicação e escuta ativa',
    ],
    title: 'Senac',
  },
];

export const COURSES = [
  {
    logo: '/images/logos/NIFESP.png',
    logoAlt: 'UNIFESP logo',
    width: 120,
    height: 60,
    position: 'Universidade Federal de São Paulo - Bacharelado, Psicologia',
    categorycourse: 'Bacharelado, Psicologia',
    currentlyWorkHere: true,
    startDate: new Date(2025, 2),
    summary: [
      'Psicosomática',
      'Psicoterapia',
      'Psicopatologia',
    ],
  },
  {
    logo: '/images/logos/UFRGS.png',
    logoAlt: 'URFRGS logo',
    position: 'Universidade Federal do RS',
    categorycourse: 'Cursos Livres',
    summary: [
      'Neurociência Integrativa - Sinapses',
      'Pré-fisiologia',
      'Neurofisiologia básica',
    ],
  },
  {
    logo: '/images/logos/PUCRS.png',
    logoAlt: 'PUCRS logo',
    position: 'Pontifícia Universidade Católica',
    categorycourse: 'Cursos Livres',
    summary: [
      'Síndrome de Burnout: Por que os professores sofrem?',
      'Neurociência do desenvolvimento',
      'Trilhas Empreendedoras',
    ],
  },
  {
    logo: '/images/logos/SENAC.png',
    logoAlt: 'Senac logo',
    position: 'Senac São Paulo',
    categorycourse: 'Cursos Livres',
    summary: [
      'Comunicação e feedback eficaz',
      'Ferramentas para liderança',
      'Assistente administrativo',
    ],
  },
  {
    logo: '/images/logos/SENAI.png',
    logoAlt: 'Senai logo',
    position: 'Senai São Paulo',
    categorycourse: 'Cursos Livres',
    summary: [
      'Principios do Business Partner',
      'Rescisão Contratual',
      'Analista de Recursos Humanos',
    ],
  },
   {
    logo: '/images/logos/NIFESP.png',
    logoAlt: 'UNIFESP logo',
    position: 'UNIFESP',
    categorycourse: 'Cursos Livres', 
    summary: [
      'Do Endomarketing ao Employer Branding',
      'Neurobranding',
      'Laboratório de Humanidades',
    ],
  },
  {
    logo: '/images/logos/CI.png',
    logoAlt: 'CI logo',
    position: 'Cultura Inglesa',
    categorycourse: 'Certificação de Inglês Fluente',
    summary: [
      'FCE: First Certificate in English - B2',
    ],
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoIpcl,
    logoAlt: 'Instituto de Psicologia e Cuidado ao Luto · Tempo integral',
    position: 'Inst. de Psicologia e Cuidado ao Luto • Secretária Administrativa',
    startDate: new Date(2024, 2),
    endDate: new Date(2024, 8),
    summary: [
      'Gestão de agendamentos',
      'Comunicação',
      'Faturamento',
      'Gestão de fluxo de caixa',
      'Emissão de notas fiscais',
    ],
  },
  {
    logo: StepUp,
    logoAlt: 'Step Up - Escola de idiomas · Freelancer',
    position: 'Step Up - Escola de idiomas • English Teacher',
    startDate: new Date(2026, 2),
    currentlyWorkHere: true,
    summary: [
      'Ministração de aulas para níveis básico (A2), intermediário (B2) e avançado (C1)',
      'Atendimento a diferentes faixas etárias',
      'Foco no desenvolvimento da fluência e comunicação',
      'Abordagem integral das habilidades: compreensão auditiva, fala, leitura e escrita',
      'Aplicação de metodologias ativas com materiais de editoras renomadas',
      'Integração de gramática a tópicos contemporâneos',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: '🌱 Horticultura Terapêutica',
    description:
      'Em um dos Centros de Atenção Integrada à Saúde Mental, floresce o projeto de Horticultura Terapêutica, que acontece semanalmente e vai além do cuidado clínico e do olhar unicamente fisiopatológico. A iniciativa envolve pacientes internados em atividades que integram o plantio de sementes, o acompanhamento do cultivo, a colheita e a culinária com os alimentos produzidos, promovendo um espaço seguro de cuidado, convivência e construção de vínculos. Mais do que uma prática agrícola, o projeto fortalece o bem-estar biopsicossocial, estimula a autonomia e favorece o desenvolvimento de habilidades socioemocionais, como cooperação, responsabilidade e autoestima. Enquanto estudantes da área da saúde, acompanhamos de perto como a atividade é aguardada e valorizada pelos pacientes, sendo o processo de germinação das sementes uma metáfora do cuidado, do crescimento e da transformação pessoal. Além das atividades práticas, são realizadas discussões com a equipe multiprofissional sobre os impactos do projeto no cotidiano terapêutico, bem como a elaboração de relatórios de cada encontro e planilhas de organização de gastos e solicitação de verbas, assegurando o acompanhamento e a continuidade da iniciativa. Ao final, a colheita ultrapassa os alimentos: é também de autoconhecimento, vínculos e saúde mental, reafirmando que cuidar da terra é, sobretudo, cuidar de si. 🌻💚',
    url: 'https://www.instagram.com/greenmentes/',
    previewImage: ProjectGreen,
    technologies: [
      'Horticultura Terapêutica',
      'Saúde Mental',
      'Autonomia',
      'Voluntariado',
      'Bem-estar',
      'Práticas Integrativas',
      'Humanização',
      'Esperança e Mudança',
      'CAISM',
      'Engajamento Comunitário',
      'Educação em Saúde',
      'Equipe Multidisciplinar',
    ],
  },
  {
    name: '🌍 Projeto Comunitário de Inglês',
    description:
      'Atuo como professora voluntária de inglês na ONG Projeto Alvo Certo, uma experiência de grande valor pessoal e profissional. O projeto acontece aos sábados e atende crianças e adolescentes, com média de 14 anos, em situação de vulnerabilidade social. Minha atuação envolve aulas semanais, planejamento pedagógico, reuniões com a equipe, encontros com pais e responsáveis e preparação para apresentações semestrais, contribuindo para o desenvolvimento acadêmico e socioemocional dos alunos. Minha trajetória com o Projeto Alvo Certo começou como aluna, onde recebi apoio educacional e incentivo para acreditar no meu potencial. Retornar como voluntária representa a consolidação de um ciclo de transformação por meio da educação. Hoje, compartilho conhecimentos linguísticos e valores como empatia, responsabilidade e perseverança, acreditando na educação como ferramenta estratégica de impacto social e desenvolvimento humano. 🌟',
    url: 'https://www.instagram.com/projetoalvocertooficial/',
    previewImage: ProjectAlvoCerto,
    technologies: [
      'Ensino Voluntário',
      'Inglês',
      'Planejamento de Aulas',
      'Trabalho em Equipe',
      'Mediação de Conflitos',
      'Gestão do Tempo',
      'Engajamento Comunitário',
      'Voluntariado',
      'Didática',
      'Metodologia de Ensino',
      'Liderança',
    ],
  },
  {
    name: '📱 Pluralmente: Saúde Mental no Instagram',
    description:
      'Como parte de um trabalho acadêmico, desenvolvi em equipe a página @projeto_pluralmente no Instagram, com o objetivo de ampliar o diálogo sobre saúde mental, autocuidado e desenvolvimento pessoal e profissional. A proposta nasceu da necessidade de tornar esses temas mais acessíveis, acolhedores e livres de estigmas, especialmente entre jovens e adultos em ambientes acadêmicos e profissionais. A página reúne conteúdos informativos, dicas práticas e reflexões voltadas ao bem-estar emocional e à construção de uma rotina mais equilibrada. Participar desse projeto me permitiu unir comunicação digital com responsabilidade social, ampliando minha visão sobre como o design, a linguagem e a empatia podem impactar positivamente a vida das pessoas.',
    url: 'https://www.instagram.com/projeto_pluralmente/',
    previewImage: ProjectPluralmente,
    technologies: [
      'Conteúdo Digital',
      'Gestão de Conteúdo',
      'Criação',
      'Design Gráfico',
      'Escrita Acessível',
      'Organização',
      'Trabalho em Equipe',
      'Criatividade',      
      'Psicoeducação',      
    ],
  },
  {
    name: '📚 LabHum: Humanização da Vida Vivida',
    description:
      'Minha trajetória é profundamente atravessada pela participação no Laboratório de Humanidades (LabHum) do Centro de História e Filosofia das Ciências da Saúde (CEHFi – UNIFESP), no ciclo “Humanização através da vida vivida”. Mais do que uma disciplina teórica, o LabHum se configura como um espaço de reflexão sensível sobre a experiência humana, a liberdade, os afetos e os modos de existir, utilizando a literatura e a filosofia para ampliar a compreensão da subjetividade e do meio social. O projeto se organiza em ciclos semestrais, com cerca de dois meses de duração, envolvendo a leitura integral de uma obra seguida por um initenrário de encontros de debate com profissionais da saúde, educadores e o público em geral. Essa proposta reafirma a literatura como uma potente ferramenta de formação, mesmo em contextos profissionais e socais exigentes, ao favorecer a escuta, a empatia, a compreensão das narrativas singulares e o diálogo entre opiniões diversas. A leitura compartilhada aprofunda o entendimento da integralidade humana e contribui para uma atuação mais ética, sensível e responsável, impacto que se reflete diretamente na minha visão de prática profissional no desenvolvimento de pessoas, reforçando a convicção de que o centro de qualquer projeto deve ser o ser humano.',
    url: 'https://www.instagram.com/p/DQrmZ54Ddfq/',
    previewImage: ProjectLabhum,
    technologies: [
      'Humanização em Saúde',
      'Filosofia das Ciências da Saúde',
      'Empatia Crítica',
      'Comunicação Interpessoal',
      'Pensamento Analítico',
      'Cultura de Acolhimento',
      'Análise Literária e Filosófica',
    ],
  },
  {
    name: '💡 Trinus Jr.: Bussiness partner',
    description:
      'Na Trinus Jr., iniciei minha trajetória como Trainee e hoje ocupo a posição de Business Partner, atuando como o elo entre o desenvolvimento humano (DHO) e os resultados da empresa júnior. Em meu dia a dia, sou responsável por acompanhar e manter a comunicação alinhada com as diretorias de Marketing e Projetos, garantindo o suporte necessário para as lideranças. Minha atuação envolve o diagnóstico do ambiente de trabalho por meio da análise de pesquisas de clima organizacional e o gerenciamento de dados internos para orientar a tomada de decisão. Além disso, analiso e participo de processos de feedback para impulsionar o crescimento individual dos membros e melhorias na equipe e auxilio ativamente na implementação de novas estratégias corporativas, traduzindo as necessidades da equipe em ações concretas que otimizam os processos e fortalecem o negócio.',
    url: 'https://www.instagram.com/trinus.jr/',
    previewImage: ProjectTrinusJR,
    technologies: [
      'Gestão de Pessoas',
      'Empresa Jr.',
      'Desenvolvimento Humano',
      'Business Partner',
      'Pensamento Analítico',
      'People Analytics',
      'Gestão de Processos',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Melisa Cruz Felix',
    personAvatar: AvatarMel,
    title: 'Técnica e Graduanda de Enfermagem',
    testimonial:
      'A Beatriz atua no Projeto Green com comprometimento admirável, unindo a psicologia à horticultura terapêutica. Demonstra proatividade  do manejo técnico da terra até o suporte administrativo e acadêmico. Sua postura sensível, empática e responsável a destaca como uma profissional de saúde com grande capacidade de trabalho em equipe.',
  },
  {
    personName: 'Pedro Eduardo',
    personAvatar: AvatarPedro,
    title: 'Business Intelligence Analyst',
    testimonial:
      'Tive o prazer de ser professor da Beatriz no Projeto Alvo e, hoje, vê-la atuando como professora de inglês no mesmo projeto confirma sua evolução e compromisso. Ela é dedicada, proativa e colaborativa, com excelente trabalho em equipe e postura profissional exemplar. Aprovada no FCE, demonstra sólido domínio do idioma e ótima didática em sala. Recomendo fortemente a Beatriz para oportunidades acadêmicas e profissionais.',
  },
  {
    personName: 'Diego Gardenal',
    personAvatar: AvatarDiego,
    title: 'Freelancer',
    testimonial:
      'Trabalhar com a Bia foi uma experiência incrível! Desde o início, ela demonstrou uma organização impecável, sempre atenta aos detalhes e com uma visão clara do que precisava ser feito. Além disso, sua capacidade de manter tudo alinhado com leveza e bom humor fez toda a diferença no andamento do nosso projeto.',
  },
];