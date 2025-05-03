import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

import clsx from 'clsx';

import styles from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url"         content="https://cognitivemetrics.com/" />
        <meta property="og:title"       content="Cognitive Metrics" />
        <meta property="og:description" content="Comprehensive Psychometrics, IQ Testing, and Neuroscience Wiki" />
        <meta property="og:image"       content="https://cognitivemetrics.com/assets/cognimetrics.webp"/>
        <meta property="og:type"        content="website" />
        <title>CognitiveMetrics</title>
      </Head>

      <Layout 
        description="Objective psychometrics & resources you can trust"
      >
        <header className={clsx('hero heroBanner', styles.hero)}>
          <div className="container">
            <h1 className="hero__title">Cognitive&nbsp;Metrics</h1>
            <p className="hero__subtitle">
              Evidence-based guides, research, and tools for measuring human ability.
            </p>

            <div className={styles.ctaRow}>
              <Link
                className="button button--primary button--lg margin-right--sm"
                to="/docs/intro"
              >
                📖 Start Reading
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/faq"
              >
                ❓ FAQ
              </Link>
            </div>
          </div>
        </header>

        <main>
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <Feature
                  title="What is an IQ test?"
                  emoji="❓"
                  description="An IQ test is a standardized assessment designed to measure cognitive abilities like reasoning, memory, and problem-solving."
                />
                <Feature
                  title="Are IQ tests accurate?"
                  emoji="📏"
                  description="Validated IQ tests are statistically reliable and correlate with academic and professional outcomes—but they don't capture every facet of intelligence."
                />
                <Feature
                  title="Can I improve my IQ score?"
                  emoji="📈"
                  description="While baseline ability is relatively stable, you can boost test performance through deliberate practice and cognitive training."
                />
              </div>
            </div>
          </section>

          <section className={clsx('padding-vert--lg', styles.howItWorks)}>
            <div className="container">
              <h2 className="text--center margin-bottom--lg">How Cognitive Metrics helps you</h2>
              <div className="row">
                <Step
                  number="1"
                  title="Learn the fundamentals"
                  text="Start with our Intro guide to understand what IQ really measures (and what it doesn’t)."
                  link="/docs/intro"
                />
                <Step
                  number="2"
                  title="Get common questions answered"
                  text="Browse the FAQ for quick clarifications backed by peer-reviewed research."
                  link="/docs/faq"
                />
                <Step
                  number="3"
                  title="Put knowledge into practice"
                  text="Use our free tests, calculators, and curated reading lists to apply what you’ve learned."
                  link="https://cognitivemetrics.com/tests/"
                  external
                />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

function Feature({emoji, title, description}) {
  return (
    <div className="col col--4 margin-bottom--lg text--center">
      <h3>
        {emoji} {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}

function Step({number, title, text, link, external = false}) {
  const Tag = external ? 'a' : Link;
  return (
    <div className="col col--4">
      <div className={styles.stepCard}>
        <span className={styles.stepNumber}>{number}</span>
        <h4>{title}</h4>
        <p>{text}</p>
        <Tag
          className="button button--sm button--outline button--primary"
          {...(external ? {href: link, target: '_self'} : {to: link})}
        >
          Learn&nbsp;more →
        </Tag>
      </div>
    </div>
  );
}
