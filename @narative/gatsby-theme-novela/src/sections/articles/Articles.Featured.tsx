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
        contentfulPost(title: {eq: "Carol Rizzo and Rob Layne Win Neptune Township Committee Election Again"}) {
          title
          date
          excerpt
          slug
          hero {
            sizes(quality: 100) {
              ...GatsbyContentfulSizes_withWebp
              }
            
          }
        }
      }
    `
  )
  return (
    <FeaturedContainer>
      <Link to={article.contentfulPost.slug}>
      <BgImg fluid={article.contentfulPost.hero.sizes} />
      <Overlay></Overlay>
      <TextContainer>
        <Title>
          <p>{article.contentfulPost.title}</p>
        </Title>
        <Excerpt>
          <p>{article.contentfulPost.excerpt}</p>
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
  height: 78vh;
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
  background-image: linear-gradient(to bottom, rgba(5, 5, 5, 0.1), rgba(5, 5, 5, 0.7));
  width: 100%;
  height: 100%;
`
const TextContainer = styled("div") `
  position: absolute;
  top: 80%;
  left: 50%;
  max-width: 800px;
  transform: translate(-50%,-50%);
  text-align: center;
`
const Title = styled("div")`
  font-family: ${p => p.theme.fonts.header};
  color: white;
  font-size: 34px;
  line-height: 1.1;
  text-transform: none;
  padding-bottom: 25px;
  font-weight: 600;

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
  font-size: 20px;
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