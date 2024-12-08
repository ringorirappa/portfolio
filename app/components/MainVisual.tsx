'use client';
import { useEffect, useRef, useState } from 'react';
import { Jost } from 'next/font/google';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import styled from '../style/mainVisual.module.css';

gsap.registerPlugin(ScrollTrigger);

const JostFont = Jost({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function MainVisual() {
  const [load, setLoad] = useState<boolean>(false);

  const mvRef = useRef(null);
  const mvCoverRef = useRef(null);

  useEffect(() => {
    setLoad(true);

    gsap.to(mvCoverRef.current, {
      width: '100vw',
      scrollTrigger: {
        trigger: mvRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });
  }, []);

  return (
    <>
      <div ref={mvRef} className={`${styled.mv} ${load && styled.loaded}`}>
        <h1 className={`${styled.pageTitle} ${JostFont.className} upper`}>
          <span className={styled.pageTitle__child}>Fukagawa Kazune</span>
        </h1>
        <div ref={mvCoverRef} className={styled.mv__cover}></div>
      </div>
    </>
  );
}
