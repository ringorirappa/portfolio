import Link from 'next/link';
import Image from 'next/image';

import { Jost } from 'next/font/google';

import styled from '../../style/works.module.css';
import { workItemType, workItems } from '../../item/workItem';
import Heading from '@/app/components/Heading';
import Layout from '@/app/layout/Layout';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const JostFont = Jost({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function Work({ params }: { params: workItemType }) {
  return (
    <>
      <Header />
      <main className={styled.main}>
        <Layout id="workDetail" className="workDetail">
          <Heading title="制作実績" />
          {workItems.map(
            (item: workItemType) =>
              item.url === params.url && (
                <div className={styled.workContents}>
                  <div className={styled.workContents__image}>
                    <Link href={item.link} target="_blank">
                      <Image src={item.image} width={800} height={450} alt={`${item.name}のキャプチャ`} />
                    </Link>
                  </div>
                  <div className={styled.detail}>
                    <h2 className={`${styled.detail__title} ${JostFont.className}`}>{item.name}</h2>
                    <p className={styled.detail__text}>{item.description}</p>
                    <p className={styled.detail__charge}>担当：{item.charge}</p>
                    <p className={styled.detail__term}>制作期間：{item.term}</p>
                    {item.link && (
                      <div className={styled.detail__more}>
                        <Link href={item.link} className={`btn upper ${styled.detail__link} ${JostFont.className}`} target="_blank">
                          {item.github ? 'Github' : 'More'}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )
          )}
          <div className={styled.back}>
            <Link href="../../#works" className={styled.backBtn}>
              一覧に戻る
            </Link>
          </div>
        </Layout>
      </main>
      <Footer />
    </>
  );
}
