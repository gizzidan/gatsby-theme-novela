import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Featured = () => {
  const article = useStaticQuery(
    graphql`
      query       {
        article(title: {eq: "Testing this post"}) {
          title
          date
          hero {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <Img fluid={article.article.hero.childImageSharp.fluid} />
      <h1>{article.article.title}</h1>
      <h1>{article.article.date}</h1>
    </div>
  )
}




