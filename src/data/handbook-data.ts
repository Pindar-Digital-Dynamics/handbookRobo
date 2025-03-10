// src/data/handbook-data.ts

export interface SubTheme {
    id: string
    title: string
  }
  
  export interface Theme {
    id: string
    title: string
    introduction?: string
    subThemes: SubTheme[]
  }
  
  export const handbookData: Theme[] = [
    {
      id: 'communication',
      title: 'Communication between generations',
      introduction: 'Understanding how different generations communicate is key to building stronger workplace relationships. This chapter explores various communication styles, tools, and strategies to bridge generational gaps.',
      subThemes: [
        { id: 'tools', title: 'Strumenti di comunicazione' },
        { id: 'conflicts', title: 'Risolvere conflitti' },
        { id: 'values', title: 'Valori' }
      ]
    },
    {
      id: 'diversity',
      title: 'Generational diversity from an intersectional point of view',
      introduction: 'Explore how generational differences intersect with other aspects of identity, creating unique perspectives and experiences in the workplace.',
      subThemes: [
        { id: 'sub1', title: 'Identità e diversità' },
        { id: 'sub2', title: 'Inclusione sul lavoro' }
      ]
    },
    {
      id: 'digital',
      title: 'How to bridge digital inequality',
      introduction: 'This chapter addresses the digital divide and offers strategies to ensure equal access to technology and digital literacy for all generations.',
      subThemes: [
        { id: 'sub1', title: 'Gap tecnologico' },
        { id: 'sub2', title: 'Formazione digitale' },
        { id: 'sub3', title: 'Strumenti collaborativi' },
        { id: 'sub4', title: 'Accessibilità digitale' }
      ]
    },
    {
      id: 'intercultural',
      title: 'Generational diversity from an intercultural point of view',
      introduction: 'Understanding the impact of cultural backgrounds on generational perspectives can enhance intercultural communication and collaboration in the workplace.',
      subThemes: [
        { id: 'sub1', title: 'Background culturali' }
      ]
    },
    {
      id: 'work',
      title: 'Differences in approach to work',
      introduction: 'This chapter explores how different generations approach work, including methodologies, work-life balance, and motivation.',
      subThemes: [
        { id: 'sub1', title: 'Metodologie di lavoro' },
        { id: 'sub2', title: 'Work-life balance' },
        { id: 'sub3', title: 'Motivazione e obiettivi' }
      ]
    }
  ]

  // Aggiungi dopo le interfacce esistenti
export interface Generation {
    id: string
    title: string
    ageRange: string
    description: string
  }
  
  export const generations: Generation[] = [
    {
      id: 'genz',
      title: 'Gen Z',
      ageRange: '14 - 27',
      description: 'Digital natives who value authenticity and work-life integration'
    },
    {
      id: 'millennial',
      title: 'Millennial',
      ageRange: '28 - 43',
      description: 'Tech-savvy optimists focused on purpose and growth'
    },
    {
      id: 'genx',
      title: 'Gen X',
      ageRange: '44 - 59',
      description: 'Independent and adaptable, bridging traditional and digital approaches'
    },
    {
      id: 'boomer',
      title: 'Baby Boomer',
      ageRange: '60 - 78',
      description: 'Experience-driven with strong work ethic and traditional values'
    }
  ]

  export interface Variant {
    id: string
    title: string
    color: string
    description: string
    generationId: string  // specifica per quale generazione è questa variante
    subThemeId: string    // per quale sottotema
  }

  // Dati delle varianti organizzati per generazione e sottotema
export const variants: Variant[] = [
  // Varianti per Gen Z
  {
    id: 'genz-tools-digital',
    title: 'Digital-First Communication',
    color: 'blue',
    description: 'Preferenza per comunicazione asincrona attraverso strumenti digitali',
    generationId: 'genz',
    subThemeId: 'tools'
  },
  {
    id: 'genz-tools-instant',
    title: 'Instant Messaging Priority',
    color: 'green',
    description: 'Focus su messaggistica istantanea e comunicazione rapida',
    generationId: 'genz',
    subThemeId: 'tools'
  },

  // Varianti per Millennials
  {
    id: 'millennial-tools-hybrid',
    title: 'Hybrid Communication',
    color: 'blue',
    description: 'Bilanciamento tra comunicazione digitale e tradizionale',
    generationId: 'millennial',
    subThemeId: 'tools'
  },
  {
    id: 'millennial-tools-collab',
    title: 'Collaborative Tools',
    color: 'green',
    description: 'Preferenza per strumenti di collaborazione e project management',
    generationId: 'millennial',
    subThemeId: 'tools'
  },

  // Varianti per Gen X
  {
    id: 'genx-tools-balanced',
    title: 'Balanced Approach',
    color: 'blue',
    description: 'Approccio equilibrato tra metodi tradizionali e digitali',
    generationId: 'genx',
    subThemeId: 'tools'
  },

  // Varianti per Boomers
  {
    id: 'boomer-tools-traditional',
    title: 'Traditional Communication',
    color: 'blue',
    description: 'Preferenza per comunicazione diretta e face-to-face',
    generationId: 'boomer',
    subThemeId: 'tools'
  }
]

export interface BookPage {
  id: string;
  title: string;
  themeId: string;
  subThemeId?: string;
  generationId?: string;
  variantId?: string;
  addedAt: number; // timestamp per ordinamento
}