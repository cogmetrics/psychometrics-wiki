/* ─────────────────── src/pages/index.jsx ─────────────────── */
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import clsx from 'clsx';

import styles from './index.module.css';

/**
 * Landing page showcasing core psychometric concepts.
 * The hero section owns its backdrop; concept cards sit in a responsive grid.
 */
export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url"         content="https://cognitivemetrics.com/" />
        <meta property="og:title"       content="Cognitive Metrics" />
        <meta property="og:description" content="Comprehensive Psychometrics, IQ Testing, and Neuroscience Wiki" />
        <meta property="og:image"       content="https://cognitivemetrics.com/assets/cognimetrics.webp" />
        <meta property="og:type"        content="website" />
        <title>CognitiveMetrics</title>

        {/* Font Awesome icons */}
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </Head>

      <Layout description="Objective psychometrics & resources you can trust">
        {/* ────────── Hero ────────── */}
        <header className={styles.cmHero}>
          <div className={styles.cmHeroContent}>
            <h1 className={styles.cmHeroTitle}>
              Understand the science of mental ability.
            </h1>
            <p className={styles.cmHeroTagline}>
            Cognitive Metrics is a community-curated wiki dedicated to offering a comprehensive understanding of the science of mental ability.
            </p>
            <Link className="button button--secondary button--lg" to="/wiki/docs/intro">
              Start with the overview →
            </Link>
          </div>
        </header>

        {/* ────────── Concept grid ────────── */}
        <main className={clsx('padding-vert--xl', styles.cmSection)}>
          <section className="container">
            <div className={styles.cmGrid}>
              {concepts.map((c) => (
                <ConceptCard key={c.title} {...c} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

/* ---------- data + small card component ---------- */
const concepts = [
  {
    title: 'Introduction to Psychometrics',
    icon: 'fa-solid fa-brain',
    description: 'Start here for a concise overview of psychometric science.',
    href: '/wiki/docs/intro',
  },
  {
    title: 'Frequently Asked Questions',
    icon: 'fa-solid fa-circle-question',
    description: 'Quick answers to the most common psychometric queries.',
    href: '/wiki/docs/faq',
  },
  {
    title: 'Comprehensive Testing Resource',
    icon: 'fa-solid fa-clipboard-check',
    description: 'Curated list of validated tests, calculators, and reading links.',
    href: '/wiki/docs/resources',
  },
  {
    title: 'What is the g factor?',
    icon: 'fa-solid fa-lightbulb',
    description: 'Explore the general intelligence factor and its empirical support.',
    href: '/wiki/docs/foundations/g_factor',
  },
  {
    title: 'Psychometrics 101',
    icon: 'fa-solid fa-graduation-cap',
    description: 'Fundamental principles and measurement theories in psychometrics.',
    href: '/wiki/docs/foundations/g_factor',
  },
  {
    title: 'Basic Statistical Terminology',
    icon: 'fa-solid fa-chart-line',
    description: 'Essential stats concepts needed to interpret test data accurately.',
    href: '/wiki/docs/foundations/basic-statistical-terminology',
  },
];

function ConceptCard({title, icon, description, href}) {
  return (
    <Link to={href} className={clsx(styles.cmCard)}>
      <i className={clsx(styles.cmIcon, icon)} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}
