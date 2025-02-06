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