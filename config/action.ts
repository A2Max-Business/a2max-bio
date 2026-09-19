export interface ActionPhase {
  id: string;
  letter: string;
  slug: string;
  title: string;
  verb: string;
  description: string;
  href: string;
}

export const actionPhases: ActionPhase[] = [
  {
    id: "a",
    letter: "A",
    slug: "a",
    title: "Auditoria e Análise",
    verb: "DESCOBRIMOS",
    description: "Entendemos o cenário, identificamos gargalos, desperdícios e oportunidades.",
    href: "/action/a",
  },
  {
    id: "c",
    letter: "C",
    slug: "c",
    title: "Construção da Estrutura",
    verb: "ESTRUTURAMOS",
    description: "Corrigimos ou construímos a base de processos, pessoas, tecnologia e dados.",
    href: "/action/c",
  },
  {
    id: "t",
    letter: "T",
    slug: "t",
    title: "Tráfego e Tração",
    verb: "MOVIMENTAMOS",
    description: "Geramos demanda e oportunidades pelos canais mais adequados.",
    href: "/action/t",
  },
  {
    id: "i",
    letter: "I",
    slug: "i",
    title: "Inteligência de Dados",
    verb: "ENTENDEMOS",
    description: "Transformamos dados em informação útil para decisões.",
    href: "/action/i",
  },
  {
    id: "o",
    letter: "O",
    slug: "o",
    title: "Otimização Contínua",
    verb: "MELHORAMOS",
    description: "Corrigimos gargalos e potencializamos o que funciona.",
    href: "/action/o",
  },
  {
    id: "n",
    letter: "N",
    slug: "n",
    title: "Novo Ciclo / Next Step",
    verb: "AVANÇAMOS",
    description: "Definimos o próximo nível e iniciamos um novo ciclo de crescimento.",
    href: "/action/n",
  }
];
