import React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <div>
      <h1>Svi članci</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.slug}>
            <Link to={`/article/${node.slug}`}>
              {node.title} - {node.primary_author?.name || "Nepoznat Autor"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allGhostPost(sort: { fields: [published_at], order: DESC }) {
      edges {
        node {
          slug
          title
          primary_author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
