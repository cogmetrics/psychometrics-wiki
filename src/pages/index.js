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
      <header className={`hero heroBanner ${styles.hero} heroFadeIn`}>
      <div className="container">
  <h1 className="hero__title">Cognitive Metrics</h1>
  <p className="hero__subtitle">Modern psychometrics, beautifully documented.</p>
  <div style={{ marginTop: '1.5rem' }}>
    <a
      className="button button--primary button--lg whiteTextFill"
      href="/wiki/docs/intro"
    >
      <span>🧠 Explore Wiki</span>
    </a>
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
        description="Validated IQ tests are statistically reliable and correlate with academic and professional outcomes—but they don't capture all types of intelligence."
      />
      <Feature
        title="Can I improve my IQ score?" 
        emoji="📈"
        description="While raw intelligence is relatively stable, you can improve test performance through practice and cognitive training."
      />
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
