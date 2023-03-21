import React from 'react';
import Head from 'next/head';
import { Noto_Sans_TC } from 'next/font/google';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Skills,
  Works,
} from '../components';
import styles from '../styles/Home.module.scss';

const noto_sans_tc = Noto_Sans_TC({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={noto_sans_tc.className}>
        <Navbar />
        <div className={styles.container}>
          <Hero />
          <Works />
          <Skills />
          <Experience />
          <About />
          <Contact />
        </div>
      </main>
    </>
  );
}
