// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Impacto",
  tagline: "A modular javascript canvas render",
  url: "https://201flaviosilva-labs.github.io/Impacto/",
  baseUrl: "/Impacto/",
  staticDirectories: ["static", "jsdoc"],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "201flaviosilva-labs", // Usually your GitHub org/user name.
  projectName: "Impacto", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/201flaviosilva/Impacto",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],

    ["./plugins/jsdoc2docusaurus.js", {},], // Generate the docs from jsdoc
    ["./plugins/copy2docusaurus.js", {},], // Copy files to the docs folder
  ],

  i18n: {
    defaultLocale: "en-GB",
    locales: ["en-GB"]
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Impacto",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/201flaviosilva/Impacto",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Issues",
                href: "https://github.com/201flaviosilva/Impacto/issues",
              },
              {
                label: "Forum",
                href: "https://github.com/201flaviosilva/Impacto/discussions",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/201flaviosilva/Impacto",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Impacto. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
