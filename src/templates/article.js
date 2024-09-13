import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const ArticleTemplate = ({ data }) => {
  const article = data.ghostPost
  return (
    <div>
      <Helmet>
        <title>{article.title}</title>
      </Helmet>
      <h1>{article.title}</h1>
      <p><strong>Autor:</strong> {article.primary_author?.name || "Nepoznat Autor"}</p>
      <p><strong>Datum:</strong> {article.published_at || "Nepoznat datum"}</p>
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      html
      published_at(formatString: "MMMM DD, YYYY")
      primary_author {
        name
      }
    }
  }
`

export default ArticleTemplate

