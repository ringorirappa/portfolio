'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Link as Scroll } from 'react-scroll';

export default function Header() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  const onClickToggle = () => {
    setIsActive(!isActive);
  };

  const onClickFalse = () => {
    setIsActive(false);
  };

  return (
    <>
      <header className="header">
        <Link className="logo" href="/">
          <Image src="/logo.svg" width={60} height={60} alt="F" />
        </Link>
        <div className={`globalNavWrap ${isActive ? 'is-active' : ''}`}>
          <ul className="globalNav">
            <li>
              {pathname === '/' ? (
                <Scroll to="about" smooth={true} duration={600} offset={-40} className="globalNav__link" onClick={onClickFalse}>
                  プロフィール
                </Scroll>
              ) : (
                <Link href="/#about" className="globalNav__link">
                  プロフィール
                </Link>
              )}
            </li>
            <li>
              {pathname === '/' ? (
                <Scroll to="works" smooth={true} duration={600} offset={-40} className="globalNav__link" onClick={onClickFalse}>
                  制作実績
                </Scroll>
              ) : (
                <Link href="/#works" className="globalNav__link">
                  制作実績
                </Link>
              )}
            </li>
            <li>
              {pathname === '/' ? (
                <Scroll to="skill" smooth={true} duration={600} offset={-40} className="globalNav__link" onClick={onClickFalse}>
                  スキルセット
                </Scroll>
              ) : (
                <Link href="/#skill" className="globalNav__link">
                  スキルセット
                </Link>
              )}
            </li>
          </ul>
        </div>
        <button type="button" className={`navBtn sp-bl ${isActive ? 'is-active' : ''}`} onClick={onClickToggle}>
          <span className="navBtn__child"></span>
        </button>
      </header>
    </>
  );
}
