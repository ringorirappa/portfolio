import Image from 'next/image';

import styled from './page.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Works from './components/Works';
import Skill from './components/Skill';
import Layout from './layout/Layout';
import Heading from './components/Heading';
import MainVisual from './components/MainVisual';
import About from './components/About';
import BackText from './components/BackText';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styled.main}>
        <MainVisual />

        <Layout id="about" className="about">
          <About />
          <BackText text="about" />
        </Layout>

        <Layout id="works" className="works">
          <Heading title="制作実績" />
          <Works />
          <BackText text="works" />
        </Layout>

        <Layout id="skill" className="skill">
          <Heading title="スキルセット" />
          <Skill />
          <BackText text="skill" />
        </Layout>

        <Footer />
      </main>
    </>
  );
}
