import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled";
import Img from "gatsby-image"
import mediaqueries from "@styles/media";
import { Link } from 'gatsby';

const Featured = () => {
  const article = useStaticQuery(
    graphql`
      query        {
        article(title: {eq: "Frank Ocean Releases New Music and Launches Series of Nightclub Events"}) {
          title
          date
          excerpt
          slug
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
      <Link to={article.article.slug}>
      <BgImg fluid={article.article.hero.childImageSharp.fluid} />
      <Overlay></Overlay>
      <TextContainer>
        <Title>
          <p>{article.article.title}</p>
        </Title>
        <Excerpt>
          <p>{article.article.excerpt}</p>
          <p style={{ fontSize: '40px',}}>&rarr;</p>
        </Excerpt>
      </TextContainer>
      </Link>
    </FeaturedContainer>
  )
}

export default Featured

const FeaturedContainer = styled("section")`
  overflow: hidden;
  height: 75vh;
  position: relative;
  margin: -61px auto 0px auto;
  &:hover, &:focus {
    cursor: pointer;
  }
  ${mediaqueries.desktop`
    
  `};

  ${mediaqueries.phablet`
    
  `};
`
const BgImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Overlay = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(to bottom, rgba(5, 5, 5, 0.5), rgba(5, 5, 5, 0.7));
  width: 100%;
  height: 100%;
`
const TextContainer = styled("div") `
  padding-top: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 800px;
  transform: translate(-50%,-50%);
  text-align: center;
`
const Title = styled("div")`
  font-family: ${p => p.theme.fonts.sansSerif};
  color: white;
  font-size: 52px;
  line-height: 1.1;
  text-transform: none;
  padding-bottom: 25px;
  font-weight: 500;

  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    width: 90vw;
    font-size: 24px;
    line-height: 1.3;
  `};
`;

const Excerpt = styled("div")`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-weight: 300;
  color: white;
  font-size: 22px;
  line-height: 1.4;


  ${mediaqueries.desktop`
    font-size: 38px;
    line-height: 1.2;
  `};

  ${mediaqueries.phablet`
    font-size: 16px;
    line-height: 1.6;
  `};
`;