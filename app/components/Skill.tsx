import { Jost } from 'next/font/google';

import styled from '../style/skill.module.css';
import { skillItemType, skillItems } from '../item/skillItem';

const JostFont = Jost({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function Skill() {
  const codingSkill = skillItems.filter((item: skillItemType) => item.isCoding);

  const otherSkill = skillItems.filter((item: skillItemType) => !item.isCoding);
  return (
    <>
      <div className={styled.wrap}>
        <div className={styled.skillContents}>
          <h3 className={styled.skill__title}>コーディング</h3>
          <ul className={styled.skillList}>
            {codingSkill.map((item: skillItemType) => (
              <li key={item.id}>
                <div className={styled.skillList__name}>
                  <h3 className={`${styled.skillList__title} ${JostFont.className}`}>{item.name}</h3>
                </div>
                <div className={styled.skillList__body}>
                  <dl>
                    <dt>レベル・・・</dt>
                    <dd>{item.level}</dd>
                  </dl>
                  <dl>
                    <dt>経験年数・・・</dt>
                    <dd>{item.term}</dd>
                  </dl>
                  {item.description && (
                    <dl>
                      <dt>補足事項・・・</dt>
                      <dd>{item.description}</dd>
                    </dl>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styled.skillContents}>
          <h3 className={styled.skill__title}>デザイン・その他</h3>
          <ul className={styled.skillList}>
            {otherSkill.map((item: skillItemType) => (
              <li key={item.id}>
                <div className={styled.skillList__name}>
                  <h3 className={styled.skillList__title}>{item.name}</h3>
                </div>
                <div className={styled.skillList__body}>
                  <dl>
                    <dt>レベル・・・</dt>
                    <dd>{item.level}</dd>
                  </dl>
                  <dl>
                    <dt>経験年数・・・</dt>
                    <dd>{item.term}</dd>
                  </dl>
                  {item.description && (
                    <dl>
                      <dt>補足事項・・・</dt>
                      <dd>{item.description}</dd>
                    </dl>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
