// ============================================================
//  AMX Digital Group — DADOS DO SITE
//  Edite este arquivo para atualizar qualquer conteúdo da página
// ============================================================

export const siteData = {

  // ----------------------------------------------------------
  // INFORMAÇÕES DA EMPRESA
  // ----------------------------------------------------------
  company: {
    name: "AMX Digital Group",
    shortName: "AMX",
    tagline: "Agência Digital · Rio de Janeiro",
    domain: "amxdigitalgroup.com.br",
    whatsapp: "5521999999999",   // formato internacional, sem + ou espaços
    email: "contato@amxdigitalgroup.com.br",
  },

  // ----------------------------------------------------------
  // REDES SOCIAIS  (deixe "" para ocultar o link)
  // ----------------------------------------------------------
  social: {
    instagram: "https://www.instagram.com/amxdigital_/",
    linkedin:  "https://linkedin.com/company/amxdigitalgroup",
    whatsapp:  "https://wa.me/5521999999999",
  },

  // ----------------------------------------------------------
  // HERO
  // ----------------------------------------------------------
  hero: {
    badge: "Agência Digital · Rio de Janeiro",
    headline: ["Marketing Digital", "que gera"],
    headlineAccent: "resultados reais.",
    subtext:
      "Escalamos campanhas no Meta e Google Ads, criamos conteúdo que converte e transformamos dados em crescimento previsível para o seu negócio.",
    orb: {
      mainValue: "5x",
      mainLabel: "ROAS médio",
    },
    floatingCards: [
      { label: "Leads / mês",       value: "+3.200", color: "blue"   as const },
      { label: "Verba gerenciada",   value: "R$ 8M+", color: "gold"  as const },
      { label: "Crescimento",        value: "+500%",  color: "white" as const },
    ],
  },

  // ----------------------------------------------------------
  // ESTATÍSTICAS (faixa abaixo do hero)
  // ----------------------------------------------------------
  stats: [
    { value: "150+",  label: "Clientes atendidos"    },
    { value: "R$8M",  label: "Em verbas gerenciadas" },
    { value: "5x",    label: "ROAS médio"            },
    { value: "98%",   label: "Retenção de clientes"  },
  ],

  // ----------------------------------------------------------
  // SERVIÇOS
  // ----------------------------------------------------------
  services: {
    sectionLabel: "O que fazemos",
    title: "Serviços que",
    titleAccent: "escalam negócios",
    subtitle:
      "Cada serviço foi desenhado para gerar resultados mensuráveis. Sem achismos, sem promessas vazias — só dados e crescimento.",
    items: [
      {
        number: "01",
        title: "Tráfego Pago",
        description:
          "Campanhas de alto desempenho no Meta Ads e Google Ads. Escala controlada, ROI comprovado e relatórios transparentes em tempo real.",
      },
      {
        number: "02",
        title: "Gestão de Redes Sociais",
        description:
          "Conteúdo estratégico que gera autoridade, engajamento real e converte seguidores em clientes qualificados para sua marca.",
      },
      {
        number: "03",
        title: "Landing Pages",
        description:
          "Páginas otimizadas para conversão com pixels, CRMs e automações integradas. Cada elemento testado para maximizar resultados.",
      },
    ],
  },

  // ----------------------------------------------------------
  // PROCESSO (Como funciona)
  // ----------------------------------------------------------
  process: {
    sectionLabel: "Processo",
    title: "Como",
    titleAccent: "funciona",
    subtitle:
      "Um processo claro, transparente e orientado a dados — do diagnóstico à otimização contínua.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico",
        description:
          "Análise completa do seu negócio, mercado e concorrência — totalmente gratuita.",
      },
      {
        number: "02",
        title: "Estratégia",
        description:
          "Plano de ação personalizado com metas claras e métricas de sucesso definidas.",
      },
      {
        number: "03",
        title: "Execução",
        description:
          "Implementamos campanhas e conteúdos com agilidade e precisão técnica.",
      },
      {
        number: "04",
        title: "Otimização",
        description:
          "Monitoramento contínuo e ajustes para maximizar cada real investido no seu negócio.",
      },
    ],
  },

  // ----------------------------------------------------------
  // CTA FINAL
  // ----------------------------------------------------------
  cta: {
    sectionLabel: "Vamos começar",
    title: "Pronto para",
    titleAccent: "crescer de verdade?",
    bullets: [
      "Análise gratuita sem compromisso",
      "Retorno em até 24 horas",
      "Estratégia personalizada para seu negócio",
      "Resultados mensuráveis desde o primeiro mês",
    ],
    formTitle: "Fale com um especialista",
  },

  // ----------------------------------------------------------
  // FORMULÁRIO (labels e placeholders)
  // ----------------------------------------------------------
  form: {
    fields: {
      name:     { label: "Nome completo", placeholder: "Seu nome"          },
      email:    { label: "E-mail",        placeholder: "seu@email.com"     },
      whatsapp: { label: "WhatsApp",      placeholder: "(21) 99999-9999"   },
    },
    buttonText: "Quero minha análise gratuita →",
    disclaimer: "100% gratuito · sem spam · sem compromisso",
  },

}

export type SiteData     = typeof siteData
export type FloatingCard = typeof siteData.hero.floatingCards[number]
export type ServiceItem  = typeof siteData.services.items[number]
export type ProcessStep  = typeof siteData.process.steps[number]
export type StatItem     = typeof siteData.stats[number]
