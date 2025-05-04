// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    /* ────────────────────────────────
       Top-level single pages
    ─────────────────────────────────*/
    'intro',        // Introduction
    'faq',          // Frequently Asked Questions
    'resources',    // Comprehensive Resources List

    /* ────────────────────────────────
       FOUNDATIONS
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Foundations of Psychometrics',
      collapsed: false,
      items: [
        'foundations/g_factor',                              // What is the g factor?
        'foundations/history-of-intelligence-concept',       // History of Intelligence
        'foundations/discovery-of-g',                        // The Discovery of g
        'foundations/theories-of-g',                         // Theories of g
        'foundations/key-definitions-of-intelligence',       // Key Definitions of Intelligence
        'foundations/basic-statistical-terminology',         // Basic Statistical Terminology
        'models/bifactor-and-hierarchical',                  // Bifactor & Hierarchical Models
        'models/process-overlap-mutualism-network',          // The Evolution of Modeling g
        'models/cattell-horn-gf-gc-model',                   // The CHC Model of Intelligence
        'foundations/spearman-law-of-diminishing-returns',   // Spearman’s Law of Diminishing Returns
      ],
    },

    /* ────────────────────────────────
       INTELLIGENCE TESTS
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Landmark Intelligence Tests',
      collapsed: true,
      items: [
        'tests/ratio-vs-deviation-scale',
        'tests/stanford-binet',
        'tests/wechsler-series',
        'tests/ravens-progressive-matrices',
        'tests/woodcock-johnson',
        'tests/pre-1994-sat',
        'tests/cattell-culture-fair',
        'tests/pre-2011-gre',
        'tests/agct-army-alpha',
        'tests/asvab',
        'tests/1926-sat',
      ],
    },

    /* ────────────────────────────────
       NEUROSCIENCE & GENETICS
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Neuroscience and Genetics',
      collapsed: true,
      items: [
        'genetics/parieto-frontal-integration-theory',
        'genetics/brain-efficiency-and-neurons',
        'genetics/behavioral-genetics',
        'genetics/heritability',
        'genetics/twin-and-adoption-designs',
        'genetics/gwas-and-polygenic-scores',
      ],
    },

    /* ────────────────────────────────
       INFLUENCE ON LIFE & SOCIETY
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Influence on Society and Individuals',
      collapsed: true,
      items: [
        'influence/life-outcomes-and-success',
        'influence/academic-achievement',
        'influence/gifted-programs',
        'influence/occupations-and-specific-jobs',
        'influence/military',
      ],
    },

    /* ────────────────────────────────
       STATISTICS
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Statistics behind Psychometrics',
      collapsed: true,
      items: [
        'stats/reliability-and-validity',
        'stats/factor-analysis',
        'stats/item-response-theory',
        'stats/differential-item-functioning',
      ],
    },

    /* ────────────────────────────────
       ENVIRONMENT & DEVELOPMENT
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Environment and Development',
      collapsed: true,
      items: [
        'environment/education',
        'environment/socioeconomic-status',
        'environment/nutrition-health-toxins',
        'development/prenatal-and-infant-experience',
        'development/parenting-and-resources',
        'development/adolescence',
        'development/aging',
      ],
    },

    /* ────────────────────────────────
       NEURODIVERGENCE
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Neurodivergence and Psychometrics',
      collapsed: true,
      items: [
        'neurodivergence/adhd',
        'neurodivergence/autism',
        'neurodivergence/dyslexia',
        'neurodivergence/dyscalculia',
        'neurodivergence/phantasia',
        'neurodivergence/miscellaneous',
      ],
    },

    /* ────────────────────────────────
       GROUP DIFFERENCES
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Group Differences',
      collapsed: true,
      items: [
        'group-differences/race',
        'group-differences/sex',
        'group-differences/national-iq-datasets',
      ],
    },

    /* ────────────────────────────────
       BIASES
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Biases in Testing',
      collapsed: true,
      items: [
        'biases/practice-effect',
        'biases/spearman-law-of-diminishing-returns',
        'biases/flynn-effect',
        'biases/language-and-translation',
        'biases/measurement-invariance',
      ],
    },

    /* ────────────────────────────────
       CRITIQUES
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Critiques of g and IQ testing',
      collapsed: true,
      items: [
        'critiques/group-differences-and-race-debates',
        'critiques/stereotype-threat-and-test-anxiety',
        'critiques/eugenics-history-and-misuse',
        'critiques/alternative-models-of-intelligence',
        'critiques/nature-vs-nurture',
      ],
    },

    /* ────────────────────────────────
       MISCELLANEOUS
    ─────────────────────────────────*/
    {
      type: 'category',
      label: 'Miscellaneous',
      collapsed: true,
      items: [
        'misc/investment-theory',
        'misc/mensa',
        'misc/mega-test',
        'misc/liam-milliken',
      ],
    },

    /* ────────────────────────────────
       GLOSSARY
    ─────────────────────────────────*/
    'glossary',
  ],
};

export default sidebars;
