import { Jost } from 'next/font/google';

import styled from '../style/mainVisual.module.css';

const JostFont = Jost({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function MainVisual() {
  return (
    <>
      <div className={styled.mv}>
        <h1 className={`${styled.pageTitle} ${JostFont.className} upper`}>Fukagawa Kazune</h1>
        <div className={styled.mv__cover}></div>
      </div>
    </>
  );
}
