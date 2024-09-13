/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve('./src/templates/article.js')

  const result = await graphql(`
    {
      allGhostPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allGhostPost.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${node.slug}`,
      component: articleTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}


