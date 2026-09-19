export type DestinationCategory = 'core' | 'social' | 'coming-soon';

export interface Destination {
  id: string;
  label: string;
  description: string;
  category: DestinationCategory;
  destination: string | null;
  priority: number;
  analyticsEvent?: string;
  enabled: boolean;
  isComingSoon?: boolean;
}

export const destinations: Destination[] = [
  {
    id: "diagnostico",
    label: "Diagnóstico",
    description: "Descubra onde estão os gargalos e as oportunidades da sua empresa.",
    category: "core",
    destination: null, // To be configured
    priority: 1,
    enabled: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Fale com nosso time ou com nossa IA e receba orientação.",
    category: "core",
    destination: null, // To be configured
    priority: 2,
    enabled: true,
  },
  {
    id: "action",
    label: "Método A.C.T.I.O.N.",
    description: "A nossa forma de pensar, diagnosticar e construir resultados.",
    category: "core",
    destination: "/action",
    priority: 3,
    enabled: true,
  },
  {
    id: "blog",
    label: "Blog",
    description: "Conteúdos práticos sobre negócios, dados, tecnologia e crescimento.",
    category: "core",
    destination: null, // To be configured
    priority: 4,
    enabled: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Acompanhe nossa visão e bastidores no LinkedIn.",
    category: "social",
    destination: null, // To be configured
    priority: 5,
    enabled: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    description: "Conteúdos, eventos e novidades.",
    category: "social",
    destination: null, // To be configured
    priority: 6,
    enabled: true,
  },
  {
    id: "cases",
    label: "Cases em breve",
    description: "Resultados reais. Histórias de evolução.",
    category: "coming-soon",
    destination: null,
    priority: 7,
    enabled: false,
    isComingSoon: true,
  },
];

export const socialDestinations = {
  linkedin: null,
  instagram: null,
  youtube: null,
  spotify: null,
};
