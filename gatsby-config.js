/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Ghost CRUD aplikacija`,
    description: `Aplikacija koja omogućuje kreiranje,čitanje,ažuriranje i brisanje sadržaja`,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `http://localhost:2368`, 
        contentApiKey: `36d0f766b2b14709f54ee73502`, 
      },
    },
    `gatsby-plugin-react-helmet`,
    
  ],
}

