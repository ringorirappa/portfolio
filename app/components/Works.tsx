import Link from 'next/link';
import Image from 'next/image';
import { Jost } from 'next/font/google';

import styled from '../style/works.module.css';
import { workItemType, workItems } from '../item/workItem';

const JostFont = Jost({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function Works() {
  return (
    <>
      <div className={styled.worksContents}>
        <ul className={styled.worksList}>
          {workItems.map((item: workItemType) => (
            <li key={item.id}>
              <Link href={`works/${item.url}`} className={styled.worksList__link}>
                <div className={styled.worksList__image}>
                  <Image src={item.image} width="800" height="450" alt={`「${item.name}」のキャプチャ`} />
                </div>
                <h3 className={`${styled.worksList__title} ${JostFont.className}`}>{item.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
        <p className={styled.worksContents__caption}>※制作会社での実績は掲載不可のため、掲載用に複製・加工しています。</p>
      </div>
    </>
  );
}
