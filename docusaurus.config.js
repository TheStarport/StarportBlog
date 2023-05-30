// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Starport',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.the-starport.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TheStarport', // Usually your GitHub org/user name.
  projectName: 'StarportBlog', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          blogSidebarCount: 10,
        },
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Starport',
        logo: {
          alt: 'The Starport Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/blog',
            target: '_self', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: 'https://wiki.the-starport.net',
            target: '_self', 
            label: 'Wiki', 
            position: 'left'
          },
          {
            to: 'https://the-starport.net/freelancer/forum/',
            target: '_self', 
            label: 'Forum', 
            position: 'left'
          },
          {
            to: 'https://discord.gg/tnrm4CB', 
            label: 'Discord', 
            position: 'left',
            
          },
          {
            to: 'https://github.com/TheStarport', 
            label: 'The Forge', 
            position: 'left',
            
          }
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ini', 'mermaid', 'cpp', 'csharp', 'pascal', 'maxscript', 'markdown']
      },
    }),
};

module.exports = config;