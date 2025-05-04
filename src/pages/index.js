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
    title: 'g Factor',
    icon: 'fa-solid fa-brain',
    description: 'General intelligence underlying positive correlations among cognitive tasks.',
    to: '/wiki/docs/intro',
  },
  {
    title: 'Fluid Intelligence',
    icon: 'fa-solid fa-water',
    description: 'Capacity to solve novel problems independent of acquired knowledge.',
    to: '/wiki/fluid-intelligence',
  },
  {
    title: 'Crystallized Intelligence',
    icon: 'fa-solid fa-gem',
    description: 'Knowledge and verbal skills accumulated through education and experience.',
    to: '/wiki/crystallized-intelligence',
  },
  {
    title: 'Working Memory',
    icon: 'fa-solid fa-memory',
    description: 'Mental workspace for temporarily holding and manipulating information.',
    to: '/wiki/working-memory',
  },
  {
    title: 'Processing Speed',
    icon: 'fa-solid fa-bolt',
    description: 'How quickly the brain perceives, processes, and responds to information.',
    to: '/wiki/processing-speed',
  },
  {
    title: 'Item Response Theory',
    icon: 'fa-solid fa-chart-line',
    description: 'Statistical framework linking latent traits to item performance for test precision.',
    to: '/wiki/item-response-theory',
  },
];

function ConceptCard({title, icon, description, to}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <Link to={to} className="cmCard">
        <i className={clsx('cmIcon', icon)} aria-hidden="true" />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );}
