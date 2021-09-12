import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Atlahua | Portfolio</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='Atlahua Website | Is a personal portfolio of Hugo Israel Ramirez Soto who offers its professional services.'
        ></meta>
        <link rel='canonical' href='http://www.atlahua.website/' />
        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Atlahua | Portfolio' />
        <meta
          property='og:description'
          content='Personal portfolio of Hugo Israel Ramirez Soto who offers its professional services.'
        />
        <meta property='og:url' content='http://www.atlahua.website/' />
        <meta property='og:site_name' content='Atlahua Website' />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
