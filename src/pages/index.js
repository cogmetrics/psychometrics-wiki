import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import clsx from 'clsx';

import styles from './index.module.css';

/**
 * Landing page showcasing core psychometric concepts.
 * Cards have a max‑height, gentle hover lift, and blue icons consistent with the
 * reference image.
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

        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* Inline page styles — move into index.module.css when convenient */}
        <style>{`
          /* Background behind the grid */
          .cmSection { background: #f4f7ff; }

          .cmCard {
            display: block;
            padding: 2rem 2rem 1.5rem;
            background: #ffffff;
            border-radius: 15px;
            text-decoration: none;
            color: black;
            max-height: 260px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.06);
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .cmCard:hover {
            transform: translateY(-6px) scale(1.02);
            text-decoration: none;
            box-shadow: 0 8px 22px rgba(0,0,0,0.08);
          }

          /* Icon styling */
          .cmIcon {
            font-size: 2rem;
            color: #306D9B; /* vivid blue‑purple similar to reference */
            margin-bottom: 1rem;
            display: inline-block;
          }
        `}</style>
      </Head>

      <Layout description="Objective psychometrics & resources you can trust">
        <main className={clsx('padding-vert--xl', 'cmSection')}>
          <section className="container">
            <div className="row">
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

/**
 * Core psychometric topics.
 */
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
    href: '/wiki/docs/foundations/psychometrics-101',
  },
  {
    title: 'Basic Statistical Terminology',
    icon: 'fa-solid fa-chart-bar',
    description: 'Essential stats concepts needed to interpret test data accurately.',
    href: '/wiki/docs/foundations/basic-statistical-terminology',
  },
];


function ConceptCard({title, icon, description, href}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <Link to={href} className="cmCard">
        <i className={clsx('cmIcon', icon)} aria-hidden="true" />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}
