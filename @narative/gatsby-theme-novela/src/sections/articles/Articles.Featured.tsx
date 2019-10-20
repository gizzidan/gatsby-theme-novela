import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled";
import Img from "gatsby-image"
import mediaqueries from "@styles/media";


const Featured = () => {
  const article = useStaticQuery(
    graphql`
      query        {
        article(title: {eq: "nicki minaj and fendi have teamed up for a capsule collection"}) {
          title
          date
          excerpt
          hero {
            childImageSharp {
              fluid(maxWidth: 3000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )
  return (
    <FeaturedContainer>
      <Img fluid={article.article.hero.childImageSharp.fluid} />
      <Overlay></Overlay>
      <TextContainer>
        <Title>
          <p>{article.article.title}</p>
        </Title>
        <Excerpt>
          {article.article.excerpt}
        </Excerpt>
      </TextContainer>
    </FeaturedContainer>
  )
}

export default Featured

const FeaturedContainer = styled("section")`
  overflow: hidden;
  height: 67vh;
  position: relative;
  margin: 0 auto;
`
const Overlay = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(0, 0, 0, 0.7));
  width: 100%;
  height: 100%;
`
const TextContainer = styled("div") `
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
`
const Title = styled("div")`
  font-family: ${p => p.theme.fonts.funHeader};
  color: white;
  font-size: 52px;
  line-height: 1.1;
  text-transform: uppercase;
  padding-bottom: 25px;

  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.3;
  `};
`;

const Excerpt = styled("p")`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 400;
  color: white;
  font-size: 22px;
  line-height: 1.4;
  text-transform: lowercase;

  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.3;
  `};
`;