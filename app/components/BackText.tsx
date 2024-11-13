import { Jost } from 'next/font/google';

const JostFont = Jost({
  weight: ['400', '600'],
  subsets: ['latin'],
});

type backText = {
  text: string;
};

export default function BackText(props: backText) {
  const { text } = props;
  return <p className={`backText ${JostFont.className}`}>{text}</p>;
}
