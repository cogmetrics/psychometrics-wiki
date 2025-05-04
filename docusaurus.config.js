// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import math   from 'remark-math';
import katex  from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CognitiveMetrics',
  tagline: 'Work in progress, come back soon',
  favicon: 'img/favicon.ico',

  url: 'https://cognitivemetrics.com',
  baseUrl: '/wiki/',

  organizationName: 'cognitivemetrics',
  projectName: 'wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  
  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-2b0Q5iv51uM5UWXKO55dRrYwiam7DzF4Bf32c25VWlP5HZ8i0uKg3nHFW9W6p5e6',
    crossorigin: 'anonymous',
  },],

  themes: [[
    require.resolve('@easyops-cn/docusaurus-search-local'),
    /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
    {
      hashed: true,
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
      searchBarPosition: 'right',
      indexPages: true,
    },
  ],],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['php', 'python'],
    },

    navbar: {
      title: 'CognitiveMetrics',
      logo: {
        alt: 'CM logo',
        src: 'img/cognimetrics-logo.webp',
        href: 'https://cognitivemetrics.com',
        target: '_self',
      },
      items: [
        {href: 'https://cognitivemetrics.com/tests/', label: 'IQ Tests', position: 'left', target: '_self', className: 'no-icon-navbar',},
        {href: 'https://cognitivemetrics.com/calculator/', label: 'IQ Calculator', position: 'left', target: '_self', className: 'no-icon-navbar',},
        {to: '/', label: 'Wiki', position: 'left'},
        {href: 'https://reddit.com/r/iqtest/', label: 'Community', position: 'left', target: '_self', className: 'no-icon-navbar',},
        {type: 'search', position: 'right'},
      ],
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {customCss: require.resolve('./src/css/custom.css')},
        gtag: {trackingID: 'G-XXXXXXX', anonymizeIP: true},
      }),
    ],
  ],
};
export default config;
