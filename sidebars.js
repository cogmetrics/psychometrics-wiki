// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  wikiSidebar: [
    'intro',
    'faq',
    'misconceptions',
    { label: 'Foundations',
      type: 'category',
      collapsed: false,
      items: [
        'foundations/g_factor',
        //'foundations/history-of-intelligence-concept',
        //'foundations/discovery-of-g',
        //'foundations/theories-of-g',
        //'foundations/key-definitions-of-intelligence',
        //'foundations/basic-statistical-terminology',
        //'foundations/bifactor-and-hierarchical',
        //'foundations/evolution-of-modeling-g',
        //'foundations/chc-model-of-intelligence', 
      ],
    },
    { label: 'Landmark Intelligence Tests',
      type: 'category',
      collapsed: true,
      items: [
        //'tests/stanford-binet',
        //'tests/wechsler-series',
        //'tests/ravens-progressive-matrices',
        //'tests/woodcock-johnson',
        //'tests/cattell-culture-fair',
        'tests/pre-1994-sat',
        //'tests/pre-2011-gre',
        //'tests/agct-army-alpha',
        //'tests/asvab',
        //'tests/1926-sat',
      ],
    },
    { label: 'Neuroscience and Genetics',
      type: 'category',
      collapsed: true,
      items: [
        //'genetics/parieto-frontal-integration-theory',
        //'genetics/brain-efficiency-and-neurons',
        //'genetics/behavioral-genetics',
        //'genetics/heritability',
        //'genetics/twin-and-adoption-designs',
        'genetics/gwas-and-polygenic-scores',
      ],
    },
    /*
    { label: 'Influence on Life',
      type: 'category',
      collapsed: true,
      items: [
        //'influence/life-outcomes-and-success',
        //'influence/academic-achievement',
        //'influence/gifted-programs',
        //'influence/occupations-and-specific-jobs',
        //'influence/military',
      ],
    },
    */
    /*
    { label: 'Statistics behind Psychometrics',
      type: 'category',
      collapsed: true,
      items: [
        //'stats/reliability-and-validity',
        //'stats/factor-analysis',
        //'stats/item-response-theory',
        //'stats/differential-item-functioning',
      ],
    },
    */
    { label: 'Environment and Development',
      type: 'category',
      collapsed: true,
      items: [
        //'environment/education',
        //'environment/socioeconomic-status',
        'environment/nutrition',
        //'environment/parenting-and-resources',
        //'environment/prenatal-and-infant-experience',
        //'environment/adolescence',
        //'environment/aging',
      ],
    },
    /*
    { label: 'Neurodivergence',
      type: 'category',
      collapsed: true,
      items: [
        //'neurodivergence/adhd',
        //'neurodivergence/autism',
        //'neurodivergence/dyslexia',
        //'neurodivergence/dyscalculia',
        //'neurodivergence/phantasia',
        //'neurodivergence/miscellaneous',
      ],
    },
    */
    /*
    { label: 'Group Differences',
      type: 'category',
      collapsed: true,
      items: [
        //'group-differences/race',
        //'group-differences/sex',
        //'group-differences/nations',
      ],
    },
    */
    /*
    { label: 'Biases in Testing',
      type: 'category',
      collapsed: true,
      items: [
        //'biases/practice-effect',
        //'biases/spearman-law-of-diminishing-returns',
        //'biases/flynn-effect',
        //'biases/language-and-translation',
        //'biases/measurement-invariance',
      ],
    },
    */
    /*
    { label: 'Critiques',
      type: 'category',
      collapsed: true,
      items: [
        //'critiques/group-differences-and-race-debates',
        //'critiques/stereotype-threat-and-test-anxiety',
        //'critiques/eugenics-history-and-misuse',
        //'critiques/alternative-models-of-intelligence',
        //'critiques/nature-vs-nurture',
      ],
    },
    */
    { label: 'Miscellaneous',
      type: 'category',
      collapsed: true,
      items: [
        //'misc/investment-theory',
        //'misc/mensa',
        'misc/mega-test',
        //'misc/liam-milliken',
      ],
    },
    'glossary',
  ],
};

export default sidebars;
