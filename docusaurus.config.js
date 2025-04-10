// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:   'Neu dabei?',
  tagline: 'Kein Problem, schauen wir uns ein wenig um.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://klima_wiki.docusaurus.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/klima_wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Klasse Klima', // Usually your GitHub org/user name.
  projectName: 'klima_wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus.png',
      navbar: {
        title: 'Index',
        logo: {
          alt: 'My Site Logo',
          src: 'img/png/KlasseKlima_Logo2.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Wiki',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'techSidebar',
          //   position: 'left',
          //   label: 'Road to tech literacy',
          // },
          // {to: '/blog', label: 'Blog !?', position: 'left'},
          {
            href: 'https://github.com/PiedPiper2403/klima_wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Zurück zum Treffpunkt',
                href: 'https://treff.klasseklima.org',
              },
            ],
          },
          {
            title: 'Weiteres',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/PiedPiper2403/klima_wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, dokumentiert mit Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
