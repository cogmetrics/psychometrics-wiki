// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: { type: 'doc', id: 'intro' },
      collapsed: true,
      items: [],
    },
    'faq',
    'resources',
    {
      type: 'category',
      label: 'Foundations of Intelligence Research',
      collapsed: false,
      items: [
        'foundations/g_factor',
        'foundations/history-of-intelligence-concept',
        'foundations/discovery-of-g',
        'foundations/key-definitions-of-intelligence',
        'foundations/psychometrics-101',
        'foundations/basic-statistical-terminology',
      ],
    },
    {
      type: 'category',
      label: 'Major Theoretical Models of g',
      collapsed: true,
      items: [
        'theoretical/two-factor-theory',
        'theoretical/thurstone-primary-mental-abilities',
        'theoretical/cattell-horn-gf-gc-model',
        'theoretical/carroll-three-stratum-theory',
        'theoretical/bifactor-and-hierarchical',
        'theoretical/process-overlap-mutualism-network',
        'theoretical/alternative-paradigms',
      ],
    },
    {
      type: 'category',
      label: 'Landmark Intelligence Tests',
      collapsed: true,
      items: [
        'tests/stanford-binet',
        'tests/wechsler-series',
        'tests/ravens-progressive-matrices',
        'tests/woodcock-johnson',
      ],
    },
    {
      type: 'category',
      label: 'Biological Bases of Intelligence',
      collapsed: true,
      items: [
        'biology/genetics-of-intelligence',
        'biology/twin-and-adoption-designs',
        'biology/gwas-and-polygenic-scores',
        'biology/gene-environment-interplay',
      ],
    },
    {
      type: 'category',
      label: 'Developmental Trajectory Across the Lifespan',
      collapsed: true,
      items: [
        'development/infant-precursors',
        'development/childhood-stability-and-change',
        'development/adolescence-differentiation',
        'development/adulthood-and-aging',
      ],
    },
    {
      type: 'category',
      label: 'Environmental & Contextual Influences',
      collapsed: true,
      items: [
        'environment/education-and-school-quality',
        'environment/socio-economic-status',
        'environment/nutrition-health-toxins',
        'environment/flynn-effect-and-reversals',
        'environment/stress-trauma-cognitive-load',
      ],
    },
    {
      type: 'category',
      label: 'Cross-Cultural Perspectives & Test Bias',
      collapsed: true,
      items: [
        'cross-cultural/language-and-translation',
        'cross-cultural/measurement-invariance',
      ],
    },
    {
      type: 'category',
      label: 'Applied Contexts',
      collapsed: true,
      items: [
        'applied/educational-placement',
        'applied/occupational-and-military-selection',
        'applied/clinical-diagnostics',
      ],
    },
    {
      type: 'category',
      label: 'Critiques of g and IQ testing',
      collapsed: true,
      items: [
        'critiques/group-differences-and-race-debates',
        'critiques/stereotype-threat-and-test-anxiety',
        'critiques/eugenics-history-and-misuse',
        'critiques/multiple-intelligences-debate',
        'critiques/overinterpretation-and-iq-maximalism',
      ],
    },
    'glossary',
  ],
};

export default sidebars;
