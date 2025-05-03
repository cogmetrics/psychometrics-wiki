import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Cognitive Metrics"
      description="Modern psychometrics, beautifully documented"
    >
      <header className={`hero heroBanner ${styles.hero}`}>
        <div className="container">
          <h1 className="hero__title">Cognitive Metrics</h1>
          <p className="hero__subtitle">Modern psychometrics, beautifully documented.</p>
          
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <Feature title="Validated tests" emoji="🧠"
                description="All tasks follow peer-reviewed protocols and psychometric standards." />
              <Feature title="Open-source code" emoji="💻"
                description="Inspectable JavaScript & Python pipelines for scoring and analysis." />
              <Feature title="API-first" emoji="⚡"
                description="REST endpoints let you integrate Cognitive Metrics anywhere." />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function Feature({emoji, title, description}) {
  return (
    <div className="col col--4 text--center">
      <h3>{emoji} {title}</h3>
      <p>{description}</p>
    </div>
  );
}
