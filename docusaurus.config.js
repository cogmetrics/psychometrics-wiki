// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CognitiveMetrics',
  tagline: 'Modern psychometrics, beautifully documented',
  favicon: 'img/favicon.ico',

  url: 'https://cognitivemetrics.com',
  baseUrl: '/wiki/',

  organizationName: 'cognitivemetrics',
  projectName: 'wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  /** ---------- Theme / layout ---------------------------------------- **/
  themeConfig: {
    image: 'img/social-card.png',           // social sharing
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,                 // light/dark toggle
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['php', 'python'],
    },

    navbar: {
      title: 'CognitiveMetrics',
      logo: {alt: 'CM logo', src: 'img/cognimetrics-logo.webp'},
      items: [
        {href: 'https://cognitivemetrics.com/', label: 'Home', position: 'left', target: '_self'},
        {to: '/docs/intro', label: 'Wiki', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {label: 'Quick Start', to: '/docs/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discussions', href: 'https://github.com/cognitivemetrics/wiki/discussions'},
            {label: 'Twitter / X', href: 'https://twitter.com/cognimetrics'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/cognitivemetrics/wiki'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Cognitive Metrics — All rights reserved.`,
    },
  },

  /** ---------- Presets ------------------------------------------------ **/
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {customCss: require.resolve('./src/css/custom.css')},
        gtag: {trackingID: 'G-XXXXXXX', anonymizeIP: true}, // optional GA4
      }),
    ],
  ],
};
export default config;
