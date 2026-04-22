// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bornara AI',
  tagline: 'Business Operating System',
  favicon: 'img/favicon.ico',

  url: 'https://bornara-ai.github.io',
  baseUrl: '/bornara-ai-docs/',

  organizationName: 'Bornara-AI',
  projectName: 'bornara-ai-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn', // TODO: migrate to markdown.hooks.onBrokenMarkdownLinks in Docusaurus v4

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'detect',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/Bornara-AI/bornara-ai-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bornara AI',
        logo: {
          alt: 'Bornara AI',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            to: '/docs/Company_Overview/master-business-context',
            label: 'Docs',
            position: 'left',
          },
          {
            to: '/tasks',
            label: 'Task Board',
            position: 'left',
          },
          {
            to: '/manual',
            label: 'Manual',
            position: 'left',
          },
          {
            href: 'https://github.com/Bornara-AI/bornara-ai-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Planning',
            items: [
              { label: 'Action Plan (April)', to: '/docs/Business_Planning/april-2026-action-plan' },
              { label: '12-Month Roadmap', to: '/docs/Business_Planning/month-roadmap' },
              { label: 'Revenue Model', to: '/docs/Business_Planning/revenue-model' },
            ],
          },
          {
            title: 'Projects',
            items: [
              { label: 'Bornara Tools', to: '/docs/Projects/bornara-tools/' },
              { label: 'Task Board', to: '/tasks' },
            ],
          },
          {
            title: 'Compliance',
            items: [
              { label: 'CRA Guide', to: '/docs/Business_Planning/cra-compliance-guide' },
              { label: 'Expense Tracking', to: '/docs/Business_Planning/expense-tracking-guide' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Bornara AI — Mahdi Moradi, Calgary, Alberta.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'typescript'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
