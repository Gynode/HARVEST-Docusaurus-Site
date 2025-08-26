import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Plugin from '@docusaurus/plugin-content-docs';

const config: Config = {
  title: 'HARVEST Blockchain',
  tagline: 'Cultivating Ethical Blockchain Innovation from Africa',
  url: 'https://gynode.github.io',
  baseUrl: '/HARVEST-Docusaurus-Site/', // Corrected baseUrl for your GitHub Pages repo
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/harvest_favicon.png', // Or .ico or .svg, based on your file

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Gynode', // Usually your GitHub org/user name.
  projectName: 'HARVEST-Docusaurus-Site', // Usually your repo name.

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Gynode/HARVEST-Docusaurus-Site/tree/main/', // Link to your repo's main branch
        } satisfies Plugin.Options,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Gynode/HARVEST-Docusaurus-Site/tree/main/', // Link to your repo's main branch
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } as Plugin.Options,
    ],
  ],

  themeConfig: {
    // Place externalLinkIcon directly here to disable globally
    externalLinkIcon: false, // CORRECT PLACEMENT

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg', // You can change this later to a HARVEST social card
    navbar: {
      title: 'HARVEST Website',
      logo: {
        alt: 'HARVEST Blockchain Logo',
        src: 'img/logo.svg', // Assumes you've placed your logo here
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'harvestSidebar',
          position: 'left',
          label: 'Whitepaper',
        },
        // This is the commented-out GitHub link:
        /*
        {
          href: 'https://github.com/Gynode/HARVEST-Docusaurus-Site',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
      // externalLinkIcon: false, // NOT HERE (if placed globally above)
    },
    docs: { // This 'docs' object inside themeConfig is for sidebar hideable, etc., NOT for externalLinkIcon
      sidebar: {
        hideable: true,
      },
      // externalLinkIcon: false, // NOT HERE
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Whitepaper',
              to: '/docs/whitepaper/introduction',
            },
            {
              label: 'Guides',
              to: '/docs/HARVEST_User_Guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            // You can add links to your community channels here
             {
               label: 'Discord',
               href: 'https://https://discord.com/login',
             },
             {
               label: 'Twitter',
               href: 'https://x.com/i/flow/login?lang=en',
             },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
             {
               label: 'GitHub',
               href: 'https://github.com/Gynode/HARVEST-Docusaurus-Site', // You can uncomment this if you want it in the footer
             },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Advanced Light Systems (ALSYS).  Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Plugin.ThemeConfig,
};

export default config;