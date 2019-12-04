require("dotenv").config();

const siteMetadata = {
  title: `The Hum`,
  name: `The Hum`,
  siteUrl: `https://thehum.co`,
  description: `Bringing Sanity to the Jersey Shore: Your Local Source`,
  hero: {
    heading: `Bringing Sanity to the Jersey Shore: Your Local Source`,
    maxWidth: 652,
  },
  social: [
    {
      url: `https://twitter.com/thehumdaily`,
    },
    {
      url: `https://instagram.com/thehumdaily`,
    },
    {
      url: `https://youtube.com`,
    },
  ],
};

const plugins = [
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST
    },
  },
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: false,
        contentful: true,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Novela by Narative`,
      short_name: `Novela`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-118232427-3",
    },
  },
  {
    resolve: `gatsby-plugin-mailchimp`,
    options: {
      endpoint:
        "https://thehum.us4.list-manage.com/subscribe/post?u=2a29422160c469fe9a4610a49&amp;id=cf5fa978d2",
    },
  },
  {
    resolve: `gatsby-plugin-facebook-pixel`,
    options: {
      pixelId: '442385586682506',
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
