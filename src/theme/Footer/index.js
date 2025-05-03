import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <a href="/" className={styles.brand}>
          <img src="https://cognitivemetrics.com/assets/cognimetrics.webp" alt="CognitiveMetrics" loading="lazy" />
          <span>CognitiveMetrics</span>
        </a>

        <p className={styles.contact}>
          <strong>Connect with us:&nbsp;</strong>
          <a href="mailto:support@cognitivemetrics.co">
            support@cognitivemetrics.co
          </a>
        </p>
      </div>

      {/* ─────────── Bottom row ─────────── */}
      <div className={styles.bottomRow}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} CognitiveMetrics
        </p>

        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/tests">IQ&nbsp;Tests</a>
          <a href="/calculator">IQ&nbsp;Calculator</a>
          <a href="/faq">FAQ</a>
          <a href="/community">Community</a>
        </nav>
      </div>
    </footer>
  );
}
