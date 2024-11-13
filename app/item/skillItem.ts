export type skillItemType = {
  id: number;
  name: string;
  level: string;
  term: string;
  description?: string;
  isCoding: boolean;
};

export const skillItems = [
  {
    id: 1,
    name: 'HTML',
    level: '実務レベル',
    term: '3年〜',
    isCoding: true,
  },
  {
    id: 2,
    name: 'CSS',
    level: '実務レベル',
    term: '3年〜',
    description: 'CSS設計を意識したコーディングが可能。',
    isCoding: true,
  },
  {
    id: 3,
    name: 'JavaScript',
    level: '実務レベル',
    term: '3年〜',
    description: 'DOM操作など、主に静的サイトで扱う実装が可能。',
    isCoding: true,
  },
  {
    id: 4,
    name: 'PHP',
    level: '実務レベル（WordPress）',
    term: '〜3年（主にWordPressで使用）',
    isCoding: true,
  },
  {
    id: 5,
    name: 'TypeScript',
    level: '個人学習レベル',
    term: '3ヶ月',
    isCoding: true,
  },
  {
    id: 6,
    name: `React・Next.js`,
    level: '個人学習レベル',
    term: '3ヶ月',
    isCoding: true,
  },
  {
    id: 7,
    name: 'Figma',
    level: '実務レベル',
    term: '1年〜',
    description: '軽微なデザイン・加工が可能。',
    isCoding: false,
  },
  {
    id: 8,
    name: 'Illustrator',
    level: '実務レベル',
    term: '2年〜',
    description: '軽微なデザイン・加工が可能。',
    isCoding: false,
  },
  {
    id: 9,
    name: 'Photoshop',
    level: '実務レベル',
    term: '2年〜',
    description: '軽微なデザイン・加工が可能。',
    isCoding: false,
  },
  {
    id: 10,
    name: 'Git・Github',
    level: '実務レベル（GUI）',
    term: '1年〜',
    isCoding: false,
  },
];
