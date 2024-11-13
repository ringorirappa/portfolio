import styled from '../style/about.module.css';
import Heading from './Heading';

export default function About() {
  return (
    <>
      <div className={styled.container}>
        {/* <div className={styled.about__head}>
          <Heading title="プロフィール" />
        </div> */}
        <div className={styled.about__body}>
          <p className={styled.about__copy}>深川 和音と申します。</p>
          <p className={styled.about__text}>
            奈良県出身、兵庫県在住の32歳のマークアップコーダー。 新卒でバックオフィス業務に6年従事した後、Webサイト制作に魅了され、オンラインスクールと独学を併用し制作会社に転職。静的なサイト制作を続ける中で、プログラムを組んで動的に動く実装に興味が強まり、開発系の業務を希望し独学で修練中。
            <br />
            「よりシンプルに、より使いやすく」をポリシーとし、ユーザビリティを意識した実装を心がけています。
          </p>
          <p className={styled.about__text}>趣味：ドラム演奏、映画・アニメ鑑賞、ドライブ（ジムニー）、ロードバイク</p>
        </div>
      </div>
    </>
  );
}
