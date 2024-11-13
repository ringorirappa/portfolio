export type workItemType = {
  id: number;
  name: string;
  image: string;
  url: string;
  description: string;
  term: string;
};

export const workItems = [
  {
    id: 1,
    name: 'Clamp Calculator',
    image: '/thum_clamp.jpg',
    url: 'clamp-calculator',
    description:
      'clampとvwを使用した値の計算を行えるChromeの拡張機能を作成。CSSのフォントサイズなどで、clampにて画面幅によって変動するように実装することが多いですが、計算が複雑なため都度ジェネレーターのサイトで作成していました。ただジェネレーターサイトへの移動に手間を感じ、制作で使用するChromeの拡張機能で計算できるようにすることで、計算の工数を減らしました。',
    term: '3時間',
  },
  {
    id: 2,
    name: 'VIEW（模写）',
    image: '/thum_view.jpg',
    url: 'view',
    description: '実務案件で制作した、マンションの公式サイト内の眺望が確認できるページの模写サイト。簡略化していますが、階数と間取りを選択することでそこから見える眺望が切り替わる仕様。当時、効率の良い画像の切り替え方や、複数の条件での切り替えの模索に苦労しました。',
    term: '5時間（実務での制作時）',
  },
  {
    id: 3,
    name: 'MANSION SITE（模写）',
    image: '/thum_mansion01.jpg',
    url: 'mansion01',
    description: '実務案件で制作したマンションの公式サイトの模写サイト（トップページのみ）。クライアントやデザイナーからアニメーションについての指示やこだわりがあり、相談や提案の上に実装。モダンな雰囲気と高級感を意識して制作しました。',
    term: '8時間（模写部分のみ・実務での制作時）',
  },
  {
    id: 4,
    name: 'MANSION SITE（模写）',
    image: '/thum_mansion02.jpg',
    url: 'mansion02',
    description: '実務案件で制作したマンションの公式サイトの模写サイト（トップページのみ）。横スクロールのアニメーションなど初めての実装で苦労しましたが、仕組みなどが理解できてよかったと実感しています。',
    term: '8時間（模写のみ・実務での制作時）',
  },
];